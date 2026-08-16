"use client";

import { motion } from "framer-motion";

export default function Mantra({ className = "" }) {
  return (
    <div className={`relative text-center ${className}`}>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.0 }}
        className="font-mantra tracking-wide leading-snug"
      >
        <span className="mantra-text block text-2xl sm:text-4xl md:text-5xl">
          हरे कृष्ण हरे कृष्ण
        </span>
        <span className="mantra-text block text-2xl sm:text-4xl md:text-5xl mt-1">
          कृष्ण कृष्ण हरे हरे
        </span>
        <span className="mantra-text block text-2xl sm:text-4xl md:text-5xl mt-1">
          हरे राम हरे राम
        </span>
        <span className="mantra-text block text-2xl sm:text-4xl md:text-5xl mt-1">
          राम राम हरे हरे
        </span>
      </motion.h2>
    </div>
  );
}
