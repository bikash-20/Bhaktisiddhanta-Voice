import Link from "next/link";
import Image from "next/image";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import { IMAGES } from "../lib/images";

export const metadata = {
  title: "About Us",
  description:
    "Founded in 2009 by Dr. Gitendranath Adhikary, Bhaktisiddhanta Voice is conducted by ISKCON Youth Forum, Sylhet — spreading Krishna consciousness among university students.",
};

const VALUES = [
  {
    title: "Seva (Service)",
    desc: "Selfless service to students, the temple, and the community — without expectation.",
    icon: "🪔",
    tone: "from-maroon-500 to-saffron-500",
  },
  {
    title: "Vidya (Education)",
    desc: "Studying the Bhagavad-gita and Srimad Bhagavatam with sincerity and humility.",
    icon: "📖",
    tone: "from-royal-500 to-royal-700",
  },
  {
    title: "Bhakti (Spirituality)",
    desc: "Chanting, hearing, and remembering — keeping the soul connected to its source.",
    icon: "🪷",
    tone: "from-gold-500 to-saffron-600",
  },
  {
    title: "Sanga (Community)",
    desc: "Walking together — students, alumni, and well-wishers — across decades and distances.",
    icon: "🤝",
    tone: "from-royal-700 to-maroon-700",
  },
];

