"use client";

import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

/**
 * WordReveal — premium headline entrance.
 * Each line is wrapped in an overflow-hidden mask and its words rise in
 * one by one. Pass lines as [{ text, gradient? }]; gradient words get the
 * animated gold shimmer (see .shimmer-gold in globals.css).
 */
export default function WordReveal({
  as: Tag = "h2",
  lines,
  className = "",
  delay = 0,
  stagger = 0.045,
  wordClassName = "",
}) {
  return (
    <Tag className={className}>
      {lines.map((line, li) => {
        const words = line.text.split(" ");
        return (
          <span
            key={li}
            className="block overflow-hidden py-[0.08em] -my-[0.08em]"
          >
            {words.map((word, wi) => (
              <motion.span
                key={wi}
                initial={{ y: "115%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 0.7,
                  ease: EASE,
                  delay: delay + (li * words.length + wi) * stagger,
                }}
                className={`inline-block will-change-transform ${
                  line.gradient ? `shimmer-gold ${wordClassName}` : wordClassName
                }`}
              >
                {word}
                {wi < words.length - 1 ? "\u00A0" : ""}
              </motion.span>
            ))}
          </span>
        );
      })}
    </Tag>
  );
}
