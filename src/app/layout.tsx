import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tacynt — L'intelligence qui fait avancer vos organisations",
  description:
    "Tacynt est une holding technologique africaine qui conçoit des plateformes SaaS et des solutions d'intelligence artificielle pour les entreprises, la santé, l'éducation et les organisations.",
  metadataBase: new URL("https://tacynt.com"),
  openGraph: {
    title: "Tacynt — L'intelligence qui fait avancer vos organisations",
    description:
      "Des plateformes SaaS et des solutions IA pour les entreprises, la santé, l'éducation et les organisations africaines.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}
