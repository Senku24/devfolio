export const METADATA = {
  author: "Nixon Paul",
  title: "Nixon Paul — Software Engineer",
  description:
    "Nixon Paul is a Software Engineer and Full-Stack Developer in Gurugram, building SaaS products, modern web systems, and practical AI tools.",
  // Absolute primary origin used for canonical, Open Graph, sitemap and AEO.
  // Override at build time with NEXT_PUBLIC_SITE_URL if the final domain differs.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://nixonpaul.dev",
  // TODO(owner): X/Twitter handle, without @, or leave empty
  twitterHandle: "",
  keywords: [
    "Nixon Paul",
    "Software Engineer",
    "Full-Stack Developer",
    "AI Builder",
    "SaaS",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Gurugram",
  ].join(", "),
  image: "/preview.png",
  language: "English",
  themeColor: "#0a0a0a",
};

export const PROFILE = {
  name: "Nixon Paul",
  title: "Software Engineer",
  subtitle: "Full-Stack Developer · AI Builder · SaaS",
  location: "Gurugram, India",
  tagline:
    "Building full-stack products, AI-powered tools, and SaaS systems that people actually use.",
  github: "https://github.com/Senku24",
  linkedin: "https://www.linkedin.com/in/nixonpaul24/",
  // Replace public/resume.pdf with the final PDF when it is ready.
  resume: "/resume.pdf",
  email: "nixonpaul.dev@gmail.com",
};

// Keep this order in sync with the scroll order of sections in pages/index.js
export const MENULINKS = [
  { name: "Home", ref: "home" },
  { name: "About", ref: "about" },
  { name: "Skills", ref: "skills" },
  { name: "Projects", ref: "projects" },
  { name: "Experience", ref: "experience" },
  { name: "Contact", ref: "contact" },
];

export const TYPED_STRINGS = [
  "Software Engineer",
  "Full-Stack Developer · AI Builder",
  "I build products people actually use",
];

export const SOCIAL_LINKS = [
  { name: "github", url: PROFILE.github },
  { name: "linkedin", url: PROFILE.linkedin },
];

export const ABOUT = {
  who: "I like building things people actually enjoy using. I’m a software engineer who is happiest when an idea becomes a working product — a web app, a real-time system, or a small AI tool that removes friction.",
  build:
    "I work across the stack: interfaces, APIs, data, and deployment. Most of what I ship sits somewhere between SaaS products, developer tools, and automation.",
  explore:
    "Lately I’m exploring AI-powered applications, agentic workflows, and how AR/VR changes interaction. I’m not collecting buzzwords — I’m testing what actually holds up when you ship it.",
  work: "I prefer owning the path from architecture to implementation to the next iteration. Curiosity is the habit. Shipping is the proof.",
};

export const FAQS = [
  {
    question: "Who is Nixon Paul?",
    answer:
      "Nixon Paul is a Software Engineer and Full-Stack Developer based in Gurugram, India. He builds SaaS products, modern web systems and practical AI tools.",
  },
  {
    question: "What kind of work does Nixon do?",
    answer:
      "He works across the stack — interfaces, APIs, data and deployment — with a focus on full-stack products, AI-powered tools and real-time systems.",
  },
  {
    question: "What technologies does Nixon use?",
    answer:
      "His toolkit includes React, Next.js, TypeScript, JavaScript, Node.js, Express, PostgreSQL, MongoDB, Prisma, Python, spaCy and RAG, alongside Git, Docker, GitHub Actions and Vercel.",
  },
  {
    question: "Is Nixon Paul available for roles or collaborations?",
    answer:
      "Yes. He is open to engineering roles and collaborations. The fastest way to reach him is nixonpaul.dev@gmail.com, or connect with him on LinkedIn.",
  },
  {
    question: "Where can I see Nixon's projects?",
    answer:
      "The Projects section covers CodexIQ, GreenWallet AI, ShelfLife, Resume Analyzer and CEX API, with source links for each project on GitHub.",
  },
];

