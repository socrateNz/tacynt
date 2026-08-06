"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { steps } from "@/lib/data";

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative bg-paper py-24 sm:py-32">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Comment ça fonctionne"
          title="Opérationnel en cinq étapes."
          description="De la création du compte à la mise au travail de vos équipes, l'onboarding Tacynt est pensé pour être rapide et sans friction."
          className="mx-auto max-w-2xl"
        />

        <div ref={containerRef} className="relative mx-auto mt-16 max-w-xl">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-line-strong" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute left-6 top-2 bottom-2 w-px bg-linear-to-b from-violet via-violet-2 to-cyan"
          />

          <ol className="relative flex flex-col gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05}>
                <li className="relative flex gap-6 pl-0">
                  <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-line-strong bg-white shadow-sm">
                    <step.icon className="size-5 text-deep-2" />
                    <span
                      className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full text-[10px] font-semibold text-white"
                      style={{ backgroundImage: "var(--gradient-brand)" }}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 max-w-md text-sm leading-relaxed text-slate">
                      {step.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
