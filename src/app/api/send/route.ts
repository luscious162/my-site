import { EmailTemplate } from "@/components/email-template";
import { config } from "@/data/config"; // Assuming this contains your target email address
import { Resend } from "resend";
import { z } from "zod";
import { NextResponse } from 'next/server'; // Import NextResponse for responses

// Define the schema for validating the request body
const EmailSchema = z.object({
  fullName: z.string().min(2, "Full name is invalid!"),
  email: z.string().email({ message: "Email is invalid!" }),
  message: z.string().min(10, "Message is too short!"),
});

export async function POST(req: Request) {
  // Check if the Resend API key is available
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    console.warn("Resend API key is not configured. Using Getform.io instead.");
    return NextResponse.json(
      { message: "Contact form submissions are handled by Getform.io" },
      { status: 200 }
    );
  }

  // Initialize Resend only if API key is available
  const resend = new Resend(apiKey);

  try {
    const body = await req.json();
    console.log("Received body:", body); // Log received data for debugging

    // Validate the request body using Zod
    const validationResult = EmailSchema.safeParse(body);

    if (!validationResult.success) {
      // If validation fails, return a 400 error with details
      console.error("Zod Validation Error:", validationResult.error.flatten());
      // Use flatten() for better error messages
      return NextResponse.json({ error: validationResult.error.flatten().fieldErrors }, { status: 400 });
    }

    // Destructure validated data
    const { fullName, email, message } = validationResult.data;

    // Send the email using Resend
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Replace with your desired "from" address registered with Resend
      to: [config.email], // Your email address from config
      subject: "Contact me from portfolio",
      react: EmailTemplate({ // Your email template component
        fullName: fullName,
        email: email,
        message: message,
      }),
    });

    // Handle potential errors from Resend
    if (resendError) {
      console.error("Resend Error:", resendError);
      // Return a 500 error with the Resend error details
      return NextResponse.json({ error: resendError.message }, { status: 500 });
    }

    // If successful, return the Resend response data
    console.log("Email sent successfully:", resendData);
    return NextResponse.json(resendData);

  } catch (error) {
    // Catch any other unexpected errors during processing
    console.error("API Route Error:", error);
    // Return a generic 500 error
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
