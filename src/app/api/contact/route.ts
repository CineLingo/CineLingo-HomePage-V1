import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { youtubeUrl, companyName, countryCode, contactNumber, email } = body;

        // Validate required fields
        if (!youtubeUrl || !email) {
            return NextResponse.json(
                { error: 'YouTube URL and Email are required' },
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
            to: 'jaeseokchung@cinelingo-labs.com', // Recipient address
            subject: `[New Demo Request] from ${companyName || 'Potential Client'}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #FD5A1E;">New Demo Request</h2>
          <p>You have received a new Get Free Demo request from the landing page.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold; width: 150px;">YouTube URL:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="${youtubeUrl}">${youtubeUrl}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Company Name:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">${companyName || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Contact Number:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;">(${countryCode}) ${contactNumber || 'N/A'}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border-bottom: 1px solid #ddd; font-weight: bold;">Email:</td>
              <td style="padding: 10px; border-bottom: 1px solid #ddd;"><a href="mailto:${email}">${email}</a></td>
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
