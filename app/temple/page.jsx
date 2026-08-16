import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import Mantra from "../components/Mantra";

export const metadata = {
  title: "Temple & Deities",
  description:
    "Daily darshan of Sri Sri Radha-Krishna and Sri Jagannath. Aarti, kirtan, and a peaceful sanctuary in the heart of Sylhet.",
};

const SCHEDULE = [
  { time: "5:00 AM", event: "Mangala Aarti" },
  { time: "7:30 AM", event: "Shringar & Darshan" },
  { time: "12:30 PM", event: "Bhog Aarti & Prasadam" },
  { time: "7:00 PM", event: "Sandhya Aarti & Kirtan" },
  { time: "9:00 PM", event: "Shayan Aarti" },
];

const FESTIVALS = [
  { name: "Janmashtami", desc: "Appearance day of Lord Krishna — chanting, abhishek, midnight celebration." },
  { name: "Rath Yatra", desc: "Chariot festival of Lord Jagannath — processions and kirtan through the streets of Sylhet." },
  { name: "Gaura Purnima", desc: "Appearance of Chaitanya Mahaprabhu — sankirtan and abhishek." },
  { name: "Narasimha Jayanti", desc: "Appearance of Lord Narasimha — fierce protection and celebration." },
];

const DEITIES = [
  {
    name: "Sri Sri Radha-Krishna",
    note: "The divine couple — Radharani and Krishna — preside over the temple with the sweetest pastimes of Vrindavan. Their darshan is the heart of our daily practice.",
    mantra: "Radhe Radhe",
    image: "/images/section-2.jpg",
    accent: "from-maroon-500 to-saffron-500",
  },
  {
    name: "Sri Krishna",
    note: "The Lord's merciful presence is felt in the temple through kirtan, prayer, and the stillness of daily remembrance. His face, His name, and His pastimes guide every student who comes to the sanga.",
    mantra: "Hare Krishna",
    image: "/images/section-2.jpg",
    accent: "from-royal-600 to-maroon-600",
  },
];

export default function TemplePage() {
  return (
    <>
      <PageHero
        eyebrow="Temple & Deities"
        title="A sanctuary in the heart of Sylhet."
        subtitle="Open to every student. Daily aarti, kirtan, and darshan of Sri Sri Radha-Krishna and Sri Sri Jagannath."
      />

      {/* Temple intro */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-12 gap-10 items-center">
            <Reveal className="md:col-span-7">
              <div className="space-y-5 text-lg text-royal-900/85 leading-relaxed">
                <p>
                  The Bhaktisiddhanta temple is a small, sacred space where students and devotees
                  gather to chant, hear, and remember. Wooden arches, the soft aroma of incense,
                  and the steady beat of the mridanga define the rhythm of each day.
                </p>
                <p>
                  Everyone is welcome — regardless of background. Whether you come for a few minutes
                  of quiet, an evening of kirtan, or simply a hot plate of prasadam after class,
                  the temple is your home too.
                </p>
              </div>
            </Reveal>
            <Reveal className="md:col-span-5">
              <div className="relative aspect-[5/6] rounded-3xl overflow-hidden shadow-soft bg-royal-950">
                <Image src="/images/section-2.jpg" alt="Sri Krishna face portrait" fill className="object-cover deity-portrait" sizes="(max-width: 768px) 100vw, 40vw" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Deities */}
      {DEITIES.map((d, i) => (
        <section key={d.name} className={`py-16 md:py-24 ${i % 2 === 1 ? "bg-cream-50" : ""}`}>
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className={`grid md:grid-cols-12 gap-10 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <Reveal className="md:col-span-6">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft ring-1 ring-gold-400/20 bg-royal-950">
                  <Image src={d.image} alt={d.name} fill className="object-cover deity-portrait" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </Reveal>
              <Reveal className="md:col-span-6" delay={0.1}>
                <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${d.accent} px-3 py-1 text-xs uppercase tracking-[0.22em] text-cream-50`}>
                  <span className="h-1.5 w-1.5 rounded-full bg-cream-50" /> Deity {i + 1}
                </div>
                <h2 className="mt-4 font-display text-4xl md:text-5xl text-royal-950 leading-tight">
                  {d.name}
                </h2>
                <div className="ornament-rule mt-5 max-w-xs" />
                <p className="mt-6 text-lg text-royal-900/80 leading-relaxed">{d.note}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-royal-950 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-royal-800 transition">
                    Plan a visit
                  </Link>
                  <Link href="/gallery" className="inline-flex items-center gap-2 rounded-full border border-maroon-700/30 px-5 py-2.5 text-sm font-semibold text-maroon-700 hover:bg-maroon-50 transition">
                    See darshan photos
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* Schedule */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-royal-950 via-royal-900 to-royal-950 text-cream-50 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-maroon-500/20 blur-3xl" />
        <div className="mx-auto max-w-5xl px-5 sm:px-8 relative">
          <Reveal>
            <div className="text-center mb-10 md:mb-14">
              <div className="text-xs uppercase tracking-[0.28em] text-gold-300 mb-3">Daily Worship</div>
              <h2 className="font-display text-3xl md:text-5xl leading-tight">A day at the temple</h2>
              <div className="ornament-rule mt-6 mx-auto max-w-xs" />
            </div>
          </Reveal>
          <div className="rounded-3xl bg-cream-50/5 ring-1 ring-cream-50/10 backdrop-blur-sm overflow-hidden">
            {SCHEDULE.map((s, idx) => (
              <Reveal key={s.event} delay={idx * 0.04}>
                <div className={`flex items-center justify-between gap-4 px-6 md:px-8 py-5 ${idx !== SCHEDULE.length - 1 ? "border-b border-cream-50/10" : ""}`}>
                  <div className="font-display text-2xl md:text-3xl bg-gradient-to-r from-gold-300 to-saffron-300 bg-clip-text text-transparent">
                    {s.time}
                  </div>
                  <div className="text-base md:text-lg font-medium tracking-wide">
                    {s.event}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-8 text-center text-cream-100/75">
              All programs are open to the public. New visitors are warmly welcomed — please come as you are.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Festivals */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">Festival Calendar</div>
              <h2 className="font-display text-3xl md:text-5xl text-royal-950 leading-tight">
                The whole year is a celebration.
              </h2>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FESTIVALS.map((f, i) => (
              <Reveal key={f.name} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-gradient-to-br from-cream-50 to-cream-100 ring-1 ring-gold-400/20 p-6 hover:shadow-soft hover:-translate-y-1 transition-all">
                  <div className="text-xs uppercase tracking-[0.22em] text-gold-700 mb-2">Festival</div>
                  <h3 className="font-display text-2xl text-royal-950">{f.name}</h3>
                  <p className="mt-3 text-royal-900/75 leading-relaxed text-sm">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mantra band */}
      <section className="py-16 md:py-20 bg-cream-50">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Mantra />
        </div>
      </section>
    </>
  );
}
