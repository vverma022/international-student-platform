/**
 * Support Email API Route
 * 
 * Handles sending support request emails via Gmail SMTP using nodemailer
 * Provides toast notifications on success/failure
 */

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { renderSupportEmailTemplate } from '@/components/email/SupportEmailTemplate'

/**
 * POST /api/send-support-email
 * Sends a support request email to the university support team
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { category, email, message } = body

    // Validate required fields
    if (!category || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check for required environment variables
    const smtpUser = process.env.SMTP_USER
    const smtpPassword = process.env.SMTP_PASSWORD?.replace(/\s+/g, '') // Remove spaces from password
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '587')
    const smtpSecure = process.env.SMTP_SECURE === 'true'
    
    if (!smtpUser || !smtpPassword) {
      console.error('Missing SMTP credentials in environment variables')
      return NextResponse.json(
        { 
          error: 'Email service not configured',
          details: 'Missing SMTP_USER or SMTP_PASSWORD in environment variables'
        },
        { status: 500 }
      )
    }

    // Gmail SMTP configuration
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    })

    // Generate email HTML
    const emailHtml = renderSupportEmailTemplate({
      category,
      email,
      message,
    })

    // Support email recipient
    const supportEmail = process.env.SUPPORT_EMAIL || 'doic@jaipur.manipal.edu'

    // Email options
    const mailOptions = {
      from: `"MUJ International Platform" <${smtpUser}>`,
      to: supportEmail,
      replyTo: email,
      subject: `Support Request: ${category}`,
      html: emailHtml,
      text: `
New Support Request

Category: ${category}
Student Email: ${email}

Message:
${message}

---
This email was sent from the MUJ International Student Platform.
      `.trim(),
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)

    console.log('Email sent successfully:', info.messageId)

    return NextResponse.json(
      { 
        success: true,
        message: 'Support request sent successfully',
        messageId: info.messageId
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending support email:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}

