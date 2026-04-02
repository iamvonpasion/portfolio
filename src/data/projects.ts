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
      "40+ companies needed to run on a single database with shared master data. 11M lines of code. No rewrite on the table. Deadline was real.",
    keyDecisions: [
      "Role-level security for data isolation — rock solid, zero filters scattered across 11M lines of code",
      "MDM with dual-layer fields: global (name, address) and company-specific (credit limit) within existing schema",
      "Pragmatic architecture — delivered within current constraints, not an excuse to rebuild",
    ],
    impact: "40+ companies, single database, bulletproof isolation. Shipped on deadline.",
    tags: ["C#", "SQL Server", "Azure Service Bus", "Architecture", "Security"],
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
      "End-to-end automation — document in, voucher out, no manual step",
    ],
    impact: "Zero manual entry. Documents in, transactions out. Automated end to end.",
    tags: ["Azure AI Document Intelligence", "AI", "C#"],
  },
  {
    id: "claude-workflow-plugin",
    title: "Dev Workflow Plugin for Claude Code",
    subtitle: "Spec → Design → Eng → Review → Ship.",
    description:
      "Open-source plugin that turns Claude Code into a structured dev workflow. 13 skills, auto-activating rules, recipe chains. One command to spec, design, build, review, and ship.",
    challenge:
      "Claude Code is powerful but unstructured. No guardrails, no process, no repeatable quality gates between idea and production.",
    keyDecisions: [
      "One skill per phase — clear boundaries, no overlap",
      "Zero-config rules that activate by file path",
      "Composable recipe chains: feature, bugfix, release, swarm",
    ],
    impact: "Idea to production in one workflow. Open source. Already in use.",
    tags: ["Claude Code", "Claude Skills", "MCP Servers", "TypeScript", "Open Source"],
  },
  {
    id: "cloud-infra",
    title: "Cloud Infrastructure",
    subtitle: "Read Replicas. Load Balancing. Scale.",
    description:
      "Architected the cloud infrastructure for the iRely platform — read replicas for offloading reads and reporting, load balancing via SQL Server and Azure VMSS, and CDN. Built to scale and stay up.",
    challenge:
      "Production database handling both transactional workloads and heavy reporting. No failover strategy. Scaling meant throwing more hardware at it.",
    keyDecisions: [
      "Read replicas to reroute read operations and reporting off the primary database",
      "Azure VMSS with SQL Server load balancing for horizontal scale",
      "CDN baked into the architecture from the start",
    ],
    impact: "Reads offloaded. Reporting no longer kills production. Infrastructure that actually scales.",
    tags: ["Azure", "SQL Server", "VMSS", "CDN"],
  },
  {
    id: "session-recording",
    title: "Session Recording Platform",
    subtitle: "Full Session Replay. Built In-House.",
    description:
      "Built a session recording and replay platform from scratch — capture every user interaction, replay it frame by frame, pinpoint exactly where things break. Desktop recording via Electron, browser capture via Chrome Extension. Shipped with Claude Code.",
    challenge:
      "LogRocket, OpenReplay — none of them fit. Needed full control over what gets recorded, how it's stored, and how it integrates with our platform.",
    keyDecisions: [
      "Electron for desktop session capture — full fidelity recording",
      "Chrome Extension for lightweight browser-based capture",
      "End-to-end with Claude Code — AI-assisted development, not just a buzzword",
    ],
    impact: "Support and QA see exactly what the user saw. No more 'can you reproduce that?'",
    tags: ["TypeScript", "React", "Electron", "Chrome Extension", "C#", "Claude Code"],
  },
  {
    id: "liquibase-workflow",
    title: "Schema Migration at Scale",
    subtitle: "4K+ Tables. Seconds, Not Hours.",
    description:
      "Architected a custom Liquibase workflow for a massive schema — 4K+ tables, 3K+ views, 4K+ stored procedures, 1K+ functions. Migrations that took 4 hours now run in seconds to minutes.",
    challenge:
      "SSDT couldn't handle 12K+ database objects. Migrations were a 4-hour bottleneck that blocked every team — IT, devs, QA, product, implementation.",
    keyDecisions: [
      "Custom Liquibase workflow architected for our specific scale and needs",
      "Replaced SSDT which broke under the weight of 12K+ objects",
      "Liquibase certified — did the homework to get it right",
    ],
    impact: "4-hour migrations → seconds to minutes. Unblocked every team across the org.",
    tags: ["Liquibase", "SQL Server", "PostgreSQL", "CI/CD"],
  },
  {
    id: "deployment-platform",
    title: "Internal Deployment Platform",
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
