import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    // Configurer le transporteur SMTP (ici Gmail exemple)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "tokyfreel@gmail.com",
      subject: `Nouveau message de ${name}`,
      text: message,
      html: `<p>${message}</p><p>Envoyé par: ${name} (${email})</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error
        ? error.message
        : typeof error === "string"
        ? error
        : "An unknown error occurred";
    return NextResponse.json({ success: false, error: errorMessage });
  }
}
