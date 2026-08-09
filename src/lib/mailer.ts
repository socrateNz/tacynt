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

export function contactAutoReplyEmail({
  name,
  message,
}: {
  name: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const firstName = name.trim().split(/\s+/)[0] || name;
  const safeFirstName = escapeHtml(firstName);

  return {
    subject: "Nous avons bien reçu votre message — Tacynt",
    text: [
      `Bonjour ${firstName},`,
      "",
      "Nous vous confirmons la bonne réception de votre message. Notre équipe vous répondra dans un délai de 24 à 48 heures ouvrées.",
      "",
      "Pour rappel, voici le message que vous nous avez envoyé :",
      `« ${message} »`,
      "",
      "À très vite,",
      "L'équipe Tacynt",
    ].join("\n"),
    html: `
      <div style="font-family: sans-serif; background-color: #f5f6fb; padding: 32px 16px;">
        <div style="max-width: 480px; margin: 0 auto; background: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #ececf3;">
          <div style="background: linear-gradient(135deg,#2a3494,#6d28d9); padding: 28px 32px;">
            <span style="color: #ffffff; font-size: 18px; font-weight: 600;">Tacynt</span>
          </div>
          <div style="padding: 32px; color: #0b0f20; font-size: 15px; line-height: 1.65;">
            <p>Bonjour ${safeFirstName},</p>
            <p>
              Nous vous confirmons la bonne réception de votre message.
              Notre équipe vous répondra dans un délai de
              <strong>24 à 48 heures ouvrées</strong>.
            </p>
            <div style="margin: 20px 0; padding: 16px 18px; background: #f5f6fb; border-radius: 12px; border-left: 3px solid #6d28d9; color: #565f78; font-style: italic;">
              ${safeMessage}
            </div>
            <p>À très vite,<br />L'équipe Tacynt</p>
          </div>
          <div style="padding: 18px 32px; background: #f5f6fb; color: #a6acc4; font-size: 12px;">
            Tacynt — plateformes SaaS et intelligence artificielle pour les organisations africaines.
          </div>
        </div>
      </div>
    `,
  };
}
