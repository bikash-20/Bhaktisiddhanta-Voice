import Link from "next/link";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";

export const metadata = {
  title: "Contact Us",
  description:
    "Reach Bhaktisiddhanta Voice — ISKCON Youth Forum, Sylhet. Phone, WhatsApp, email, and address for the temple.",
};

const CONTACT = [
  {
    label: "Phone",
    value: "+880 1993-210511",
    href: "tel:+8801993210511",
    accent: "from-maroon-500 to-saffron-500",
    icon: (
      <path d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.81a2 2 0 01-.45 1.84L8.09 10.91a16 16 0 006 6l1.74-1.39a2 2 0 011.84-.45l2.81.7A2 2 0 0121 17.71V20a2 2 0 01-2 2A18 18 0 013 4z" fill="currentColor"/>
    ),
  },
  {
    label: "WhatsApp",
    value: "Chat with us instantly",
    href: "https://wa.me/8801993210511",
    accent: "from-emerald-500 to-emerald-600",
    icon: (
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.34 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" fill="currentColor"/>
    ),
  },
  {
    label: "Email",
    value: "contact@bhaktisiddhantavoice.org",
    href: "mailto:contact@bhaktisiddhantavoice.org",
    accent: "from-royal-600 to-royal-800",
    icon: (
      <path d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" fill="none" stroke="currentColor" strokeWidth="2"/>
    ),
  },
  {
    label: "Visit",
    value: "Agricultural University 2nd Gate, Sylhet",
    href: "https://maps.google.com/?q=Sylhet+Agricultural+University+2nd+Gate+Sylhet+Bangladesh",
    accent: "from-gold-500 to-saffron-600",
    icon: (
      <path d="M12 2a8 8 0 00-8 8c0 5.25 7.05 11.4 7.35 11.63a1 1 0 001.3 0C12.95 21.4 20 15.25 20 10a8 8 0 00-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z" fill="currentColor"/>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We're easy to reach."
        subtitle="Call, message, or drop in — the sanga is always open to you."
      />

      {/* Contact cards */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CONTACT.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block h-full rounded-2xl bg-cream-50 ring-1 ring-gold-400/20 p-6 hover:shadow-soft hover:-translate-y-1 transition-all"
                >
                  <div className={`grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br ${c.accent} text-cream-50 shadow-soft`}>
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">{c.icon}</svg>
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-[0.22em] text-maroon-700">{c.label}</div>
                  <div className="mt-1 font-display text-xl text-royal-950 group-hover:text-maroon-700 transition break-words">
                    {c.value}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map + Address side-by-side */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid md:grid-cols-12 gap-8">
            <Reveal className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.28em] text-maroon-700 mb-3">Visit the Temple</div>
              <h2 className="font-display text-3xl md:text-4xl text-royal-950 leading-tight">
                Find us in Sylhet.
              </h2>
              <div className="ornament-rule mt-5 max-w-xs" />
              <div className="mt-6 space-y-5 text-lg text-royal-900/80 leading-relaxed">
                <p>
                  The Bhaktisiddhanta temple is located near the 2nd gate of Sylhet Agricultural University. All visitors are warmly welcomed — please come as you are.
                </p>
                <div className="rounded-2xl bg-cream-50 ring-1 ring-gold-400/20 p-6 shadow-soft">
                  <div className="text-xs uppercase tracking-[0.22em] text-maroon-700">Temple Address</div>
                  <div className="mt-2 font-display text-2xl text-royal-950 leading-snug">
                    Bhaktisiddhanta voice
                  </div>
                  <div className="mt-1 text-royal-900/80">
                    Agricultural University 2nd Gate, Sylhet<br />
                    Bangladesh
                  </div>
                  <a
                    href="https://maps.google.com/?q=Sylhet+Agricultural+University+2nd+Gate+Sylhet+Bangladesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-royal-950 px-4 py-2 text-sm font-semibold text-cream-50 hover:bg-royal-800 transition"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal className="md:col-span-7" delay={0.1}>
              <div className="relative aspect-[16/11] w-full rounded-3xl overflow-hidden ring-1 ring-gold-400/30 shadow-soft">
                <iframe
                  src="https://maps.google.com/maps?q=Sylhet+Agricultural+University+2nd+Gate+Sylhet+Bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="Bhaktisiddhanta Temple — Agricultural University 2nd Gate, Sylhet"
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA / Org credit */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-royal-950 via-royal-900 to-maroon-800 px-8 py-12 md:px-14 md:py-16 text-cream-50 shadow-soft">
              <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-saffron-500/20 blur-3xl" />
              <div className="relative">
                <div className="text-xs uppercase tracking-[0.28em] text-gold-300 mb-3">About this organization</div>
                <h3 className="font-display text-3xl md:text-5xl leading-tight max-w-3xl">
                  Conducted by <span className="bg-gradient-to-r from-gold-300 to-saffron-300 bg-clip-text text-transparent">ISKCON Youth Forum, Sylhet</span>.
                </h3>
                <p className="mt-5 text-cream-100/85 leading-relaxed max-w-2xl">
                  Bhaktisiddhanta Voice is part of the ISKCON Youth Forum&rsquo;s mission to introduce
                  university and college students to the timeless wisdom of Krishna consciousness —
                  in the holy land of Sylhet.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-cream-50 px-5 py-2.5 text-sm font-semibold text-royal-950 hover:bg-cream-100 transition">
                    Read our story
                  </Link>
                  <a href="https://wa.me/8801993210511" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-cream-50 hover:bg-emerald-600 transition">
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
