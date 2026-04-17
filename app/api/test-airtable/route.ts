import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['laribi.slim@gmail.com'],
      subject: 'Lead - Formulaire contact-nous - WeScaleupagency',
      text: 'Test email from Wescaleup local environment.',
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { success: false, resendError: error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      emailSent: true,
      id: data?.id,
    })
  } catch (err) {
    console.error('Catch error:', err)
    return NextResponse.json(
      { success: false, error: 'Email send failed' },
      { status: 500 }
    )
  }
}