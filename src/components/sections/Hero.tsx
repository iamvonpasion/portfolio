"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { yearsOfExperience } from "@/data/utils";

function ParticleField() {
  const prefersReducedMotion = useReducedMotion();
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number; size: number; duration: number }[]
  >([]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    setParticles(
      Array.from({ length: 40 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: Math.random() * 20 + 10,
      }))
    );
  }, [prefersReducedMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.08),transparent_50%)]" />
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent-primary/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.15, 0.5, 0.15] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleField />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-accent-cyan font-mono text-sm mb-6 tracking-wider"
        >
          Solutions Architect &middot; Tech Consultant
        </motion.p>

        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-heading tracking-tighter leading-[1.1] mb-6"
        >
          I&apos;m Von Pasion.
          <br />
          <span className="text-text-secondary">I turn complexity</span>
          <br />
          <span className="text-text-secondary">into working systems.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-base md:text-lg text-text-secondary max-w-lg mb-10 leading-relaxed"
        >
          I architect systems, solve hard problems, and ship with AI.
          {" "}{yearsOfExperience()}+ years of solving complex business problems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-accent-primary text-white text-sm font-medium hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-border-subtle text-text-primary text-sm hover:border-accent-primary/50 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-text-secondary/20 flex justify-center pt-1.5"
        >
          <motion.div className="w-0.5 h-1.5 rounded-full bg-text-secondary/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
