"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-line-strong bg-white px-4 py-3 text-sm text-ink placeholder:text-slate/60 outline-none transition-colors focus:border-violet-2";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error ?? "Une erreur est survenue.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-line bg-white px-8 py-16 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-cyan/10 text-deep-2">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="text-xl font-semibold text-ink">Message envoyé.</h3>
        <p className="max-w-sm text-sm leading-relaxed text-slate">
          Merci de nous avoir contactés. Notre équipe vous répondra dans les
          plus brefs délais.
        </p>
        <Button variant="secondary" size="md" icon={false} onClick={() => setStatus("idle")}>
          Envoyer un autre message
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-3xl border border-line bg-white p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Nom complet
          </label>
          <input id="name" name="name" type="text" required maxLength={200} className={inputClasses} placeholder="Votre nom" />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email professionnel
          </label>
          <input id="email" name="email" type="email" required maxLength={200} className={inputClasses} placeholder="vous@entreprise.com" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="text-sm font-medium text-ink">
          Organisation <span className="text-slate">(optionnel)</span>
        </label>
        <input id="company" name="company" type="text" maxLength={200} className={inputClasses} placeholder="Nom de votre entreprise" />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          className={inputClasses}
          placeholder="Décrivez votre besoin ou votre demande de démonstration..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button type="submit" size="lg" icon={false} disabled={status === "submitting"} className="mt-1 w-full">
        {status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  );
}
