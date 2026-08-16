import Reveal from "./Reveal";
import WordReveal from "./WordReveal";

export default function PageHero({ eyebrow, title, subtitle, children, align = "center" }) {
  const isCenter = align === "center";
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-maroon-50 via-cream-50 to-cream-50" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(204,146,26,0.20) 0, transparent 55%), radial-gradient(circle at 80% 70%, rgba(179,64,64,0.18) 0, transparent 55%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className={isCenter ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}>
          {eyebrow && (
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-gold-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-maroon-700">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" /> {eyebrow}
              </div>
            </Reveal>
          )}
          <WordReveal
            as="h1"
            delay={0.08}
            stagger={0.05}
            className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-semibold text-royal-950 leading-[1.05]"
            lines={[{ text: title }]}
          />
          {subtitle && (
            <Reveal delay={0.1}>
              <p className="mt-5 text-base sm:text-lg text-royal-900/80 leading-relaxed">
                {subtitle}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={0.15}>
              <div className={isCenter ? "mt-8 flex justify-center gap-3 flex-wrap" : "mt-8 flex gap-3 flex-wrap"}>
                {children}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
