import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] grid place-items-center px-5">
      <div className="text-center max-w-xl">
        <div className="font-display text-[8rem] sm:text-[10rem] leading-none bg-gradient-to-br from-maroon-500 via-gold-500 to-royal-600 bg-clip-text text-transparent">
          404
        </div>
        <h1 className="mt-2 font-display text-3xl md:text-4xl text-royal-950">
          This page wandered off.
        </h1>
        <p className="mt-3 text-royal-900/75 leading-relaxed">
          Maybe it&rsquo;s at the temple for aarti. Let&rsquo;s get you back to the sanga.
        </p>
        <div className="mt-7 flex justify-center gap-3">
          <Link href="/" className="inline-flex items-center gap-2 rounded-full bg-mantra-gradient px-5 py-2.5 text-sm font-semibold text-cream-50 shadow-glow hover:shadow-soft transition-all">
            Go home
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-maroon-700/30 px-5 py-2.5 text-sm font-semibold text-maroon-700 hover:bg-maroon-50 transition">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
