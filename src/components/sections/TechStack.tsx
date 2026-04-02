"use client";

import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const stack = {
  Languages: ["C#", "TypeScript", "Python", "SQL"],
  "Backend & Frontend": ["ASP.NET Web API", "React", "Angular", "Next.js", "Sencha", "SignalR"],
  Mobile: ["React Native", "Ionic"],
  "Cloud & Infra": ["Azure", "Azure VMSS", "Azure Service Bus", "Microsoft Entra ID", "Docker", "Kubernetes", "PostgreSQL", "SQL Server", "CDN", "Load Balancing", "Read Replicas"],
  "Data & Schema": ["Liquibase", "SSDT"],
  "AI & Tooling": ["Claude Code", "Cursor", "MCP Servers", "Claude Skills", "Azure AI Document Intelligence", "OpenAI API", "LiteLLM", "LangChain", "Hugging Face", "Groq", "OpenRouter", "Gradio"],
  "Observability & Analytics": ["Power BI", "Grafana", "SigNoz", "LogRocket", "OpenTelemetry"],
  Testing: ["Unit Testing", "Integration Testing", "Playwright"],
  "Tools & Collaboration": ["Git", "JIRA", "Confluence", "Bitbucket", "Electron", "Chrome Extensions"],
  "DevOps & CI/CD": ["GitHub Actions", "Azure DevOps", "CI/CD Pipelines"],
  Architecture: [
    "Pragmatic Architecture",
    "Simplicity-First Design",
  ],
};

export default function TechStack() {
  return (
    <section
      id="stack"
      aria-labelledby="stack-heading"
      className="py-10 md:py-24 px-6"
    >
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Stack" id="stack-heading" />

        <div className="space-y-8">
          {Object.entries(stack).map(([category, items], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, ease: "easeOut" as const, delay: catIndex * 0.03 }}
            >
              <h3 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="px-3.5 py-1.5 text-sm font-medium text-text-primary bg-bg-surface border border-border-subtle rounded-lg hover:border-accent-primary/40 hover:text-text-heading hover:shadow-[0_0_16px_rgba(99,102,241,0.12)] transition-all duration-200 cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
