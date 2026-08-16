"use client";

import { motion } from "framer-motion";

/**
 * Reveal — animates children into view as they enter the viewport.
 *
 * Props:
 *   delay:   seconds to delay
 *   y:       initial Y offset (default 24)
 *   x:       initial X offset (overrides y)
 *   scale:   initial scale (default 1)
 *   duration: animation duration in seconds
 *   once:    animate only once (default true)
 *   className: extra classes
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  scale = 1,
  duration = 0.7,
  once = true,
  className = "",
}) {
  const initial = x !== 0 ? { opacity: 0, x } : { opacity: 0, y };
  if (scale !== 1) initial.scale = scale;

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
