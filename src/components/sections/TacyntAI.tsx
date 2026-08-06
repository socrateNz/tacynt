import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AICore } from "@/components/illustrations/AICore";
import { aiCapabilities } from "@/lib/data";

export function TacyntAI() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-ink-soft py-24 sm:py-32">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "radial-gradient(50% 40% at 20% 30%, rgba(109,40,217,0.22), transparent 65%), radial-gradient(45% 40% at 85% 70%, rgba(34,211,238,0.16), transparent 65%)",
        }}
      />

      <Container className="relative z-10 grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <Reveal>
          <AICore />
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow tone="dark">Tacynt AI</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-5xl">
              Une intelligence unique, présente dans chaque produit.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-dark">
              Tacynt AI est le moteur transversal qui alimente l&apos;ensemble
              de nos plateformes. Elle observe, apprend et agit au service de
              vos équipes, en continu.
            </p>
          </Reveal>

          <RevealGroup
            stagger={0.07}
            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2"
          >
            {aiCapabilities.map((capability) => (
              <RevealItem key={capability.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/6 text-cyan">
                  <capability.icon className="size-4.5" />
                </span>
                <span>
                  <span className="block text-[15px] font-semibold text-white">
                    {capability.title}
                  </span>
                  <span className="block text-sm leading-relaxed text-slate-dark">
                    {capability.description}
                  </span>
                </span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
