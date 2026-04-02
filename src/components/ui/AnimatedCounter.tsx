"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  label: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  label,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return (
    <div
      ref={ref}
      className="text-center p-6 rounded-2xl bg-bg-surface border border-border-subtle"
    >
      <div className="text-3xl md:text-4xl font-bold text-text-heading mb-1">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </div>
      <div className="text-sm text-text-secondary">{label}</div>
    </div>
  );
}
