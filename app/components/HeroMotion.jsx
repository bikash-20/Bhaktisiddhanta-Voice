"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroMotion() {
  return (
    <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[70vh]">
      <div className="lg:col-span-7 text-cream-50">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-cream-50/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-gold-300 backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> Estd. 2009 · Sylhet
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.02]"
        >
          Where students meet{" "}
          <span className="block bg-gradient-to-r from-gold-300 via-saffron-300 to-maroon-300 bg-clip-text text-transparent">
            Krishna consciousness.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-cream-100/90 leading-relaxed"
        >
          Bhaktisiddhanta Voice is a spiritual home for university students in Sylhet — a
          temple for daily worship, hot prasadam on the plate, a residence to study and grow,
          and a lifelong sanga to walk with.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Link
            href="/courses#register"
            className="inline-flex items-center gap-2 rounded-full bg-mantra-gradient px-6 py-3 text-sm font-semibold text-cream-50 shadow-glow hover:shadow-soft hover:-translate-y-0.5 transition-all"
          >
            Join a Course
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 011.04-1.08l4.25 4.25a.75.75 0 010 1.08l-4.25 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/></svg>
          </Link>
          <Link
            href="/temple"
            className="inline-flex items-center gap-2 rounded-full border border-cream-50/30 bg-cream-50/10 px-6 py-3 text-sm font-semibold text-cream-50 backdrop-blur-sm hover:bg-cream-50/20 transition"
          >
            Visit the Temple
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-cream-100/90 hover:text-gold-300 transition"
          >
            Learn More →
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.0, delay: 0.4 }}
        className="lg:col-span-5 hidden lg:block"
      >
        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-gold-400/30 shadow-soft bg-royal-950">
          <Image
            src="/images/jagannath.jpg"
            alt="Sri Sri Jagannath, Balabhadra and Subhadra"
            fill
            className="object-cover object-center"
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>
        <div className="mt-5 rounded-2xl bg-cream-50/95 ring-1 ring-gold-400/30 px-5 py-4 shadow-soft">
          <div className="font-display text-xl text-royal-950">Sri Sri Jagannath</div>
          <div className="text-sm text-royal-900/75 mt-1">
            Aarti, kirtan, and quiet reflection — every evening.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
