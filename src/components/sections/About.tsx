"use client";

import Image from "next/image";
import RevealOnScroll from "../ui/RevealOnScroll";
import AnimatedCounter from "../ui/AnimatedCounter";
import { yearsOfExperience } from "@/data/utils";
import SocialIcon from "../ui/SocialIcon";
import SectionHeading from "../ui/SectionHeading";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="About" id="about-heading" />

        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row gap-8 mb-10 items-start">
            <div className="shrink-0 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-border-subtle ring-4 ring-accent-primary/10 shadow-[0_0_40px_rgba(99,102,241,0.12)]">
              <Image
                src="/von.jpg"
                alt="Von Pasion"
                width={176}
                height={176}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="space-y-3 pt-1">
              <div>
                <p className="text-xl font-bold text-text-heading">Von Pasion</p>
                <p className="text-sm text-accent-primary">Solutions Architect &middot; Tech Consultant &middot; Builder</p>
                <p className="text-xs text-text-secondary mt-1">Makati, Philippines</p>
              </div>
              <div className="flex gap-3">
                <SocialIcon
                  platform="linkedin"
                  url="https://www.linkedin.com/in/von-pasion/"
                  label="Connect on LinkedIn"
                  size="sm"
                />
                <SocialIcon
                  platform="github"
                  url="https://github.com/iamvonpasion"
                  label="View GitHub profile"
                  size="sm"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="space-y-6">
          <RevealOnScroll>
            <p className="text-lg text-text-primary leading-relaxed">
              Started as an engineer. Evolved into architecture, system design, and
              leadership. Built and scaled{" "}
              <strong className="text-text-heading">ERP platforms used by large enterprises</strong> worldwide.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="text-text-secondary leading-relaxed">
              Today I focus on enterprise architecture and AI-powered development
              — agentic workflows, automated pipelines, systems that think.
              I mentor engineers, solve business problems, and drive product
              decisions. Clarity beats cleverness. Always.
            </p>
          </RevealOnScroll>

        </div>

        <div className="grid grid-cols-2 gap-4 mt-12 max-w-xs">
          <AnimatedCounter value={yearsOfExperience()} suffix="+" label="Years Experience" />
          <AnimatedCounter value={50} suffix="+" label="Projects Shipped" />
        </div>
      </div>
    </section>
  );
}
