"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/temple", label: "Temple" },
  { href: "/programs", label: "Programs" },
  { href: "/courses", label: "Courses" },
  { href: "/alumni", label: "Alumni" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-soft border-b border-gold-200/40"
            : "bg-cream-50/80 border-b border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-16 md:h-20 items-center justify-between">
            {/* Logo / wordmark */}
            <Link href="/" className="group flex items-center gap-3 focus-ring">
              <span className="grid place-items-center h-11 w-11 sm:h-14 sm:w-14 rounded-full bg-cream-50 ring-1 ring-gold-300 shadow-soft transition-all duration-500 group-hover:scale-105 group-hover:ring-gold-500 group-hover:shadow-glow overflow-hidden">
                <Logo className="h-10 w-10 sm:h-12 sm:w-12 transition-transform duration-500 group-hover:rotate-3" />
              </span>
              <div className="leading-tight">
                <div className="font-display text-[1.05rem] sm:text-[1.2rem] font-semibold text-royal-950 transition-colors duration-300 group-hover:text-maroon-700">
                  Bhaktisiddhanta Voice
                </div>
                <div className="text-[0.65rem] sm:text-[0.72rem] tracking-widest uppercase text-maroon-700">
                  ISKCON Youth Forum · Sylhet
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV.map((item) => {
                const active =
                  item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 text-sm font-medium tracking-wide rounded-full transition-all duration-300 tap ${
                      active
                        ? "text-maroon-700"
                        : "text-royal-900 hover:text-maroon-600 hover:bg-maroon-50/60"
                    }`}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-mantra-gradient"
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/courses#register"
                className="pill-button pill-button-primary ml-3"
              >
                <span>Join</span>
                <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 011.04-1.08l4.25 4.25a.75.75 0 010 1.08l-4.25 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/></svg>
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden p-2 rounded-full hover:bg-maroon-50 focus-ring"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <svg className="h-6 w-6 text-royal-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden glass border-t border-gold-200/40"
            >
              <div className="px-5 py-4 space-y-1">
                {NAV.map((item, i) => {
                  const active =
                    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className={`block rounded-lg px-3 py-2.5 text-base font-medium transition-all duration-200 active:scale-[0.98] ${
                          active
                            ? "bg-maroon-50 text-maroon-700"
                            : "text-royal-900 hover:bg-maroon-50/60 hover:translate-x-1"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV.length * 0.04 + 0.05, duration: 0.3 }}
                >
                  <Link
                    href="/courses#register"
                    className="mt-2 block text-center rounded-full bg-mantra-gradient px-4 py-3 font-semibold text-cream-50 shadow-glow hover:shadow-soft transition-all duration-300 active:scale-[0.98]"
                  >
                    Join a Course
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
