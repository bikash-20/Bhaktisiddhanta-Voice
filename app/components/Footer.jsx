"use client";

import Link from "next/link";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV = [
  { href: "/about", label: "About Us" },
  { href: "/temple", label: "Temple & Deities" },
  { href: "/programs", label: "Programs" },
  { href: "/courses", label: "Courses" },
  { href: "/alumni", label: "Alumni" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative mt-24 bg-royal-950 text-cream-100 overflow-hidden">
      {/* Scroll progress bar */}
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="absolute left-0 top-0 right-0 h-1 origin-left bg-mantra-gradient z-10"
      />

      {/* Decorative mantra */}
      <div className="absolute inset-x-0 top-8 flex justify-center pointer-events-none opacity-[0.07] select-none">
        <span className="font-mantra text-[8rem] sm:text-[10rem] tracking-widest text-cream-50 whitespace-nowrap">
          हरे कृष्ण हरे कृष्ण
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 group">
              <div className="grid place-items-center h-14 w-14 rounded-full bg-cream-50 ring-1 ring-gold-400/40 overflow-hidden transition-all duration-500 group-hover:ring-gold-400 group-hover:scale-105">
                <Logo className="h-12 w-12 transition-transform duration-500 group-hover:rotate-3" />
              </div>
              <div>
                <div className="font-display text-2xl font-semibold transition-colors duration-300 group-hover:text-gold-400">Bhaktisiddhanta Voice</div>
                <div className="text-xs uppercase tracking-[0.2em] text-gold-400">
                  Conducted by ISKCON Youth Forum · Sylhet
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-cream-100/80 leading-relaxed">
              Spreading Krishna consciousness among university and college students in Sylhet since 2009.
              Temple worship, free meals, student residence, and lifelong fellowship.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="tel:+8801993210511"
                className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-4 py-2 text-sm hover:bg-cream-50/20 hover:-translate-y-0.5 transition-all duration-300 focus-ring"
              >
                <svg className="h-4 w-4 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.81a2 2 0 01-.45 1.84L8.09 10.91a16 16 0 006 6l1.74-1.39a2 2 0 011.84-.45l2.81.7A2 2 0 0121 17.71V20a2 2 0 01-2 2A18 18 0 013 4z"/></svg>
                +880 1993-210511
              </a>
              <a
                href="https://wa.me/8801993210511"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-cream-50 hover:bg-emerald-500 hover:-translate-y-0.5 transition-all duration-300 focus-ring"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.34 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.683 5.51l-.999 3.648 3.805-.857z"/></svg>
                WhatsApp
              </a>
              <a
                href="mailto:bikashtalukder040@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-4 py-2 text-sm hover:bg-cream-50/20 hover:-translate-y-0.5 transition-all duration-300 focus-ring"
              >
                <svg className="h-4 w-4 shrink-0 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                bikashtalukder040@gmail.com
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4">
            <div className="font-display text-lg mb-4 text-gold-400">Explore</div>
            <ul className="grid grid-cols-2 gap-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-cream-100/80 hover:text-gold-400 hover:translate-x-1 inline-block transition-all duration-300">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / mantra */}
          <div className="md:col-span-3">
            <div className="font-display text-lg mb-4 text-gold-400">Join the Sanga</div>
            <p className="text-sm text-cream-100/80 mb-4">
              Stay connected with programs, festivals, and alumni gatherings.
            </p>
            <Link
              href="/courses#register"
              className="inline-flex w-full justify-center rounded-full bg-mantra-gradient px-4 py-2.5 text-sm font-semibold text-cream-50 shadow-glow hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300"
            >
              Register for a Course
            </Link>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-cream-100/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cream-100/60">
          <div>
            © {new Date().getFullYear()} Bhaktisiddhanta Voice. Estd. 2009. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Conducted by ISKCON Youth Forum, Sylhet</span>
            <span className="hidden md:inline opacity-50">·</span>
            <span>
              Developed by{" "}
              <a
                href="https://github.com/bikash-20"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 hover:text-gold-300 hover:underline transition-all duration-300"
              >
                Bikash Talukder
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 grid place-items-center h-12 w-12 rounded-full bg-mantra-gradient text-cream-50 shadow-glow hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/></svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
