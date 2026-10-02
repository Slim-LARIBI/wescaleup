import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactPayload = {
  name: string
  company?: string
  email: string
  website?: string
  projectType?: string
  businessType?: string
  budget?: string
  timeline?: string
  adSpend?: string
  currentStack?: string
  goals?: string
  message?: string
  /** Honeypot: hidden from humans, only robots fill it */
  fax?: string
  /** Visitor's clock (ms) when the form was displayed and when it was submitted */
  formStartedAt?: number
  formSubmittedAt?: number
}

const MIN_FILL_TIME_MS = 3000

const MAX_LENGTHS: Partial<Record<keyof ContactPayload, number>> = {
  name: 100,
  company: 150,
  email: 254,
  website: 300,
  projectType: 100,
  businessType: 100,
  budget: 100,
  timeline: 100,
  adSpend: 100,
  currentStack: 100,
  goals: 500,
  message: 5000,
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

/** One single word of 16+ letters with random upper/lower case, e.g. "CPOpOFnXJfbqmoCyC". */
function looksLikeRandomName(name: string) {
  const value = name.trim()
  if (!/^[A-Za-z]{16,}$/.test(value)) return false
  const innerUppercase = value.slice(1).replace(/[^A-Z]/g, '').length
  return innerUppercase >= 3 && /[a-z]/.test(value)
}

/** Returns the reason why the request looks like spam, or null if it looks legitimate. */
function detectSpam(body: ContactPayload): string | null {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return 'requête invalide'
  if (body.fax) return 'champ piège rempli'

  const { formStartedAt, formSubmittedAt } = body
  if (typeof formStartedAt !== 'number' || typeof formSubmittedAt !== 'number') {
    return 'horodatage absent'
  }
  if (formSubmittedAt - formStartedAt < MIN_FILL_TIME_MS) return 'envoi trop rapide'

  for (const field of ['name', 'email', 'projectType', 'goals', 'message'] as const) {
    if (typeof body[field] !== 'string' || !body[field]?.trim()) return `champ obligatoire manquant (${field})`
  }

  for (const [field, max] of Object.entries(MAX_LENGTHS)) {
    const value = body[field as keyof ContactPayload]
    if (value === undefined || value === null || value === '') continue
    if (typeof value !== 'string') return `format invalide (${field})`
    if (value.length > (max as number)) return `texte trop long (${field})`
  }

  if (!EMAIL_PATTERN.test(body.email)) return 'email invalide'
  if (looksLikeRandomName(body.name)) return 'nom aléatoire'

  return null
}

/** Generic error sent to the browser — the details stay in the server logs only. */
function genericError() {
  return NextResponse.json({ success: false, error: 'Submission failed.' }, { status: 500 })
}

/** Escapes form values before inserting them into the notification email HTML. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Escaped value, or "-" when the field is empty. */
function field(value?: string) {
  return value ? escapeHtml(value) : '-'
}

function getEnv(name: string) {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }
  return value
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as ContactPayload

    // Spam: nothing is sent to Airtable or by email, but the robot gets a normal success
    // response so it cannot tell it was blocked. The log line contains no personal data.
    const spamReason = detectSpam(body)
    if (spamReason) {
      console.warn(`[contact] spam bloqué : ${spamReason}`)
      return NextResponse.json({ success: true })
    }

    const airtableApiKey = getEnv('AIRTABLE_API_KEY')
    const airtableBaseId = getEnv('AIRTABLE_BASE_ID')
    const airtableTableName = getEnv('AIRTABLE_TABLE_NAME')
    const contactToEmail = getEnv('CONTACT_TO_EMAIL')

    const airtableRes = await fetch(
      `https://api.airtable.com/v0/${airtableBaseId}/${encodeURIComponent(
        airtableTableName
      )}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: body.name,
                Company: body.company || '',
                Email: body.email,
                Website: body.website || '',
                'Project Type': body.projectType || '',
                'Business Type': body.businessType || '',
                Budget: body.budget || '',
                Timeline: body.timeline || '',
                'Ad Spend': body.adSpend || '',
                'Current Stack': body.currentStack || '',
                Goals: body.goals || '',
                Message: body.message || '',
                Source: 'Wescaleup Contact Form',
              },
            },
          ],
        }),
      }
    )

    const airtableData = await airtableRes.json()

    if (!airtableRes.ok) {
      console.error('[contact] Airtable error:', airtableRes.status, airtableData)
      return genericError()
    }

    try {
      const { error } = await resend.emails.send({
        from: 'Wescaleup <onboarding@resend.dev>',
        to: [contactToEmail],
        replyTo: body.email,
        subject: 'Lead - Formulaire contact-nous - WeScaleupagency',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
            <h2>Nouveau lead Wescaleup</h2>

            <p><strong>Name:</strong> ${field(body.name)}</p>
            <p><strong>Company:</strong> ${field(body.company)}</p>
            <p><strong>Email:</strong> ${field(body.email)}</p>
            <p><strong>Website:</strong> ${field(body.website)}</p>
            <p><strong>Project Type:</strong> ${field(body.projectType)}</p>
            <p><strong>Business Type:</strong> ${field(body.businessType)}</p>
            <p><strong>Budget:</strong> ${field(body.budget)}</p>
            <p><strong>Timeline:</strong> ${field(body.timeline)}</p>
            <p><strong>Ad Spend:</strong> ${field(body.adSpend)}</p>
            <p><strong>Current Stack:</strong> ${field(body.currentStack)}</p>
            <p><strong>Goals:</strong> ${field(body.goals)}</p>
            <p><strong>Message:</strong><br />${field(body.message).replace(/\n/g, '<br />')}</p>
          </div>
        `,
      })

      // The lead is already saved in Airtable: an email failure is only logged
      if (error) console.error('[contact] Email error:', error)
    } catch (err) {
      console.error('[contact] Email error:', err)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[contact] Unexpected error:', error)
    return genericError()
  }
}