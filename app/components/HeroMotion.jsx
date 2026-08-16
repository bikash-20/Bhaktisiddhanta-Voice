"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroMotion() {
  return (
    <div className="flex min-h-[70vh] items-center">
      <div className="max-w-3xl text-cream-50">
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
          className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl xl:text-[5.6rem] font-semibold leading-[0.96] tracking-[-0.04em]"
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
          <Link href="/courses#register" className="pill-button pill-button-primary px-5 py-3 text-sm md:px-8 md:py-4 md:text-[0.95rem]">
            Join a Course
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 011.04-1.08l4.25 4.25a.75.75 0 010 1.08l-4.25 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/></svg>
          </Link>
          <Link href="/temple" className="pill-button pill-button-secondary px-5 py-3 text-sm md:px-8 md:py-4 md:text-[0.95rem]">
            Visit the Temple
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
