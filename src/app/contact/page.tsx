import type { Metadata } from "next";
import { Mail, Clock, Phone } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact — Tacynt",
  description:
    "Contactez l'équipe Tacynt pour une démonstration ou toute question sur nos plateformes SaaS et solutions d'intelligence artificielle.",
};

const contactPoints = [
  { icon: Mail, label: "Email", value: "contact@tacynt.com" },
  { icon: Phone, label: "Téléphone", value: "+237 694 85 44 74" },
  { icon: Clock, label: "Délai de réponse", value: "Sous 24 à 48 heures ouvrées" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-ink pt-36 pb-20 sm:pt-44 sm:pb-24">
          <div className="absolute inset-0 bg-grain" />
          <div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />
          <Container className="relative z-10">
            <Reveal>
              <Eyebrow tone="dark">Contact</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
                Parlons de votre organisation.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-dark">
                Une question sur nos produits, un projet de digitalisation ou
                une démonstration à planifier ? Notre équipe vous répond
                rapidement.
              </p>
            </Reveal>
          </Container>
        </section>

        <section className="relative bg-mist py-20 sm:py-24">
          <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="flex flex-col gap-4">
              {contactPoints.map((point) => (
                <Reveal key={point.label}>
                  <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-mist-2 text-deep-2">
                      <point.icon className="size-4.5" />
                    </span>
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-wide text-slate">
                        {point.label}
                      </span>
                      <Link href={point.value.includes('@') ? `mailto:${point.value}` : point.value.includes('237') ? `tel:${point.value}` : "#"} className="block text-sm font-medium text-ink">{point.value}</Link>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
