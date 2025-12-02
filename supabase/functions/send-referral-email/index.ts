import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  console.log('Referral email function called with method:', req.method)
  
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    console.log('Parsing request body...')
    const requestBody = await req.json()
    console.log('Request body parsed:', requestBody)
    
    const { 
      referrerFirstName, 
      referrerLastName, 
      referrerEmail, 
      referrerPhone, 
      referrerAddress,
      referredName,
      referredPhone,
      referredEmail,
      referredAddress,
      relationship,
      notes
    } = requestBody

    // Validate required fields
    if (!referrerFirstName || !referrerLastName || !referrerEmail || !referrerPhone || !referredName || !referredPhone) {
      console.log('Validation failed - missing required fields')
      return new Response(
        JSON.stringify({ error: 'Required fields are missing' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Checking Resend API key...')
    const apiKey = Deno.env.get('RESEND_API_KEY')
    console.log('API key exists:', !!apiKey)
    
    if (!apiKey) {
      console.log('No API key found')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    const referrerName = `${referrerFirstName} ${referrerLastName}`
    const relationshipText = relationship ? relationship.charAt(0).toUpperCase() + relationship.slice(1) : 'Not specified'

    const emailBody = `
🎁 NEW REFERRAL SUBMISSION from MyFence.com

═══════════════════════════════════════════
REFERRER INFORMATION (Person Submitting)
═══════════════════════════════════════════
Name: ${referrerName}
Email: ${referrerEmail}
Phone: ${referrerPhone}
Address: ${referrerAddress || 'Not provided'}

═══════════════════════════════════════════
REFERRED PERSON (Potential Customer)
═══════════════════════════════════════════
Name: ${referredName}
Phone: ${referredPhone}
Email: ${referredEmail || 'Not provided'}
Address/City: ${referredAddress || 'Not provided'}
Relationship to Referrer: ${relationshipText}

═══════════════════════════════════════════
ADDITIONAL NOTES
═══════════════════════════════════════════
${notes || 'None provided'}

═══════════════════════════════════════════
ACTION REQUIRED
═══════════════════════════════════════════
1. Reach out to ${referredName} at ${referredPhone}
2. Mention they were referred by ${referrerName}
3. After project completion, send $150 Amazon Gift Card to BOTH parties

Submission Date: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })}
    `.trim()

    console.log('Creating email data...')
    const emailData = {
      from: 'MyFence.com <onboarding@resend.dev>',
      to: ['info@myfence.com'],
      reply_to: referrerEmail,
      subject: `🎁 NEW REFERRAL: ${referredName} (referred by ${referrerName})`,
      text: emailBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">🎁 New Referral Submission</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">from MyFence.com Referral Program</p>
          </div>
          
          <div style="padding: 30px; background: #f9fafb; border: 1px solid #e5e7eb;">
            <h2 style="color: #374151; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Referrer Information</h2>
            <table style="width: 100%; margin-bottom: 20px;">
              <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Name:</strong></td><td style="padding: 8px 0;">${referrerName}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${referrerEmail}">${referrerEmail}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td><td style="padding: 8px 0;"><a href="tel:${referrerPhone}">${referrerPhone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Address:</strong></td><td style="padding: 8px 0;">${referrerAddress || 'Not provided'}</td></tr>
            </table>
            
            <h2 style="color: #374151; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Referred Person (Potential Customer)</h2>
            <table style="width: 100%; margin-bottom: 20px;">
              <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Name:</strong></td><td style="padding: 8px 0; font-weight: bold; color: #f97316;">${referredName}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Phone:</strong></td><td style="padding: 8px 0;"><a href="tel:${referredPhone}" style="font-weight: bold;">${referredPhone}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Email:</strong></td><td style="padding: 8px 0;">${referredEmail ? `<a href="mailto:${referredEmail}">${referredEmail}</a>` : 'Not provided'}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Address/City:</strong></td><td style="padding: 8px 0;">${referredAddress || 'Not provided'}</td></tr>
              <tr><td style="padding: 8px 0; color: #6b7280;"><strong>Relationship:</strong></td><td style="padding: 8px 0;">${relationshipText}</td></tr>
            </table>
            
            ${notes ? `
            <h2 style="color: #374151; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Additional Notes</h2>
            <p style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #f97316;">${notes.replace(/\n/g, '<br>')}</p>
            ` : ''}
            
            <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin-top: 20px;">
              <h3 style="color: #92400e; margin-top: 0;">⚡ Action Required</h3>
              <ol style="color: #78350f; margin-bottom: 0;">
                <li>Reach out to <strong>${referredName}</strong> at <a href="tel:${referredPhone}">${referredPhone}</a></li>
                <li>Mention they were referred by <strong>${referrerName}</strong></li>
                <li>After project completion, send $150 Amazon Gift Card to <strong>BOTH</strong> parties</li>
              </ol>
            </div>
          </div>
          
          <div style="background: #374151; color: #9ca3af; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px;">
            Submitted: ${new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' })} PT<br>
            MyFence.com Referral Program
          </div>
        </div>
      `
    }

    console.log('Sending referral email...')
    const resendInstance = new Resend(apiKey)
    const { data: result, error: resendError } = await resendInstance.emails.send(emailData)

    if (resendError) {
      console.error('Resend API error:', resendError)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    console.log('Referral email sent successfully:', result)

    return new Response(
      JSON.stringify({ success: true, id: result?.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Function error:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
