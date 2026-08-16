import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import RegistrationForm from "../components/RegistrationForm";

export const metadata = {
  title: "Alumni Network",
  description:
    "Reconnect with the sanga. The Bhaktisiddhanta Voice alumni network — a lifelong family of students, now scattered across cities and careers.",
};

const STORIES = [
  {
    name: "Ananya S.",
    role: "Software Engineer · Dhaka",
    quote: "What I learned in those evenings of kirtan still anchors me through every deadline. The sanga didn't just teach me about Krishna — it taught me how to be steady.",
    batch: "Class of 2017",
  },
  {
    name: "Rohan D.",
    role: "Lecturer · Sylhet",
    quote: "I came as a first-year for the prasadam. Years later, I returned as a teacher — and the temple still feels like home.",
    batch: "Class of 2014",
  },
  {
    name: "Suman P.",
    role: "Doctor · Chattogram",
    quote: "The Bhagavad-gita study circle taught me to listen. I carry that with me into every consultation.",
    batch: "Class of 2019",
  },
];

export default function AlumniPage() {
  return (
    <>
      <PageHero
        eyebrow="Alumni Network"
        title="A sanga that never graduates you."
        subtitle="Once you walk through the temple doors, you stay part of the family. Reconnect with us — wherever life has taken you."
      />

      {/* Stats band */}
      <section className="py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-royal-950 via-royal-900 to-royal-950 p-8 md:p-10 text-cream-50 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-soft relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gold-500/15 blur-3xl" />
            {[
              { v: "500+", l: "Alumni worldwide" },
              { v: "16", l: "Years of connection" },
              { v: "30+", l: "Cities represented" },
              { v: "∞", l: "Continuing sanga" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.05}>
                <div className="text-center md:border-r md:border-cream-50/10 md:last:border-r-0">
                  <div className="font-display text-4xl md:text-5xl bg-gradient-to-r from-gold-300 to-saffron-300 bg-clip-text text-transparent">{s.v}</div>
                  <div className="mt-1 text-xs md:text-sm uppercase tracking-[0.18em] text-cream-100/70">{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <Reveal className="md:col-span-7">
              <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">The Network</div>
              <h2 className="font-display text-3xl md:text-5xl text-royal-950 leading-tight">
                From SAU to Singapore — we are still one family.
              </h2>
              <div className="ornament-rule mt-5 max-w-xs" />
              <div className="mt-6 space-y-5 text-lg text-royal-900/80 leading-relaxed">
                <p>
                  Every student who passes through our temple, residence, or study circles becomes
                  part of the alumni network — a lifelong sanga of friends, mentors, and well-wishers
                  spread across Bangladesh and the world.
                </p>
                <p>
                  We gather for alumni festivals, online kirtan sessions, mentorship circles, and —
                  most importantly — to make sure that no student who comes after walks the path
                  alone.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#register" className="inline-flex items-center gap-2 rounded-full bg-mantra-gradient px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-glow hover:shadow-soft transition-all">
                  Reconnect with us
                </a>
                <Link href="/gallery" className="inline-flex items-center gap-2 rounded-full border border-maroon-700/30 px-5 py-2.5 text-sm font-semibold text-maroon-700 hover:bg-maroon-50 transition">
                  See alumni events
                </Link>
              </div>
            </Reveal>
            <Reveal className="md:col-span-5">
              <div className="relative aspect-[5/6] rounded-3xl overflow-hidden shadow-soft ring-1 ring-gold-400/30">
                <Image src="/images/hero.jpg" alt="Alumni gathering" fill className="object-cover" />
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-cream-50/90 p-4 backdrop-blur-sm">
                  <div className="text-xs uppercase tracking-widest text-maroon-700">Alumni Meet</div>
                  <div className="font-display text-xl text-royal-950">From cities across the country — and across the world.</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">Alumni Stories</div>
              <h2 className="font-display text-3xl md:text-5xl text-royal-950 leading-tight">
                Where the journey continues.
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {STORIES.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.06}>
                <figure className="h-full rounded-2xl bg-gradient-to-b from-white to-cream-50 ring-1 ring-gold-400/20 p-7 shadow-soft hover:-translate-y-1 transition-all">
                  <svg className="h-8 w-8 text-maroon-300" viewBox="0 0 24 24" fill="currentColor"><path d="M7 7a3 3 0 013-3h2a3 3 0 013 3v1a3 3 0 01-3 3h-1v1a4 4 0 01-4 4H6v-2h1a2 2 0 002-2V7zm10 0a3 3 0 013-3h2a3 3 0 013 3v1a3 3 0 01-3 3h-1v1a4 4 0 01-4 4h-1v-2h1a2 2 0 002-2V7z"/></svg>
                  <blockquote className="mt-3 text-royal-900/85 leading-relaxed">{s.quote}</blockquote>
                  <figcaption className="mt-6 pt-5 border-t border-gold-400/20">
                    <div className="font-display text-lg text-royal-950">{s.name}</div>
                    <div className="text-sm text-royal-900/70">{s.role}</div>
                    <div className="mt-1 text-xs text-maroon-700 uppercase tracking-widest">{s.batch}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni reconnect form */}
      <section id="register" className="py-12 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <RegistrationForm
              formType="alumni"
              title="Alumni Reconnect"
              subtitle="Share your details and we'll add you back into the circle. Look out for reunion news on WhatsApp."
              accent="from-royal-700 to-maroon-700"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
