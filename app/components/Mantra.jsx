"use client";

import { motion } from "framer-motion";

export default function Mantra({ className = "" }) {
  const lines = [
    "हरे कृष्ण हरे कृष्ण",
    "कृष्ण कृष्ण हरे हरे",
    "हरे राम हरे राम",
    "राम राम हरे हरे",
  ];
  return (
    <div className={`relative text-center ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="font-mantra tracking-wide leading-snug"
      >
        {lines.map((l, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="mantra-text block text-2xl sm:text-4xl md:text-5xl mt-1 hover:scale-[1.02] transition-transform duration-500 cursor-default"
          >
            {l}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
}
