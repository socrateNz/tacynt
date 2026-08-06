import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="relative bg-mist py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Témoignages"
          title="Des organisations qui avancent plus vite."
          description="Entreprises, cliniques et établissements scolaires nous font confiance pour digitaliser leur activité au quotidien."
        />

        <RevealGroup
          stagger={0.1}
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2"
        >
          {testimonials.map((testimonial) => (
            <RevealItem key={testimonial.name}>
              <TiltCard glowColor="rgba(34,211,238,0.14)" className="h-full">
                <div className="flex h-full flex-col rounded-3xl border border-line bg-white p-7 transition-all duration-500 group-hover:border-line-strong group-hover:shadow-[0_30px_70px_-30px_rgba(20,28,84,0.22)] group-hover:-translate-y-1">
                  <div className="flex gap-1 text-cyan">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-5 flex-1 text-[15px] leading-relaxed text-ink">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <span
                      className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    >
                      {testimonial.initials}
                    </span>
                    <span>
                      <span className="block text-sm font-medium text-ink">
                        {testimonial.name}
                      </span>
                      <span className="block text-xs text-slate">
                        {testimonial.role} · {testimonial.company}
                      </span>
                    </span>
                  </div>
                </div>
              </TiltCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
