import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="demo" className="relative bg-paper py-24 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center sm:px-16 sm:py-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(55% 60% at 15% 20%, rgba(109,40,217,0.45), transparent 60%), radial-gradient(50% 55% at 85% 85%, rgba(34,211,238,0.3), transparent 60%)",
              }}
            />
            <div className="absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-4xl font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-5xl">
                Prêt à transformer votre organisation ?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-slate-dark">
                Rejoignez les entreprises, cliniques et établissements qui
                pilotent déjà leur activité avec Tacynt.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                {/* <Button href="#commencer" size="lg">
                  Essayer gratuitement
                </Button> */}
                <Button href="/contact" variant="outline" size="lg" icon={false} className="text-white">
                  Contacter notre équipe
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
