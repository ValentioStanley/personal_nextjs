import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, email, message } = body;

    const data = await resend.emails.send({
      from: `hello@notifications.tiotan.dev`, // ganti dengan email verified kamu
      to: `${email}`, // tujuan email kamu
      subject: `New message from ${name}`,
      html: `
        <h2>Contact Form Message</h2>
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

// export async function GET() {
//     const resend = new Resend(process.env.RESEND_API_KEY);
//     try {
//         const data = await resend.emails.send({
//         from: `next@zenorocha.com`, // ganti dengan email verified kamu
//         to: `zeno@resend.com`, // tujuan email kamu
//         subject: `New message from weee`,
//         html: `
//             <h2>Contact Form Message</h2>
//         `,
//         });

//         return NextResponse.json({ success: true, data }, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({ success: false, error }, { status: 500 });
//     }
// }


