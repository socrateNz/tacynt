import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { products } from "@/lib/data";
import Link from "next/link";

export function Products() {
  return (
    <section id="produits" className="relative bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Nos produits"
          title="Cinq plateformes. Une seule intelligence."
          description="Chaque produit Tacynt répond à un secteur précis, tout en partageant la même infrastructure cloud et la même couche d'intelligence artificielle."
        />

        <RevealGroup
          stagger={0.1}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <RevealItem key={product.slug}>
              <TiltCard className="h-full">
                <div className="relative flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-500 group-hover:border-line-strong group-hover:shadow-[0_30px_70px_-30px_rgba(20,28,84,0.28)] group-hover:-translate-y-1">
                  <div
                    className={`flex size-12 items-center justify-center rounded-2xl bg-linear-to-br ${product.gradient}`}
                  >
                    <product.icon className="size-5.5 text-white" />
                  </div>

                  <span className="mt-6 text-xs font-medium uppercase tracking-wide text-slate">
                    {product.tagline}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold tracking-[-0.01em] text-ink">
                    {product.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate">
                    {product.description}
                  </p>

                  <Link target="_blank" href={product.link} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-deep-2 transition-colors group-hover:text-violet">
                    En savoir plus
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </TiltCard>
            </RevealItem>
          ))}

          <RevealItem>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-line-strong bg-mist p-7">
              <div>
                <span className="text-xs font-medium uppercase tracking-wide text-slate">
                  Sur-mesure
                </span>
                <h3 className="mt-2 text-xl font-semibold tracking-[-0.01em] text-ink">
                  Un besoin spécifique ?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  Notre équipe conçoit des modules additionnels adaptés à
                  votre secteur, connectés à votre écosystème Tacynt.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-deep-2 transition-colors hover:text-violet"
              >
                Parler à un expert
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </RevealItem>
        </RevealGroup>
      </Container>
    </section>
  );
}