const TIMELINE = [
  {
    year: "2009",
    title: "A temple is born in Sylhet",
    desc: "Bhaktisiddhanta Voice is founded by Dr. Gitendranath Adhikary under ISKCON Youth Forum, Sylhet, with a small group of students at Sylhet Agricultural University.",
  },
  {
    year: "The Years That Followed",
    title: "Prasadam, residence, and kirtan",
    desc: "Daily meals for students, a student residence, weekly kirtan sessions, and Bhagavad-gita classes become the backbone of the sanga.",
  },
  {
    year: "Today",
    title: "A multi-campus spiritual home",
    desc: "Hundreds of students have passed through our doors — studying at SAU, Sylhet Engineering College, and beyond. An active alumni network keeps the sanga alive across cities.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A student sanga, rooted in devotion."
        subtitle="Founded in 2009 by Dr. Gitendranath Adhikary — and conducted under ISKCON Youth Forum, Sylhet — Bhaktisiddhanta Voice exists for university students wrestling with life's biggest questions."
      />

      {/* Story panel */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <Reveal className="md:col-span-6">
              <div className="relative rounded-3xl overflow-hidden shadow-soft bg-royal-950">
                <Image src={IMAGES.hero} alt="Our temple community" className="w-full h-auto" />
              </div>
            </Reveal>
            <Reveal className="md:col-span-6" delay={0.1}>
              <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">Our Story</div>
              <h2 className="font-display text-3xl md:text-4xl text-royal-950 leading-tight">
                From a small group of students to a lifelong sanga.
              </h2>
              <div className="mt-6 space-y-5 text-lg text-royal-900/80 leading-relaxed">
                <p>
                  In 2009, a group of students at Sylhet Agricultural University began gathering for
                  kirtan. Under the guidance of Dr. Gitendranath Adhikary, that small gathering grew
                  into something larger — a temple, a daily meal program, a student residence, and a
                  study circle based on the Bhagavad-gita.
                </p>
                <p>
                  What began as a fellowship became a mission: to introduce every student who walks
                  through our doors to Krishna consciousness — not as a religion, but as a way of
                  life that nourishes the soul, steadies the mind, and gives purpose to study.
                </p>
                <p>
                  Today, that same spirit lives on — in the aroma of prasadam at lunchtime, in the
                  sound of mridanga at sunset, and in every alumnus who returns to share what they
                  received here.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-cream-50 via-maroon-50/30 to-cream-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">Our Founder</div>
              <h2 className="font-display text-3xl md:text-5xl text-royal-950 leading-tight">
                Dr. Gitendranath Adhikary
              </h2>
              <div className="ornament-rule mt-5 mx-auto max-w-xs" />
            </div>
          </Reveal>

          <div className="grid md:grid-cols-12 gap-10 items-center">
            <Reveal className="md:col-span-5">
              <div className="relative rounded-3xl overflow-hidden ring-1 ring-gold-400/30 shadow-soft bg-royal-950">
                <Image
                  src={IMAGES.founder}
                  alt="Dr. Gitendranath Adhikary, Founder of Bhaktisiddhanta Voice"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-4 rounded-2xl bg-cream-50 ring-1 ring-gold-400/20 p-4 shadow-soft">
                <div className="text-xs uppercase tracking-[0.22em] text-maroon-700">Founder</div>
                <div className="font-display text-xl text-royal-950 mt-1">Dr. Gitendranath Adhikary</div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.1}>
              <div className="space-y-5 text-lg text-royal-900/80 leading-relaxed">
                <p>
                  Dr. Gitendranath Adhikary is a professor at <strong>Sylhet Agricultural University (SAU)</strong> and
                  the founder of Bhaktisiddhanta Voice. With a scholar&rsquo;s mind and a devotee&rsquo;s heart,
                  Dr. Adhikary has devoted decades to introducing students to the timeless wisdom of
                  the Vedic tradition.
                </p>
                <p>
                  His vision: that every student — regardless of background — should have access to
                  the spiritual nourishment, intellectual mentorship, and warm community that helped
                  shape his own life. Under his guidance, Bhaktisiddhanta Voice has become a
                  spiritual home for students at SAU, Sylhet Engineering College, and beyond.
                </p>
                <p>
                  He continues to teach, mentor, and preside over the temple&rsquo;s daily worship — and
                  his door remains open to every student who seeks a moment of clarity.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-royal-950 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-royal-800 transition">
                  Reach out to us
                </Link>
                <Link href="/programs" className="inline-flex items-center gap-2 rounded-full border border-maroon-700/30 px-5 py-2.5 text-sm font-semibold text-maroon-700 hover:bg-maroon-50 transition">
                  See our programs
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <Reveal>
              <div className="h-full rounded-3xl bg-royal-950 text-cream-50 p-8 md:p-10 shadow-soft relative overflow-hidden">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gold-400/20 blur-2xl" />
                <div className="text-xs uppercase tracking-[0.28em] text-gold-300 mb-3">Mission</div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight">
                  To ground every student in Krishna consciousness.
                </h3>
                <p className="mt-5 text-cream-100/85 leading-relaxed">
                  Through daily worship, sincere study of the Bhagavad-gita, and service to the
                  community, we aim to give every student the spiritual foundation to live with
                  clarity, purpose, and compassion — during their studies and for the rest of their
                  lives.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl bg-mantra-gradient text-cream-50 p-8 md:p-10 shadow-soft relative overflow-hidden">
                <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-cream-50/15 blur-2xl" />
                <div className="text-xs uppercase tracking-[0.28em] text-cream-50/80 mb-3">Vision</div>
                <h3 className="font-display text-3xl md:text-4xl leading-tight">
                  A generation of students transformed by seva and bhakti.
                </h3>
                <p className="mt-5 text-cream-50/90 leading-relaxed">
                  A future where every university campus in Sylhet — especially SAU and Sylhet
                  Engineering College — has a sanga where students can find nourishment for body,
                  mind, and soul, and a spiritual family that lasts a lifetime.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-cream-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">Our Values</div>
              <h2 className="font-display text-3xl md:text-5xl text-royal-950 leading-tight">
                Four pillars of the sanga.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-cream-50 ring-1 ring-gold-400/20 p-7 hover:shadow-soft hover:-translate-y-1 transition-all">
                  <div className={`grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br ${v.tone} text-cream-50 shadow-soft text-2xl`}>
                    <span>{v.icon}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-royal-950">{v.title}</h3>
                  <p className="mt-2 text-royal-900/75 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">Our Journey</div>
              <h2 className="font-display text-3xl md:text-5xl text-royal-950 leading-tight">
                Sixteen years and counting.
              </h2>
            </div>
          </Reveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-maroon-300 via-gold-400 to-royal-300" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.05}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-12 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className="pl-12 md:pl-0 md:pr-10 md:text-right">
                      <div className="text-xs uppercase tracking-[0.22em] text-gold-700">{t.year}</div>
                      <h3 className="mt-1 font-display text-2xl text-royal-950">{t.title}</h3>
                    </div>
                    <div className="pl-12 md:pl-10 md:border-l md:border-gold-400/20">
                      <p className="text-royal-900/80 leading-relaxed">{t.desc}</p>
                    </div>
                    <span className="absolute left-2 md:left-1/2 top-2 md:-translate-x-1/2 grid place-items-center h-5 w-5 rounded-full bg-cream-50 ring-4 ring-gold-400">
                      <span className="h-2 w-2 rounded-full bg-maroon-600" />
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
