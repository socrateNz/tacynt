import { NextRequest, NextResponse } from "next/server";
import { getTransporter, contactNotificationEmail, contactAutoReplyEmail } from "@/lib/mailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const { name, email, company, message } = (body ?? {}) as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Nom, email et message sont requis." }, { status: 400 });
  }

  if (!EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
  }

  if (name.length > 200 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "Un des champs dépasse la longueur autorisée." }, { status: 400 });
  }

  const safeCompany = typeof company === "string" ? company.trim().slice(0, 200) : undefined;

  try {
    const transporter = getTransporter();
    const { subject, text, html } = contactNotificationEmail({
      name: name.trim(),
      email: email.trim(),
      company: safeCompany,
      message: message.trim(),
    });

    await transporter.sendMail({
      from: `"Tacynt — Formulaire de contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      bcc: process.env.CONTACT_BCC_EMAIL || undefined,
      replyTo: email.trim(),
      subject,
      text,
      html,
    });

    try {
      const autoReply = contactAutoReplyEmail({ name: name.trim(), message: message.trim() });
      await transporter.sendMail({
        from: `"Tacynt" <${process.env.SMTP_USER}>`,
        to: email.trim(),
        ...autoReply,
      });
    } catch (autoReplyError) {
      console.error("Contact auto-reply email failed:", autoReplyError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);
    return NextResponse.json(
      { error: "L'envoi du message a échoué. Merci de réessayer plus tard." },
      { status: 502 }
    );
  }
}
