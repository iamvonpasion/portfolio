"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import SectionHeading from "../ui/SectionHeading";
import { projects } from "@/data/projects";
import { Project } from "@/data/types";

function ProjectRow({
  project,
  onClick,
  index,
}: {
  project: Project;
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onClick={onClick}
      className="group text-left w-full p-5 rounded-xl bg-bg-surface border border-border-subtle hover:border-accent-primary/40 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] transition-all duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-text-heading group-hover:text-accent-glow transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-text-secondary mt-0.5">
            {project.subtitle}
          </p>
        </div>
        <svg
          className="w-4 h-4 text-text-secondary group-hover:text-accent-primary group-hover:translate-x-1 transition-all shrink-0 mt-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      <div className="flex flex-wrap gap-1.5 mt-3">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs font-mono text-accent-cyan bg-accent-cyan/10 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.button>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-bg-surface border border-border-subtle p-6 md:p-8"
      >
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-text-secondary hover:text-text-heading hover:bg-bg-surface-hover transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 id="modal-title" className="text-2xl font-bold text-text-heading mb-1">
          {project.title}
        </h2>
        <p className="text-accent-primary mb-6">{project.subtitle}</p>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-text-heading uppercase tracking-wider mb-2">
              The Challenge
            </h3>
            <p className="text-text-secondary leading-relaxed">{project.challenge}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-heading uppercase tracking-wider mb-2">
              Key Decisions
            </h3>
            <ul className="space-y-2">
              {project.keyDecisions.map((d, i) => (
                <li key={i} className="flex gap-3 text-text-secondary">
                  <span className="text-accent-primary mt-1 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-heading uppercase tracking-wider mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-sm font-mono text-accent-cyan bg-accent-cyan/10 rounded-full border border-accent-cyan/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-heading uppercase tracking-wider mb-2">
              Impact
            </h3>
            <p className="text-accent-emerald font-medium">{project.impact}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-10 md:py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Work" id="projects-heading" />

        <div className="space-y-3">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
