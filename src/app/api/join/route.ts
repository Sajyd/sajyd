import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    const data = await resend.emails.send({
      from: 'Sajyd.com <support@klip.run>', // Update with your verified domain
      to: 'sajydmounib@gmail.com',
      subject: 'New Join Request',
      html: `<p>New join request from: ${email}</p>`
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