// TODO(owner): replace the descriptions below with 2–3 outcome bullets that
// include numbers, and confirm the dates/education/certification details.
export const EXPERIENCE = [
  {
    company: "Virtusa",
    title: "Software Engineer Intern",
    dates: "Aug 2025 – Jun 2026",
    duration: "11 months",
    location: "Remote",
    logo: "/images/company/virtusa.jpg",
    description:
      "Built and supported features for enterprise web applications in a structured engineering environment. Worked across frontend and backend workflows, tightening implementation quality and delivery.",
    skills: ["JavaScript", "Full-Stack Development"],
  },
  {
    company: "Cluster Protocol",
    title: "Frontend Developer",
    dates: "Jan 2026 – Apr 2026",
    duration: "4 months",
    location: "Noida, India · Hybrid",
    logo: "/images/company/cluster-protocol.png",
    description:
      "Developed responsive, component-driven interfaces with React. Built reusable UI, integrated REST APIs, and focused on performance and maintainable frontend architecture.",
    skills: ["React", "JavaScript", "REST APIs", "Frontend Engineering"],
  },
];

export const EDUCATION = {
  school: "Vellore Institute of Technology",
  short: "VIT",
  degree: "Master of Technology — Computer Science",
  dates: "Aug 2021 – Oct 2026",
  logo: "/images/company/vit.jpg",
  note: "Computer Science · full-stack systems, AI applications, product engineering",
};

export const CERTIFICATION = {
  name: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
  issuer: "Microsoft",
  issued: "Aug 2024",
  logo: "/brands/microsoft.svg",
};

// Kept deliberately short: a defensible shortlist, not a buzzword wall.
// TODO(owner): confirm or swap any of these for the final shortlist.
export const SKILLS = {
  Frontend: [
    { name: "React", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
  ],
  Backend: [
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "REST APIs", icon: "rest" },
    { name: "Java", icon: "java" },
  ],
  "Databases & Data": [
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "Prisma", icon: "prisma" },
  ],
  "AI / ML": [
    { name: "Python", icon: "python" },
    { name: "spaCy", icon: "spacy" },
    { name: "RAG", icon: "rag" },
  ],
  "AI Tools": [
    { name: "Claude Code", icon: "claude" },
    { name: "Cursor", icon: "cursor" },
  ],
  "Real-time": [
    { name: "WebSockets", icon: "websockets" },
    { name: "WebRTC", icon: "webrtc" },
    { name: "Pub/Sub", icon: "pubsub" },
  ],
  "DevOps / Infra": [
    { name: "Git", icon: "git" },
    { name: "Docker", icon: "docker" },
    { name: "GitHub Actions", icon: "githubactions" },
    { name: "Vercel", icon: "vercel" },
  ],
};

export const EXPLORING = [
  "RAG",
  "AI Agents",
  "Multimodal Agents",
  "LLM Observability",
  "Evaluations",
];

// outcome/role are shown on the card when present; `live` renders a Live link
// only when a deployment exists. TODO(owner): add outcome, role and live URLs.
export const PROJECTS = [
  {
    name: "CodexIQ",
    imageKey: "codexiq",
    outcome: "Understand any codebase in minutes, not weeks.",
    role: "",
    gradient: ["#0F172A", "#1E293B"],
    repo: "https://github.com/Senku24/codexIQ",
    live: "",
    tech: ["typescript", "react", "nextjs", "postgresql", "prisma"],
  },
  {
    name: "GreenWallet AI",
    imageKey: "greenwallet",
    outcome: "AI-powered finance that actually changes habits.",
    role: "",
    gradient: ["#14532D", "#166534"],
    repo: "https://github.com/Senku24/greenWallet",
    live: "",
    tech: ["python", "react", "typescript", "tailwindcss"],
  },
  {
    name: "ShelfLife",
    imageKey: "shelflife",
    outcome: "Household inventory that stops food from going to waste.",
    role: "",
    gradient: ["#1E3A5F", "#0F172A"],
    repo: "https://github.com/Senku24/shelf-life-inventory-tracker",
    live: "",
    tech: ["javascript", "react", "nodejs", "mongodb"],
  },
  {
    name: "Resume Analyzer",
    imageKey: "resume-analyzer",
    outcome: "NLP scoring for resume–job fit without a black box.",
    role: "",
    gradient: ["#3F1D2E", "#1F2937"],
    repo: "https://github.com/Senku24/NLP-based-Resume-Analyzer",
    live: "",
    tech: ["python"],
  },
  {
    name: "CEX API",
    imageKey: "cex",
    outcome: "Typed auth and persistence for trading-account workflows.",
    role: "",
    gradient: ["#111827", "#1F2937"],
    repo: "https://github.com/Senku24/cex",
    live: "",
    tech: ["nodejs", "express", "prisma", "postgresql"],
  },
];
