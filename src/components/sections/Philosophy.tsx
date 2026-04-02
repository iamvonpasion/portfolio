"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { principles } from "@/data/principles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      aria-labelledby="philosophy-heading"
      className="py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Principles" id="philosophy-heading" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {principles.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              className="group flex gap-5 p-5 rounded-xl bg-bg-surface border border-border-subtle hover:border-accent-primary/30 transition-all duration-300"
            >
              <span className="text-sm font-mono text-accent-primary/60 pt-0.5 shrink-0">
                {p.icon}
              </span>
              <div>
                <h3 className="text-base font-semibold text-text-heading mb-1 group-hover:text-accent-glow transition-colors duration-200">
                  {p.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
