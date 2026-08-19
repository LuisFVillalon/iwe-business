import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, message } = body;

    // Basic validation
    if (!fullName || !email || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.error('Missing GMAIL_USER/GMAIL_PASS environment variables');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    // Verify connection
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      return NextResponse.json(
        { message: 'Email server configuration error' },
        { status: 500 }
      );
    }

    // Email to yourself
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER, // Send to yourself
      subject: `New Contact Form Message IWE Business from ${fullName}`,
      html: `
        <h2>New Contact Form Submission IWE Business</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>This message was sent from IWE Business contact form.</small></p>
      `,
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error in send-email API route:', error);

    return NextResponse.json(
      {
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
