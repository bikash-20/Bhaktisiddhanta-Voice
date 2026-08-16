"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";

const CATEGORIES = ["All", "Temple", "Deities", "Meals", "Sanga", "Festivals"];

const PHOTOS = [
  { src: "/images/hero.jpg", cat: "Temple", title: "Main temple hall" },
  { src: "/images/jagannath.jpg", cat: "Deities", title: "Sri Sri Jagannath darshan" },
  { src: "/images/section-3.jpg", cat: "Meals", title: "Prasadam distribution" },
  { src: "/images/hero.jpg", cat: "Sanga", title: "Kirtan evening" },
  { src: "/images/jagannath.jpg", cat: "Festivals", title: "Rath Yatra procession" },
  { src: "/images/section-3.jpg", cat: "Sanga", title: "Study circle" },
  { src: "/images/hero.jpg", cat: "Festivals", title: "Janmashtami celebrations" },
  { src: "/images/jagannath.jpg", cat: "Temple", title: "Aarti ceremony" },
  { src: "/images/section-3.jpg", cat: "Sanga", title: "Group at the temple" },
  { src: "/images/hero.jpg", cat: "Meals", title: "Preparing prasadam" },
  { src: "/images/section-2.jpg", cat: "Deities", title: "Sri Sri Radha-Krishna darshan" },
  { src: "/images/section-3.jpg", cat: "Festivals", title: "Festival decoration" },
];

export default function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState(null); // index of photo

  const filtered = cat === "All" ? PHOTOS : PHOTOS.filter((p) => p.cat === cat);
  const photo = (i) => filtered[i];

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from the sanga."
        subtitle="A glimpse into the temple, the celebrations, the prasadam, and the people who make this place feel like home."
      />

      {/* Filter chips */}
      <section className="pt-2 pb-6">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition ring-1 ${
                    cat === c
                      ? "bg-mantra-gradient text-cream-50 ring-gold-500/40 shadow-glow"
                      : "bg-cream-50 text-royal-900 ring-gold-400/20 hover:bg-maroon-50"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 gap-5"
          >
            {filtered.map((p, i) => (
              <motion.button
                key={`${p.src}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => setOpen(i)}
                className="relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-gold-400/20 hover:ring-gold-400/60 transition shadow-soft group focus-ring"
              >
                <div className={`relative w-full ${i % 5 === 0 ? "h-96" : i % 4 === 0 ? "h-72" : "h-56"}`}>
                  <Image
                    src={p.src}
                    alt={p.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-950/85 via-royal-950/0 to-transparent opacity-90" />
                  <div className="absolute bottom-3 left-4 right-4 text-cream-50 text-left">
                    <div className="text-xs uppercase tracking-widest text-gold-300">{p.cat}</div>
                    <div className="font-display text-xl">{p.title}</div>
                  </div>
                  <div className="absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full bg-cream-50/90 text-royal-950 opacity-0 group-hover:opacity-100 transition">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 110-16 8 8 0 010 16z"/></svg>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {open !== null && photo(open) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-royal-950/85 backdrop-blur-md p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full rounded-3xl overflow-hidden ring-1 ring-gold-400/40 shadow-soft bg-royal-950"
            >
              <div className="relative aspect-[4/3]">
                <Image src={photo(open).src} alt={photo(open).title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-cream-50">
                  <div className="text-xs uppercase tracking-widest text-gold-300">{photo(open).cat}</div>
                  <div className="font-display text-2xl md:text-3xl">{photo(open).title}</div>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setOpen((i) => (i - 1 + filtered.length) % filtered.length)}
                  className="grid place-items-center h-10 w-10 rounded-full bg-cream-50/90 text-royal-950 hover:bg-cream-50 transition focus-ring"
                  aria-label="Previous"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.79 5.23a.75.75 0 010 1.06L9.06 10l3.73 3.71a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06.02z" clipRule="evenodd"/></svg>
                </button>
                <button
                  onClick={() => setOpen((i) => (i + 1) % filtered.length)}
                  className="grid place-items-center h-10 w-10 rounded-full bg-cream-50/90 text-royal-950 hover:bg-cream-50 transition focus-ring"
                  aria-label="Next"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 011.04-1.08l4.25 4.25a.75.75 0 010 1.08l-4.25 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"/></svg>
                </button>
                <button
                  onClick={() => setOpen(null)}
                  className="grid place-items-center h-10 w-10 rounded-full bg-cream-50 text-royal-950 hover:bg-cream-100 transition focus-ring"
                  aria-label="Close"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
