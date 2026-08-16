"use client";

import Link from "next/link";
import { motion } from "framer-motion";
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
  return (
    <footer className="relative mt-24 bg-royal-950 text-cream-100 overflow-hidden">
      {/* Decorative gradient bar */}
      <div className="h-1 w-full bg-mantra-gradient" />

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
            <div className="flex items-center gap-3">
              <div className="grid place-items-center h-14 w-14 rounded-full bg-cream-50 ring-1 ring-gold-400/40 overflow-hidden">
                <Logo className="h-12 w-12" />
              </div>
              <div>
                <div className="font-display text-2xl font-semibold">Bhaktisiddhanta Voice</div>
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
                className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-4 py-2 text-sm hover:bg-cream-50/20 transition focus-ring"
              >
                <svg className="h-4 w-4 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.81a2 2 0 01-.45 1.84L8.09 10.91a16 16 0 006 6l1.74-1.39a2 2 0 011.84-.45l2.81.7A2 2 0 0121 17.71V20a2 2 0 01-2 2A18 18 0 013 4z"/></svg>
                +880 1993-210511
              </a>
              <a
                href="https://wa.me/8801993210511"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500/90 px-4 py-2 text-sm font-semibold text-cream-50 hover:bg-emerald-500 transition focus-ring"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.34 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.683 5.51l-.999 3.648 3.805-.857z"/></svg>
                WhatsApp
              </a>
              <a
                href="mailto:contact@bhaktisiddhantavoice.org"
                className="inline-flex items-center gap-2 rounded-full bg-cream-50/10 px-4 py-2 text-sm hover:bg-cream-50/20 transition focus-ring"
              >
                <svg className="h-4 w-4 text-gold-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                Email
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4">
            <div className="font-display text-lg mb-4 text-gold-400">Explore</div>
            <ul className="grid grid-cols-2 gap-y-2.5 text-sm">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-cream-100/80 hover:text-gold-400 transition">
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
              className="inline-flex w-full justify-center rounded-full bg-mantra-gradient px-4 py-2.5 text-sm font-semibold text-cream-50 shadow-glow hover:shadow-soft transition-all"
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
                className="text-gold-400 hover:text-gold-300 transition"
              >
                Bikash Talukder
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
