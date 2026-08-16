import Link from "next/link";
import Image from "next/image";
import Reveal from "./components/Reveal";
import Mantra from "./components/Mantra";
import HeroMotion from "./components/HeroMotion";

export const metadata = {
  title: "Bhaktisiddhanta Voice — Where students meet Krishna consciousness",
  description:
    "Temple worship, free meals, student residence, and courses in Krishna consciousness — conducted by ISKCON Youth Forum, Sylhet since 2009.",
};

const HIGHLIGHTS = [
  {
    title: "Temple & Deities",
    desc: "Daily darshan of Sri Sri Radha-Krishna and Sri Jagannath, with aarti and kirtan.",
    href: "/temple",
    icon: (
      <path d="M12 2L2 9v13h6v-7h8v7h6V9l-10-7z" fill="currentColor" />
    ),
    accent: "from-maroon-500 to-saffron-500",
  },
  {
    title: "Meal Program",
    desc: "Hot, sanctified prasadam served daily to university and college students.",
    href: "/programs#meal",
    icon: (
      <path d="M3 11h18v2H3zM4 13h16a1 1 0 011 1v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5a1 1 0 011-1zm2-3a6 6 0 1112 0v3H6v-3z" fill="currentColor" />
    ),
    accent: "from-gold-500 to-saffron-600",
  },
  {
    title: "Student Residence",
    desc: "A peaceful stay-and-study environment rooted in spiritual discipline.",
    href: "/programs#residence",
    icon: (
      <path d="M3 12l9-9 9 9v9h-6v-6h-6v6H3v-9z" fill="currentColor" />
    ),
    accent: "from-royal-500 to-royal-700",
  },
  {
    title: "Courses",
    desc: "Bhagavad-gita study circles, spoken sessions, and orientation programs.",
    href: "/courses",
    icon: (
      <path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4V4zm2 2v10a2 2 0 002 2h10V8a2 2 0 00-2-2H6z" fill="currentColor" />
    ),
    accent: "from-saffron-500 to-maroon-500",
  },
  {
    title: "Alumni Network",
    desc: "Stay connected with the sanga and contribute to the next generation of students.",
    href: "/alumni",
    icon: (
      <path d="M16 11a4 4 0 100-8 4 4 0 000 8zm-8 0a4 4 0 100-8 4 4 0 000 8zm0 2c-3.314 0-8 1.673-8 5v3h10v-3c0-1.084.4-2.166 1.097-3.097C10.262 13.34 9.157 13 8 13zm8 0c-1.157 0-2.262.34-3.097.903A6.96 6.96 0 0114 18v3h10v-3c0-3.327-4.686-5-8-5z" fill="currentColor" />
    ),
    accent: "from-maroon-700 to-royal-700",
  },
  {
    title: "Gallery",
    desc: "A glimpse into festivals, daily life, and celebrations at the temple.",
    href: "/gallery",
    icon: (
      <path d="M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1zm2 10l3-4 2 3 3-5 5 7H6z" fill="currentColor" />
    ),
    accent: "from-royal-600 to-gold-500",
  },
];

