"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { timeline } from "@/data/timeline";

export default function Timeline() {
  return (
    <section
      id="timeline"
      aria-labelledby="timeline-heading"
      className="py-10 md:py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Journey" id="timeline-heading" />

        <div className="relative pl-8 border-l border-border-subtle">
          {timeline.map((entry, i) => (
            <motion.div
              key={entry.year}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative pb-10 last:pb-0"
            >
              {/* Dot */}
              <div className="absolute -left-[calc(2rem+5px)] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-primary shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

              <div className="group">
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-xs font-mono text-accent-cyan">
                    {entry.year}
                  </span>
                  <h3 className="text-base font-semibold text-text-heading">
                    {entry.role}
                  </h3>
                  <span className="text-xs text-text-secondary hidden sm:inline">
                    {entry.company}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
