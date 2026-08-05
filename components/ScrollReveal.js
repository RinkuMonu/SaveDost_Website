"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  amount = 0.2,
}) {
  const reduceMotion = useReducedMotion();
  const offset =
    direction === "left"
      ? { x: -28, y: 0 }
      : direction === "right"
        ? { x: 28, y: 0 }
        : { x: 0, y: 24 };

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
