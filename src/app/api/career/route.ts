import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, link, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and Email are required' },
        { status: 400 }
      );
    }

    // Configure Nodemailer Transporter
    // NOTE: You must add SMTP_USER and SMTP_PASS to your .env file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465, // or 587
      secure: true, // true for 465, false for others
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER, // Sender address
      to: 'support@cinelingo-labs.com', // Recipient address
      subject: `[Career Application] from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #FD5A1E;">New Career Application</h2>
          <p>You have received a new career application from the website.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Link (LinkedIn/Resume):</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="${link}">${link || 'N/A'}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Introduction:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; white-space: pre-wrap;">${message || 'N/A'}</td>
            </tr>
          </table>
          
          <p style="margin-top: 30px; font-size: 12px; color: #888;">
            Sent automatically from Cinelingo Landing Page
          </p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please check server logs and SMTP configuration.' },
      { status: 500 }
    );
  }
}
