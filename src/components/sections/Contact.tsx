"use client";

import { motion } from "framer-motion";
import SocialIcon from "../ui/SocialIcon";
import { socialLinks } from "@/data/social";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          id="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-text-heading tracking-tight mb-4"
        >
          Let&apos;s build something.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-secondary mb-8 max-w-md"
        >
          Got a project, need a consultant, or just want to talk architecture? Reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="mailto:voncarlo.pasion@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent-primary text-white text-sm font-medium hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Email me
          </a>

          {socialLinks.map((link) => (
            <SocialIcon
              key={link.platform}
              platform={link.icon}
              url={link.url}
              label={link.label}
              size="sm"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
