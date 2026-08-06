import Link from "next/link";
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon } from "@/components/icons/Social";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { products } from "@/lib/data";

const columns = [
  {
    title: "Produits",
    links: products.map((product) => ({ label: product.name, href: "#produits" })),
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "#a-propos" },
      { label: "Carrières", href: "#carrieres" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Documentation", href: "#documentation" },
      { label: "FAQ", href: "#faq" },
      { label: "Tarifs", href: "#demo" },
      { label: "Centre d'aide", href: "#aide" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Confidentialité", href: "#confidentialite" },
      { label: "Conditions", href: "#conditions" },
    ],
  },
];

const socials = [
  { icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "X" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative bg-ink pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-[1.2fr_2fr]">
          <div id="a-propos">
            <Logo tone="dark" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-dark">
              Holding technologique africaine, Tacynt conçoit des plateformes
              SaaS et des solutions d&apos;intelligence artificielle pour les
              entreprises et les organisations.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-9 items-center justify-center rounded-full border border-line-dark text-slate-dark transition-colors hover:border-line-dark-strong hover:text-white"
                >
                  <social.icon className="size-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-semibold text-white">{column.title}</h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-dark transition-colors hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line-dark pt-8 sm:flex-row">
          <p className="text-xs text-slate-dark">
            ©2026 Tacynt. Tous droits réservés.
          </p>
          <p className="text-xs text-slate-dark">Conçu et développé par<Link className="text-purple-400" href="https://portfolio-socrate.vercel.app/"> @etarcos_dev</Link></p>
        </div>
      </Container>
    </footer>
  );
}
