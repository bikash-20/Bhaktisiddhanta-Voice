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
          className="inline-flex items-center gap-2 rounded-full border border-gold-400/40 bg-cream-50/10 px-3 py-1.5 text-[0.62rem] uppercase tracking-[0.28em] text-gold-300 backdrop-blur-sm shadow-[0_10px_35px_-25px_rgba(247,210,124,0.8)]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" /> Estd. 2009 · Sylhet
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl xl:text-[7rem] font-semibold leading-[0.96] tracking-[-0.04em]"
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
          className="mt-6 max-w-xl text-base sm:text-lg lg:text-[1.15rem] text-cream-100/90 leading-relaxed"
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
          <Link href="/courses#register" className="pill-button pill-button-primary">
            Join a Course
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 011.04-1.08l4.25 4.25a.75.75 0 010 1.08l-4.25 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/></svg>
          </Link>
          <Link href="/temple" className="pill-button pill-button-secondary">
            Visit the Temple
          </Link>
          <Link href="/about" className="pill-button pill-button-ghost">
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
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] ring-1 ring-gold-400/30 shadow-soft bg-royal-950">
          <Image
            src="/images/section-2.jpg"
            alt="Sri Krishna portrait in devotional art"
            fill
            className="object-cover deity-portrait scale-[1.08]"
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-royal-950/0 via-royal-950/10 to-royal-950/10" />
        </div>
        <div className="mt-5 rounded-2xl bg-cream-50/95 ring-1 ring-gold-400/30 px-5 py-4 shadow-soft">
          <div className="font-display text-xl text-royal-950">Sri Krishna</div>
          <div className="text-sm text-royal-900/75 mt-1">
            Sweet remembrance, kirtan, and a daily practice of devotion.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
