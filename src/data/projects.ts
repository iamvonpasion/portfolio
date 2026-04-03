import { Project } from "./types";

export const projects: Project[] = [
  {
    id: "irely-erp",
    title: "iRely ERP Platform",
    subtitle: "Unified Commodity & Enterprise Software",
    description:
      "Single-platform ERP for commodity trading, agriculture, petroleum, and retail. 500+ clients across 25+ countries. One system from front desk to back office.",
    challenge:
      "Commodity-driven industries ran on fragmented systems — trading, risk, accounting, and supply chain all disconnected. Needed one platform that handles it all without bolting modules together.",
    keyDecisions: [
      "Single unified platform — not stitched-together modules",
      "Deep vertical specialization over generic ERP features",
      "Integrated risk management, financials, and supply chain in one data model",
      "SSO via Microsoft Entra ID and other identity providers",
    ],
    impact: "500+ clients. 25+ countries. 35+ years of continuous platform evolution.",
    tags: ["C#", "TypeScript", "SQL Server", "Azure", "Sencha", "Angular", "React", "PostgreSQL", "Ionic", "React Native"],
  },
  {
    id: "app-framework",
    title: "Application Framework",
    subtitle: "The Foundation Everything Runs On",
    description:
      "Server-side and front-end architecture that every module builds on. Reusable grid, data manager, pluggable components — audit log, attachments, activities, approvals. Build once, use everywhere.",
    challenge:
      "Teams were rebuilding the same patterns in every module. Grids, CRUD, filtering, audit trails — all from scratch, every time.",
    keyDecisions: [
      "Framework-first — teams ship features, not plumbing",
      "Data manager abstracts ERP-level CRUD complexity",
      "Pluggable components: audit, attachments, activities, approvals — snap into any screen",
    ],
    impact: "Set the standards. Trained the developers. Every team ships faster because of this foundation.",
    tags: ["C#", "TypeScript", "React", "Angular", "Sencha"],
  },
  {
    id: "multi-company",
    title: "Multi-Company Architecture",
    subtitle: "One Database. Many Companies. Zero Rewrite.",
    description:
      "Designed multi-company support on a single database with Master Data Management — global and company-specific fields, shared entities across companies. 11M-line codebase. Tight deadline. Shipped.",
    challenge:
      "40+ companies. One database. Shared master data. 11M lines of code — and rewriting wasn't an option.",
    keyDecisions: [
      "Role-level security for data isolation — rock solid, zero filters scattered across 11M lines of code",
      "MDM with dual-layer fields: global (name, address) and company-specific (credit limit) within existing schema",
      "Event-driven sync — one update reaches all companies instantly, no manual propagation",
    ],
    impact: "40+ companies, single database, bulletproof isolation. Shipped on deadline.",
    tags: ["C#", "SQL Server", "Security"],
  },
  {
    id: "intelligent-doc-processing",
    title: "AI Document Processing",
    subtitle: "Documents In. Transactions Out. AI-Powered.",
    description:
      "Led the project to automate document intake using Azure AI Document Intelligence. Trained models to read documents, extract fields, map them into the system, and create transactions like vouchers — automatically.",
    challenge:
      "Manual data entry from documents into the ERP. Slow, error-prone, and didn't scale. Every document meant someone typing fields by hand.",
    keyDecisions: [
      "Azure AI Document Intelligence trained on real business documents",
      "Field mapping engine to translate extracted data into ERP transactions",
      "End-to-end automation — document goes in, transaction comes out",
    ],
    impact: "Zero manual entry. Documents in, transactions out. Automated end to end.",
    tags: ["C#"],
  },
  {
    id: "claude-workflow-plugin",
    title: "Dev Workflow for Claude Code",
    subtitle: "Spec → Eng → Review → Ship.",
    subtitleDesktop: "Spec → Design → Eng → Review → QA → Ship → Retro.",
    description:
      "Open-source plugin that turns Claude Code into a structured dev workflow. 13 skills, auto-activating rules, recipe chains. One command to spec, design, build, review, and ship.",
    challenge:
      "Claude Code is powerful but unstructured. No guardrails, no process, no repeatable quality gates between idea and production.",
    keyDecisions: [
      "Structured phases — spec, build, review, ship",
      "AI with guardrails — Claude writes code, the workflow enforces quality",
      "Ship fast, stay confident — structure handles the rest",
    ],
    impact: "Idea to production in one workflow. Already in use.",
    tags: ["Claude Code", "Skills", "Markdown"],
  },
  {
    id: "cloud-infra",
    title: "Cloud Infrastructure",
    subtitle: "Read Replicas. Load Balancing. Scale.",
    description:
      "Architected the cloud infrastructure for the iRely platform — read replicas for offloading reads and reporting, load balancing via SQL Server and Azure VMSS, and CDN. Built to scale and stay up.",
    challenge:
      "One database doing everything — transactions, reporting, caching. No separation, no failover. Scaling meant bigger hardware, not better architecture.",
    keyDecisions: [
      "Read replicas — offload reporting and reads, keep the primary database focused",
      "Load balancing — horizontal scale that grows with demand",
      "Caching at every layer — fewer round trips, faster responses",
    ],
    impact: "Production stays fast under load. Reporting runs without impact. Scales out, not up.",
    tags: ["Azure", "SQL Server", "Cache"],
  },
  {
    id: "liquibase-workflow",
    title: "Schema Migration at Scale",
    subtitle: "12K+ Objects. Seconds, Not Hours.",
    subtitleDesktop: "12K+ Database Objects. Seconds, Not Hours.",
    description:
      "Architected a custom Liquibase workflow for a massive schema — 4K+ tables, 3K+ views, 4K+ stored procedures, 1K+ functions. Migrations that took 4 hours now run in seconds to minutes.",
    challenge:
      "12K+ database objects. Existing tools broke under the weight. Migrations blocked the entire org for hours.",
    keyDecisions: [
      "Custom migration workflow — built for massive schemas from the ground up",
      "Incremental by default — only what changed gets applied, not the full schema",
      "Runs in seconds — what used to block teams for hours now just happens",
    ],
    impact: "Hours to seconds. Every team unblocked.",
    tags: ["Liquibase", "SQL Server", "PostgreSQL"],
  },
  {
    id: "session-recording",
    title: "Session Recording Tool",
    subtitle: "Full Session Replay. Built In-House.",
    description:
      "Built a session recording and replay platform from scratch — capture every user interaction, replay it frame by frame, pinpoint exactly where things break. Desktop recording via Electron, browser capture via Chrome Extension. Shipped with Claude Code.",
    challenge:
      "Users hit issues no one could replicate. Without seeing the actual session, every bug report was a guessing game.",
    keyDecisions: [
      "Everything support needs in one place — session, console, network, no context switching",
      "Full session replay — every click, every state change, frame by frame",
      "Console logs, network requests, and DOM snapshots captured alongside the session",
    ],
    impact: "Replay the session, find the bug. Case closed.",
    tags: ["TypeScript", "React", "Electron", "C#"],
  },
  {
    id: "deployment-platform",
    title: "Internal Deployment Tool",
    subtitle: "Every Deploy. Tracked. Auditable. Repeatable.",
    description:
      "Spearheaded an internal deployment tool that pushes build versions to customer servers — with logging, progress tracking, history, audit trail, role management, change tracking per build, comparison, and grouping.",
    challenge:
      "Deployments were manual, inconsistent, and untracked. No visibility into what shipped where, when, or by whom.",
    keyDecisions: [
      "Full audit trail and role management — not a script, a product",
      "Per-build change tracking and comparison for accountability",
      "Designed for our specific multi-tenant deployment workflow",
    ],
    impact: "Every deployment tracked, auditable, and repeatable. No more blind deploys.",
    tags: ["C#", "TypeScript", "Angular", "Liquibase", "SignalR"],
  },
];
