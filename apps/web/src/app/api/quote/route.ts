import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, company, phone, service, budget, timeline, subject, message, website } = body;

    // Basic honeypot check
    if (website) {
      return NextResponse.json({ message: 'Spam detected' }, { status: 400 });
    }

    if (!name || !email || !service || !subject || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const toEmail = process.env.CONTACT_EMAIL_TO || 'hello@ashvill.com';

    // Construct the email content
    const htmlContent = `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
      <hr/>
      <h3>Project Details</h3>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Budget:</strong> ${budget || 'Not specified'}</p>
      <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <br/>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br/>')}</p>
    `;

    // Only attempt to send if a real API key is configured
    if (process.env.RESEND_API_KEY) {
      const data = await resend.emails.send({
        from: 'Ashvill IT Quote Request <onboarding@resend.dev>', // Resend test domain sender
        to: [toEmail],
        subject: `New Quote Request: ${subject}`,
        html: htmlContent,
      });

      if (data.error) {
        throw new Error(data.error.message);
      }
    } else {
      console.log('No RESEND_API_KEY found. Mocking successful quote request send.', { subject, email });
    }

    return NextResponse.json(
      { message: 'Quote request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Quote API Error:', error);
    return NextResponse.json(
      { message: 'Failed to send quote request. Please try again later.' },
      { status: 500 }
    );
  }
}
