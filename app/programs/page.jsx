import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Programs",
  description:
    "Meal Program, Student Residence, and Spiritual Programs — three practical ways the sanga supports students in Sylhet.",
};

const PROGRAMS = [
  {
    id: "meal",
    eyebrow: "Meal Program",
    title: "Hot, sanctified prasadam — every day.",
    desc: "A warm plate of Krishna-prasadam is offered to students daily — vegetarian, freshly prepared, and served with love. For many students, it's the best meal of the day, and the gateway to the sanga.",
    bullets: [
      "Open to all university and college students",
      "Served at lunchtime, Monday – Saturday",
      "Sanctified vegetarian food — prasadam from the temple",
      "Free of cost — supported by the sanga",
    ],
    cta: "Have your first meal",
    ctaHref: "/contact",
    image: "/images/section-3.jpg",
    accent: "from-maroon-600 to-saffron-500",
    reverse: false,
  },
  {
    id: "residence",
    eyebrow: "Student Residence",
    title: "A peaceful place to stay and study.",
    desc: "Our student residence offers a quiet, sattvic environment rooted in spiritual discipline — for students who want a home that supports both their studies and their inner life.",
    bullets: [
      "Comfortable stay for university students",
      "Dedicated study spaces and quiet hours",
      "Daily kirtan and weekly spiritual programs",
      "Simple application — speak with the coordinators",
    ],
    cta: "Apply for residence",
    ctaHref: "/contact",
    image: "/images/jagannath.jpg",
    accent: "from-royal-600 to-royal-800",
    reverse: true,
  },
  {
    id: "spiritual",
    eyebrow: "Spiritual Programs",
    title: "Classes, kirtan, and festivals.",
    desc: "A steady rhythm of classes, chanting, and celebrations — designed for students who want to deepen their spiritual life alongside their studies.",
    bullets: [
      "Bhagavad-gita and Srimad Bhagavatam study circles",
      "Weekly kirtan sessions at the temple",
      "Festival celebrations — Janmashtami, Rath Yatra, Gaura Purnima and more",
      "Orientation for new students — first Friday of every month",
    ],
    cta: "Join a study circle",
    ctaHref: "/courses",
    image: "/images/jagannath.jpg",
    accent: "from-saffron-500 to-gold-600",
    reverse: false,
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Three practical ways we walk with students."
        subtitle="From the plate to the prayer — every program is built around the rhythms of a student's life."
      />

      <div className="space-y-20 md:space-y-32 py-8 md:py-12">
        {PROGRAMS.map((p, i) => (
          <section key={p.id} id={p.id} className="scroll-mt-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className={`grid md:grid-cols-12 gap-10 items-center ${p.reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
                <Reveal className="md:col-span-6">
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft ring-1 ring-gold-400/20 bg-royal-950">
                    <Image src={p.image} alt={p.title} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className={`absolute inset-x-0 bottom-0 inline-flex items-center gap-2 bg-gradient-to-r ${p.accent} px-4 py-2 text-xs uppercase tracking-[0.22em] text-cream-50`}>
                      <span className="h-1.5 w-1.5 rounded-full bg-cream-50" /> 0{i + 1} · {p.eyebrow}
                    </div>
                  </div>
                </Reveal>
                <Reveal className="md:col-span-6" delay={0.1}>
                  <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">{p.eyebrow}</div>
                  <h2 className="font-display text-3xl md:text-5xl text-royal-950 leading-tight">
                    {p.title}
                  </h2>
                  <div className="ornament-rule mt-5 max-w-xs" />
                  <p className="mt-6 text-lg text-royal-900/80 leading-relaxed">{p.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-royal-900/85">
                        <span className="mt-1 grid place-items-center h-5 w-5 shrink-0 rounded-full bg-maroon-50 ring-1 ring-maroon-200">
                          <svg className="h-3 w-3 text-maroon-700" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0L3.3 9.7a1 1 0 011.4-1.4l4.1 4.1 6.8-6.8a1 1 0 011.1-.3z" clipRule="evenodd"/></svg>
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <Link href={p.ctaHref} className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${p.accent} px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-soft hover:-translate-y-0.5 transition-all`}>
                      {p.cta}
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-maroon-700/30 px-5 py-2.5 text-sm font-semibold text-maroon-700 hover:bg-maroon-50 transition">
                      Talk to a coordinator
                    </Link>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA band */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-cream-100 to-cream-50">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">Ready to begin?</div>
            <h2 className="font-display text-3xl md:text-5xl text-royal-950 leading-tight">
              The first step is always the easiest.
            </h2>
            <p className="mt-4 text-royal-900/75 max-w-2xl mx-auto leading-relaxed">
              Drop in for a meal, attend a kirtan, or apply for residence. We&rsquo;ll meet you where you are.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link href="/courses#register" className="inline-flex items-center gap-2 rounded-full bg-mantra-gradient px-6 py-3 text-sm font-semibold text-cream-50 shadow-glow hover:shadow-soft transition-all">
                Register for a Course
              </Link>
              <a href="https://wa.me/8801993210511" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-emerald-600 transition">
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
