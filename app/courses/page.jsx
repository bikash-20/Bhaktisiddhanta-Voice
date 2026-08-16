import Link from "next/link";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import RegistrationForm from "../components/RegistrationForm";

export const metadata = {
  title: "Courses",
  description:
    "Bhagavad-gita study circles, kirtan workshops, orientation programs, and more — register to join the sanga.",
};

const COURSES = [
  {
    title: "Bhagavad-gita Study Circle",
    desc: "A weekly journey through the Gita's chapters — verse by verse — with chanting, discussion, and practical life application.",
    level: "Beginner-friendly",
    duration: "8 weeks",
    emoji: "📖",
    tone: "from-maroon-500 to-saffron-500",
  },
  {
    title: "Srimad Bhagavatam Discourse",
    desc: "Deeper exploration of Krishna's pastimes and the science of devotion — for students who have completed the Gita course.",
    level: "Intermediate",
    duration: "12 weeks",
    emoji: "🪷",
    tone: "from-royal-500 to-royal-700",
  },
  {
    title: "Kirtan & Mantra Workshop",
    desc: "Learn the art of devotional chanting — basic melody, mridanga patterns, and the philosophy behind the maha-mantra.",
    level: "All levels",
    duration: "4 weeks",
    emoji: "🥁",
    tone: "from-saffron-500 to-gold-600",
  },
  {
    title: "Student Orientation Program",
    desc: "A first-touch program for new students — what we do, what to expect, and how to plug into the sanga.",
    level: "Newcomers",
    duration: "1 session",
    emoji: "🎓",
    tone: "from-royal-700 to-maroon-700",
  },
  {
    title: "Spoken Sanskrit & Devotional Language",
    desc: "Build a foundation in Sanskrit vocabulary and pronunciation — chanting becomes richer when you understand the words.",
    level: "Beginner",
    duration: "6 weeks",
    emoji: "🔤",
    tone: "from-gold-500 to-saffron-600",
  },
  {
    title: "Leadership through Seva",
    desc: "A 4-week program for student coordinators — service leadership, organizing festivals, and pastoral care.",
    level: "By invitation",
    duration: "4 weeks",
    emoji: "🤝",
    tone: "from-maroon-700 to-royal-700",
  },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Courses & Programs"
        title="Study the Gita, learn the chant, walk the path."
        subtitle="Structured, warm, and welcoming — every course is designed for students who want to go deeper."
      />

      {/* Courses grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {COURSES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl bg-cream-50 ring-1 ring-gold-400/20 p-7 hover:shadow-soft hover:-translate-y-1 transition-all">
                  <div className={`grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br ${c.tone} text-cream-50 shadow-soft text-3xl`}>
                    <span>{c.emoji}</span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl text-royal-950 group-hover:text-maroon-700 transition">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-royal-900/75 leading-relaxed">{c.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-maroon-50 px-3 py-1 text-xs font-medium text-maroon-700 ring-1 ring-maroon-100">
                      {c.level}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-royal-50 px-3 py-1 text-xs font-medium text-royal-700 ring-1 ring-royal-100">
                      {c.duration}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Registration form */}
      <section id="register" className="py-12 md:py-20 scroll-mt-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal>
            <RegistrationForm
              formType="course"
              title="Register for a Course"
              subtitle="Drop your details and our team will reach you on WhatsApp with class times and venue."
              courses={COURSES.map((c) => c.title)}
              accent="from-maroon-600 to-saffron-500"
            />
          </Reveal>
        </div>
      </section>

      {/* Side-by-side quote band */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-cream-50 via-maroon-50/40 to-cream-50">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 text-center">
          <Reveal>
            <div className="font-display text-2xl md:text-4xl text-royal-950 leading-snug">
              <span className="text-maroon-700">&ldquo;</span>The Gita is not just a book — it is a friend who never leaves your side.<span className="text-maroon-700">&rdquo;</span>
            </div>
            <div className="mt-4 text-sm uppercase tracking-[0.22em] text-maroon-700">— Dr. Gitendranath Adhikary</div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-royal-950 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-royal-800 transition">
                Have a question? Talk to us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
