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

    if (
      !body.name ||
      !body.email ||
      !body.projectType ||
      !body.goals ||
      !body.message
    ) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields.' },
        { status: 400 }
      )
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
      console.error('Airtable error:', airtableData)
      return NextResponse.json(
        {
          success: false,
          error: 'Airtable insert failed.',
          details: airtableData,
        },
        { status: 500 }
      )
    }

    let emailSent = false
    let emailError: unknown = null

    try {
      const { error } = await resend.emails.send({
        from: 'Wescaleup <onboarding@resend.dev>',
        to: [contactToEmail],
        replyTo: body.email,
        subject: 'Lead - Formulaire contact-nous - WeScaleupagency',
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
            <h2>Nouveau lead Wescaleup</h2>

            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Company:</strong> ${body.company || '-'}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Website:</strong> ${body.website || '-'}</p>
            <p><strong>Project Type:</strong> ${body.projectType || '-'}</p>
            <p><strong>Business Type:</strong> ${body.businessType || '-'}</p>
            <p><strong>Budget:</strong> ${body.budget || '-'}</p>
            <p><strong>Timeline:</strong> ${body.timeline || '-'}</p>
            <p><strong>Ad Spend:</strong> ${body.adSpend || '-'}</p>
            <p><strong>Current Stack:</strong> ${body.currentStack || '-'}</p>
            <p><strong>Goals:</strong> ${body.goals || '-'}</p>
            <p><strong>Message:</strong><br />${(body.message || '').replace(/\n/g, '<br />')}</p>
          </div>
        `,
      })

      if (error) {
        emailError = error
      } else {
        emailSent = true
      }
    } catch (err) {
      emailError = err
    }

    return NextResponse.json({
      success: true,
      airtableInserted: true,
      emailSent,
      emailError,
      recordId: airtableData.records?.[0]?.id || null,
    })
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { success: false, error: 'Unexpected server error.' },
      { status: 500 }
    )
  }
}