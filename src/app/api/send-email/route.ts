// app/api/send-email/route.ts - Full Implementation
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    console.log('=== API ROUTE CALLED ===');
    
    const body = await request.json();
    console.log('Request body:', body);
    
    const { fullName, email, message } = body;
    
    // Basic validation
    if (!fullName || !email || !message) {
      console.log('Validation failed');
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }
    
    // Check environment variables
    console.log('GMAIL_USER:', process.env.GMAIL_USER ? 'EXISTS' : 'MISSING');
    console.log('GMAIL_PASS:', process.env.GMAIL_PASS ? 'EXISTS' : 'MISSING');
    
    if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
      console.log('Missing environment variables');
      return NextResponse.json(
        { message: 'Server configuration error' },
        { status: 500 }
      );
    }

    console.log('Creating transporter...');
    
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});


    console.log('Verifying transporter...');
    
    // Verify connection
    try {
      await transporter.verify();
      console.log('✅ Transporter verified successfully');
    } catch (verifyError) {
      console.error('❌ Transporter verification failed:', verifyError);
      return NextResponse.json(
        { message: 'Email server configuration error' },
        { status: 500 }
      );
    }

    console.log('Preparing email...');
    
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

    console.log('Sending email...');
    
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully! Message ID:', result.messageId);
    
    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('=== ERROR IN API ROUTE ===');
    console.error('Error type:', typeof error);
    console.error('Error:', error);
    
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        message: 'Failed to send email',
        error: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}