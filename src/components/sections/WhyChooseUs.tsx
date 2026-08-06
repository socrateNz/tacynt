import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { features } from "@/lib/data";

export function WhyChooseUs() {
  return (
    <section id="pourquoi" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div className="absolute inset-0 bg-grain opacity-70" />

      <Container className="relative z-10">
        <SectionHeading
          tone="dark"
          eyebrow="Pourquoi Tacynt"
          title="Une fondation technique pensée pour durer."
          description="Derrière chaque produit Tacynt, une même infrastructure robuste, sécurisée et pensée pour accompagner la croissance de votre organisation."
        />

        <RevealGroup
          stagger={0.06}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {features.map((feature) => (
            <RevealItem key={feature.title}>
              <div className="group h-full rounded-2xl border border-line-dark bg-white/3 p-5 transition-all duration-400 hover:border-line-dark-strong hover:bg-white/6">
                <div className="flex size-10 items-center justify-center rounded-xl bg-white/5 text-cyan transition-colors duration-400 group-hover:text-violet-2">
                  <feature.icon className="size-4.5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-white">{feature.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-dark">
                  {feature.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