const STATS = [
  { value: "2009", label: "Established" },
  { value: "2+", label: "Universities served" },
  { value: "500+", label: "Students reached" },
  { value: "Daily", label: "Prasadam served" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.jpg"
            alt="Bhaktisiddhanta Voice community gathered at the temple"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal-950/85 via-royal-950/65 to-royal-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-royal-950/90 via-transparent to-transparent" />
        </div>

        <div className="mx-auto max-w-7xl px-5 sm:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <HeroMotion />
        </div>

        {/* Mantra ribbon */}
        <div className="relative -mt-12 mb-12 z-10 px-5 sm:px-8">
          <div className="mx-auto max-w-5xl rounded-2xl glass-dark px-6 py-5 md:py-6 ring-1 ring-gold-400/30 shadow-soft">
            <Mantra className="" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <Reveal className="md:col-span-5">
              <div className="relative aspect-[5/6] rounded-3xl overflow-hidden shadow-soft bg-royal-950">
                <Image src="/images/section-3.jpg" alt="Students gathering" fill className="object-cover object-center" />
                <div className="absolute inset-x-0 bottom-0 inline-flex items-center gap-1.5 rounded-t-2xl bg-cream-50/95 px-4 py-2 text-xs font-medium text-maroon-700 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-maroon-500" /> A sanga for students
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.1}>
              <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">Our calling</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-royal-950 leading-tight">
                A home that nourishes body, mind, and soul.
              </h2>
              <p className="mt-5 text-lg text-royal-900/80 leading-relaxed">
                Founded in 2009 by Dr. Gitendranath Adhikary — professor at Sylhet Agricultural
                University — and conducted under ISKCON Youth Forum, Sylhet, Bhaktisiddhanta Voice
                exists for one purpose: to introduce students to the timeless wisdom of the
                Bhagavad-gita and the warmth of devotional community.
              </p>
              <p className="mt-4 text-lg text-royal-900/80 leading-relaxed">
                From daily aarti in the temple to a hot plate of prasadam between lectures, from
                a quiet place to stay and study to a sanga that walks with you long after
                graduation — every part of the organization is built around the student.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-royal-950 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-royal-800 transition">
                  Read our story
                </Link>
                <Link href="/programs" className="inline-flex items-center gap-2 rounded-full border border-maroon-700/30 px-5 py-2.5 text-sm font-semibold text-maroon-700 hover:bg-maroon-50 transition">
                  Explore programs
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-12 md:py-16 bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 text-cream-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-2">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.05}>
                <div className="text-center md:border-r md:border-cream-100/10 md:last:border-r-0 py-2">
                  <div className="font-display text-4xl md:text-5xl bg-gradient-to-r from-gold-300 to-saffron-300 bg-clip-text text-transparent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs md:text-sm uppercase tracking-[0.2em] text-cream-100/70">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHT CARDS */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">What we do</div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-royal-950 leading-tight">
                Six doors into the sanga.
              </h2>
              <div className="ornament-rule mt-6 mx-auto max-w-xs" />
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {HIGHLIGHTS.map((h, i) => (
              <Reveal key={h.title} delay={i * 0.05}>
                <Link
                  href={h.href}
                  className="group relative block h-full rounded-2xl bg-cream-50 p-7 ring-1 ring-gold-400/20 shadow-soft hover:shadow-glow hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br ${h.accent} opacity-15 group-hover:opacity-25 transition`} />
                  <div className={`grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br ${h.accent} text-cream-50 shadow-soft`}>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">{h.icon}</svg>
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-royal-950 group-hover:text-maroon-700 transition">
                    {h.title}
                  </h3>
                  <p className="mt-2 text-royal-900/75 leading-relaxed">{h.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-maroon-700 group-hover:gap-2 transition-all">
                    Learn more
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 011.04-1.08l4.25 4.25a.75.75 0 010 1.08l-4.25 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/></svg>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DECORATIVE MANTRA BAND */}
      <section className="relative py-20 md:py-28 bg-cream-50">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22><g fill=%22%231f2f4d%22><circle cx=%2230%22 cy=%2230%22 r=%221%22/><circle cx=%2290%22 cy=%2230%22 r=%221%22/><circle cx=%2230%22 cy=%2290%22 r=%221%22/><circle cx=%2290%22 cy=%2290%22 r=%221%22/></g></svg>')]" />
        </div>
        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-5">The Maha-mantra</div>
          </Reveal>
          <Mantra />
          <Reveal delay={0.2}>
            <p className="mt-8 text-base md:text-lg text-royal-900/75 max-w-2xl mx-auto leading-relaxed">
              The Hare Krishna maha-mantra is the heart of our practice. Chanted together, it calms
              the mind and reminds every student of who they really are.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-maroon-700 via-maroon-600 to-saffron-600 px-8 py-12 md:px-14 md:py-16 text-cream-50 shadow-soft">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold-400/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-royal-700/30 blur-3xl" />
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-xs uppercase tracking-[0.28em] text-gold-300 mb-3">Step inside</div>
                  <h3 className="font-display text-3xl md:text-5xl leading-tight">
                    Your chapter at Bhaktisiddhanta Voice starts here.
                  </h3>
                  <p className="mt-4 text-cream-50/90 max-w-lg leading-relaxed">
                    Register for a course, attend the next aarti, or just drop in for prasadam. The
                    door is open and the kettle is always on.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row md:justify-end gap-3">
                  <Link href="/courses#register" className="inline-flex justify-center items-center gap-2 rounded-full bg-cream-50 px-6 py-3 text-sm font-semibold text-maroon-700 hover:bg-cream-100 transition">
                    Register now
                  </Link>
                  <a href="https://wa.me/8801993210511" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-emerald-600 transition">
                    Chat on WhatsApp
                  </a>
                  <Link href="/contact" className="inline-flex justify-center items-center gap-2 rounded-full border border-cream-50/40 px-6 py-3 text-sm font-semibold text-cream-50 hover:bg-cream-50/10 transition">
                    Visit us
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
