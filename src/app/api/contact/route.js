import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: `onboarding@resend.dev`, // ganti dengan email verified kamu
      to: `valentiostanley23@gmail.com`, // tujuan email kamu
      subject: `New message from ${name} in your personal website`,
      html: `
        <h2>Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

      return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
      return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
