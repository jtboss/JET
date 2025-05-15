import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend - only create instance when API key is available
const resendApiKey = process.env.RESEND_API_KEY || "";
const adminEmail = process.env.ADMIN_EMAIL || "hey.jjedwards@gmail.com";

/**
 * Email validation helper
 */
const isValidEmail = (email: string) => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
};

/**
 * API route handler for sending emails
 */
export async function POST(request: Request) {
  try {
    // Parse request body
    const { name, email, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if API key is available
    if (!resendApiKey) {
      console.error("Resend API key is not configured");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    // Create Resend instance only when sending email
    const resend = new Resend(resendApiKey);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `Jet Automation <onboarding@resend.dev>`,
      to: [adminEmail],
      subject: `New contact form submission: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      reply_to: email,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Return success response with message ID
    return NextResponse.json({ 
      success: true, 
      message: "Email sent successfully",
      id: data?.id 
    });
  } catch (error) {
    // Log and return error
    console.error("Error in contact form API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
} 