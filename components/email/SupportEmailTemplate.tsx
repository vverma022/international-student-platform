/**
 * Support Email Template
 * 
 * Minimal, professional email template with MUJ International branding
 * Used when students submit support requests
 */

interface SupportEmailTemplateProps {
  category: string
  email: string
  message: string
  studentName?: string
}

export function SupportEmailTemplate({ 
  category, 
  email, 
  message,
  studentName = "Student"
}: SupportEmailTemplateProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ 
        margin: 0, 
        padding: 0, 
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        backgroundColor: '#f5f5f5'
      }}>
        {/* Email Container */}
        <table width="100%" cellPadding="0" cellSpacing="0" style={{ backgroundColor: '#f5f5f5', padding: '40px 20px' }}>
          <tr>
            <td align="center">
              {/* Main Content Card */}
              <table width="600" cellPadding="0" cellSpacing="0" style={{ 
                backgroundColor: '#ffffff', 
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden'
              }}>
                {/* Header with Branding */}
                <tr>
                  <td style={{ 
                    background: 'linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)',
                    padding: '32px 40px',
                    textAlign: 'center'
                  }}>
                    <h1 style={{ 
                      margin: 0,
                      color: '#ffffff',
                      fontSize: '24px',
                      fontWeight: '700',
                      letterSpacing: '-0.5px'
                    }}>
                      MUJ International
                    </h1>
                    <p style={{ 
                      margin: '8px 0 0 0',
                      color: '#E0E7FF',
                      fontSize: '14px',
                      fontWeight: '500'
                    }}>
                      Student Support Services
                    </p>
                  </td>
                </tr>

                {/* Content Body */}
                <tr>
                  <td style={{ padding: '40px' }}>
                    {/* Support Request Badge */}
                    <div style={{ 
                      display: 'inline-block',
                      backgroundColor: '#EEF2FF',
                      color: '#4F46E5',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      marginBottom: '24px'
                    }}>
                      New Support Request
                    </div>

                    {/* Greeting */}
                    <h2 style={{ 
                      margin: '0 0 16px 0',
                      color: '#1F2937',
                      fontSize: '20px',
                      fontWeight: '600'
                    }}>
                      Support Request Received
                    </h2>

                    <p style={{ 
                      margin: '0 0 24px 0',
                      color: '#6B7280',
                      fontSize: '15px',
                      lineHeight: '24px'
                    }}>
                      A new support request has been submitted through the MUJ International Student Platform.
                    </p>

                    {/* Request Details */}
                    <table width="100%" cellPadding="0" cellSpacing="0" style={{ 
                      backgroundColor: '#F9FAFB',
                      borderRadius: '8px',
                      padding: '20px',
                      marginBottom: '24px'
                    }}>
                      <tr>
                        <td>
                          <p style={{ 
                            margin: '0 0 12px 0',
                            color: '#6B7280',
                            fontSize: '13px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}>
                            Category
                          </p>
                          <p style={{ 
                            margin: '0 0 20px 0',
                            color: '#1F2937',
                            fontSize: '16px',
                            fontWeight: '600'
                          }}>
                            {category}
                          </p>

                          <p style={{ 
                            margin: '0 0 12px 0',
                            color: '#6B7280',
                            fontSize: '13px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}>
                            Student Email
                          </p>
                          <p style={{ 
                            margin: '0 0 20px 0',
                            color: '#1F2937',
                            fontSize: '15px'
                          }}>
                            <a href={`mailto:${email}`} style={{ color: '#4F46E5', textDecoration: 'none' }}>
                              {email}
                            </a>
                          </p>

                          <p style={{ 
                            margin: '0 0 12px 0',
                            color: '#6B7280',
                            fontSize: '13px',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}>
                            Message
                          </p>
                          <div style={{ 
                            margin: '0',
                            color: '#374151',
                            fontSize: '15px',
                            lineHeight: '24px',
                            whiteSpace: 'pre-wrap'
                          }}>
                            {message}
                          </div>
                        </td>
                      </tr>
                    </table>

                    {/* Call to Action */}
                    <table width="100%" cellPadding="0" cellSpacing="0">
                      <tr>
                        <td align="center" style={{ paddingTop: '8px' }}>
                          <a 
                            href={`mailto:${email}`}
                            style={{
                              display: 'inline-block',
                              backgroundColor: '#4F46E5',
                              color: '#ffffff',
                              padding: '12px 32px',
                              borderRadius: '8px',
                              textDecoration: 'none',
                              fontSize: '15px',
                              fontWeight: '600',
                              boxShadow: '0 2px 4px rgba(79, 70, 229, 0.2)'
                            }}
                          >
                            Reply to Student
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                {/* Footer */}
                <tr>
                  <td style={{ 
                    backgroundColor: '#F9FAFB',
                    padding: '32px 40px',
                    borderTop: '1px solid #E5E7EB'
                  }}>
                    <p style={{ 
                      margin: '0 0 8px 0',
                      color: '#6B7280',
                      fontSize: '13px',
                      lineHeight: '20px',
                      textAlign: 'center'
                    }}>
                      MUJ International - Student Support Services
                    </p>
                    <p style={{ 
                      margin: '0',
                      color: '#9CA3AF',
                      fontSize: '12px',
                      lineHeight: '18px',
                      textAlign: 'center'
                    }}>
                      Manipal University Jaipur, Dehmi Kalan, Jaipur, Rajasthan 303007
                    </p>
                    <p style={{ 
                      margin: '12px 0 0 0',
                      color: '#9CA3AF',
                      fontSize: '12px',
                      textAlign: 'center'
                    }}>
                      © {new Date().getFullYear()} Manipal University Jaipur. All rights reserved.
                    </p>
                  </td>
                </tr>
              </table>

              {/* Email Client Footer */}
              <table width="600" cellPadding="0" cellSpacing="0" style={{ marginTop: '20px' }}>
                <tr>
                  <td style={{ textAlign: 'center' }}>
                    <p style={{ 
                      margin: 0,
                      color: '#9CA3AF',
                      fontSize: '11px',
                      lineHeight: '16px'
                    }}>
                      This email was sent from the MUJ International Student Platform support form.
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  )
}

/**
 * Convert React email template to HTML string
 * Used for sending emails via SMTP
 */
export function renderSupportEmailTemplate(props: SupportEmailTemplateProps): string {
  const { category, email, message } = props
  
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); overflow: hidden;">
            <tr>
              <td style="background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%); padding: 32px 40px; text-align: center;">
                <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">MUJ International</h1>
                <p style="margin: 8px 0 0 0; color: #E0E7FF; font-size: 14px; font-weight: 500;">Student Support Services</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 40px;">
                <div style="display: inline-block; background-color: #EEF2FF; color: #4F46E5; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 24px;">New Support Request</div>
                <h2 style="margin: 0 0 16px 0; color: #1F2937; font-size: 20px; font-weight: 600;">Support Request Received</h2>
                <p style="margin: 0 0 24px 0; color: #6B7280; font-size: 15px; line-height: 24px;">A new support request has been submitted through the MUJ International Student Platform.</p>
                
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #F9FAFB; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                  <tr>
                    <td>
                      <p style="margin: 0 0 12px 0; color: #6B7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Category</p>
                      <p style="margin: 0 0 20px 0; color: #1F2937; font-size: 16px; font-weight: 600;">${category}</p>
                      
                      <p style="margin: 0 0 12px 0; color: #6B7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Student Email</p>
                      <p style="margin: 0 0 20px 0; color: #1F2937; font-size: 15px;"><a href="mailto:${email}" style="color: #4F46E5; text-decoration: none;">${email}</a></p>
                      
                      <p style="margin: 0 0 12px 0; color: #6B7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                      <div style="margin: 0; color: #374151; font-size: 15px; line-height: 24px; white-space: pre-wrap;">${message}</div>
                    </td>
                  </tr>
                </table>
                
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td align="center" style="padding-top: 8px;">
                      <a href="mailto:${email}" style="display: inline-block; background-color: #4F46E5; color: #ffffff; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-size: 15px; font-weight: 600; box-shadow: 0 2px 4px rgba(79, 70, 229, 0.2);">Reply to Student</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="background-color: #F9FAFB; padding: 32px 40px; border-top: 1px solid #E5E7EB;">
                <p style="margin: 0 0 8px 0; color: #6B7280; font-size: 13px; line-height: 20px; text-align: center;">MUJ International - Student Support Services</p>
                <p style="margin: 0; color: #9CA3AF; font-size: 12px; line-height: 18px; text-align: center;">Manipal University Jaipur, Dehmi Kalan, Jaipur, Rajasthan 303007</p>
                <p style="margin: 12px 0 0 0; color: #9CA3AF; font-size: 12px; text-align: center;">© ${new Date().getFullYear()} Manipal University Jaipur. All rights reserved.</p>
              </td>
            </tr>
          </table>
          <table width="600" cellpadding="0" cellspacing="0" style="margin-top: 20px;">
            <tr>
              <td style="text-align: center;">
                <p style="margin: 0; color: #9CA3AF; font-size: 11px; line-height: 16px;">This email was sent from the MUJ International Student Platform support form.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim()
}

