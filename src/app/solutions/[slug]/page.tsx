import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { products, type Product } from "@/lib/data";

const siteUrl = "https://www.tacynt.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<"/solutions/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: { canonical: `/solutions/${product.slug}` },
    openGraph: {
      title: product.seoTitle,
      description: product.seoDescription,
      url: `/solutions/${product.slug}`,
      type: "website",
      locale: "fr_FR",
      ...(product.image && { images: [{ url: product.image.src, alt: product.image.alt }] }),
    },
  };
}

function jsonLd(product: Product) {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: product.name,
      description: product.seoDescription,
      url: product.link,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      ...(product.image && { image: `${siteUrl}${product.image.src}` }),
      publisher: { "@type": "Organization", name: "Tacynt", url: siteUrl },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Solutions", item: `${siteUrl}/#produits` },
        { "@type": "ListItem", position: 3, name: product.name, item: `${siteUrl}/solutions/${product.slug}` },
      ],
    },
  ];
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function ProductVisual({ product }: { product: Product }) {
  if (product.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line-dark bg-white/5">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br ${product.gradient}`}
    >
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      <product.icon className="relative size-20 text-white/90" strokeWidth={1.25} />
    </div>
  );
}

export default async function SolutionPage({
  params,
}: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((other) => other.slug !== product.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(product) }}
      />
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-ink pt-36 pb-20 sm:pt-44 sm:pb-24">
          <div className="absolute inset-0 bg-grain" />
          <div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />
          <Container className="relative z-10 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Reveal>
                <Eyebrow tone="dark">{product.tagline}</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
                  {product.name}
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-dark">
                  {product.description}
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    href={product.link}
                    target="_blank"
                    className="btn-sheen group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-medium text-white transition-all duration-300 hover:-translate-y-0.5"
                    style={{ backgroundImage: "var(--gradient-brand)" }}
                  >
                    Accéder à {product.name}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Button href="/contact" variant="ghost" size="lg" icon={false} className="text-white">
                    Demander une démo
                  </Button>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <ProductVisual product={product} />
            </Reveal>
          </Container>
        </section>

        <section className="relative bg-paper py-24 sm:py-28">
          <Container>
            <SectionHeading
              eyebrow="Fonctionnalités"
              title={`Tout ce dont vous avez besoin, dans ${product.name}.`}
            />
            <RevealGroup
              stagger={0.08}
              className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
            >
              {product.features.map((feature) => (
                <RevealItem key={feature.title}>
                  <div className="flex h-full gap-4 rounded-3xl border border-line bg-white p-7">
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${product.gradient}`}
                    >
                      <Check className="size-4.5 text-white" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>

        {product.screenshots && product.screenshots.length > 0 && (
          <section className="relative bg-mist py-24 sm:py-28">
            <Container>
              <SectionHeading eyebrow="Aperçu" title={`${product.name} en images.`} />
              <RevealGroup
                stagger={0.08}
                className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2"
              >
                {product.screenshots.map((shot) => (
                  <RevealItem key={shot.src}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-line bg-white">
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </section>
        )}

        <section className="relative bg-paper pb-8 sm:pb-12">
          <Container>
            <Reveal>
              <div className="rounded-3xl border border-line-strong bg-mist p-8 sm:p-10">
                <h2 className="text-2xl font-semibold tracking-[-0.01em] text-ink">
                  Pour qui ?
                </h2>
                <ul className="mt-6 flex flex-wrap gap-3">
                  {product.audience.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line-strong bg-white px-4 py-2 text-sm font-medium text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </Container>
        </section>

        <section className="relative bg-paper pt-16 sm:pt-20">
          <Container>
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-[-0.01em] text-ink">
                Découvrez aussi
              </h2>
            </Reveal>
            <RevealGroup
              stagger={0.06}
              className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {others.map((other) => (
                <RevealItem key={other.slug}>
                  <Link
                    href={`/solutions/${other.slug}`}
                    className="group flex h-full items-center gap-4 rounded-2xl border border-line bg-white p-5 transition-colors hover:border-line-strong"
                  >
                    <span
                      className={`flex size-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${other.gradient}`}
                    >
                      <other.icon className="size-4.5 text-white" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-ink group-hover:text-violet">
                        {other.name}
                      </span>
                      <span className="block text-xs text-slate">{other.tagline}</span>
                    </span>
                  </Link>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
