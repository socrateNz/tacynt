import { Container } from "@/components/ui/Container";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { stats } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative bg-mist pb-24 sm:pb-28">
      <Container className="relative z-10 -mt-16 sm:-mt-20">
        <RevealGroup
          stagger={0.08}
          className="grid grid-cols-2 gap-3 rounded-3xl border border-line bg-white p-3 shadow-[0_30px_80px_-30px_rgba(20,28,84,0.25)] sm:gap-4 sm:p-4 lg:grid-cols-5"
        >
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="flex flex-col gap-1.5 rounded-2xl px-4 py-6 text-center sm:px-3"
            >
              <span className="text-3xl font-semibold tracking-[-0.02em] text-ink sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-xs leading-snug text-slate sm:text-sm">{stat.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
