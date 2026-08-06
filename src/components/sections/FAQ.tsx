"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/lib/data";
import { EASE_PREMIUM } from "@/lib/motion";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-paper py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink sm:text-5xl">
              Vos questions, nos réponses.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-slate">
              Vous ne trouvez pas la réponse que vous cherchez ? Notre équipe
              est disponible pour répondre à toutes vos questions.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <Button href="#demo" variant="secondary" size="md" className="mt-8">
              Contacter notre équipe
            </Button>
          </Reveal>
        </div>

        <RevealGroup stagger={0.05} className="flex flex-col divide-y divide-line">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <RevealItem key={faq.question} className="py-2">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={clsx(
                      "text-[15px] font-medium transition-colors sm:text-base",
                      isOpen ? "text-ink" : "text-ink/85"
                    )}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={clsx(
                      "flex size-8 shrink-0 items-center justify-center rounded-full border border-line-strong transition-transform duration-400",
                      isOpen && "rotate-45 border-violet/40 text-violet"
                    )}
                  >
                    <Plus className="size-3.5" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE_PREMIUM }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-10 text-sm leading-relaxed text-slate">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
