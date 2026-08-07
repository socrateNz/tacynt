"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroNetwork } from "@/components/illustrations/HeroNetwork";
import { EASE_PREMIUM } from "@/lib/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink pt-36 pb-24 sm:pt-44 sm:pb-32"
    >
      <div className="absolute inset-0 bg-grain" />
      <div className="absolute inset-0 bg-dot-grid opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,black,transparent)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 section-x lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE_PREMIUM }}
            className="mt-7 text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4rem]"
          >
            L&apos;infrastructure logicielle{" "}
            <span className="text-gradient-brand">de vos ambitions.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE_PREMIUM }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-slate-dark"
          >
            Tacynt conçoit des plateformes SaaS et des solutions
            d&apos;intelligence artificielle qui simplifient la gestion des
            entreprises, des établissements de santé et d&apos;enseignement,
            grâce au cloud.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE_PREMIUM }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="#produits" size="lg">
              Découvrir nos solutions
            </Button>
            <Button href="/contact" variant="ghost" size="lg" icon={false} className="text-white">
              Demander une démonstration
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE_PREMIUM }}
            className="mt-10 text-sm text-slate-dark/80"
          >
            Déployée dans la santé, l&apos;éducation, la restauration et les
            services — une seule plateforme, connectée par l&apos;IA.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: EASE_PREMIUM }}
        >
          <HeroNetwork />
        </motion.div>
      </div>
    </section>
  );
}
