import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { RESEND_API_KEY, CONTACT_EMAIL_TO, CONTACT_EMAIL_FROM } from '$env/static/private';
import type { Actions } from './$types';

const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const subject = data.get('subject') as string;
    const message = data.get('message') as string;

    // Basic validation
    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }

    if (!email || !isValidEmail(email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!subject || subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters long';
    }

    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, {
        errors,
        name,
        email,
        subject,
        message
      });
    }

    try {
      // Send email via Resend
      const emailResult = await resend.emails.send({
        from: CONTACT_EMAIL_FROM,
        to: CONTACT_EMAIL_TO,
        subject: `Portfolio Contact: ${subject.trim()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>

            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>From:</strong> ${name.trim()}</p>
              <p><strong>Email:</strong> ${email.trim()}</p>
              <p><strong>Subject:</strong> ${subject.trim()}</p>
            </div>

            <div style="margin: 20px 0;">
              <h3 style="color: #374151;">Message:</h3>
              <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
                ${message.trim().replace(/\n/g, '<br>')}
              </div>
            </div>

            <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">

            <div style="font-size: 12px; color: #6b7280;">
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>User Agent:</strong> ${request.headers.get('user-agent') || 'Unknown'}</p>
              <p><strong>IP:</strong> ${getClientIP(request)}</p>
            </div>
          </div>
        `,
        text: `
          New Contact Form Submission

          From: ${name.trim()}
          Email: ${email.trim()}
          Subject: ${subject.trim()}

          Message:
          ${message.trim()}

          ---
          Submitted: ${new Date().toLocaleString()}
          User Agent: ${request.headers.get('user-agent') || 'Unknown'}
          IP: ${getClientIP(request)}
        `
      });

      if (emailResult.error) {
        console.error('Resend error:', emailResult.error);
        throw new Error('Failed to send email');
      }

      console.log('Email sent successfully:', emailResult.data?.id);

      return {
        success: true,
        message: 'Thank you for your message! I\'ll get back to you soon.'
      };
    } catch (error) {
      console.error('Contact form error:', error);

      // Log the submission even if email fails (for backup)
      console.log('Contact form submission (email failed):', {
        name: name.trim(),
        email: email.trim(),
        subject: subject.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error'
      });

      return fail(500, {
        errors: { general: 'Sorry, there was an error sending your message. Please try again later.' },
        name,
        email,
        subject,
        message
      });
    }
  }
};

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') || 'unknown';
}