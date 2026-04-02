"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id: string;
}

export default function SectionHeading({
  title,
  subtitle,
  id,
}: SectionHeadingProps) {
  return (
    <div className="mb-6 md:mb-16">
      <motion.h2
        id={id}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold text-text-heading tracking-tight"
      >
        {title}
        <motion.span
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="block h-1 w-16 mt-3 bg-gradient-to-r from-accent-primary to-accent-cyan origin-left rounded-full"
        />
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-text-secondary text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
