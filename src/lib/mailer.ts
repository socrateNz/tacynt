import nodemailer from "nodemailer";

export function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function contactNotificationEmail({
  name,
  email,
  company,
  message,
}: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeCompany = company ? escapeHtml(company) : null;
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const subjectName = name.replace(/[\r\n]+/g, " ").slice(0, 120);

  return {
    subject: `Nouveau message de contact — ${subjectName}`,
    text: [
      `Nom : ${name}`,
      `Email : ${email}`,
      company ? `Entreprise : ${company}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
    html: `
      <div style="font-family: sans-serif; font-size: 15px; color: #0b0f20; line-height: 1.6;">
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        ${safeCompany ? `<p><strong>Entreprise :</strong> ${safeCompany}</p>` : ""}
        <p style="margin-top: 16px;"><strong>Message :</strong></p>
        <p>${safeMessage}</p>
      </div>
    `,
  };
}
