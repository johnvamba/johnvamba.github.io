/**
 * All portfolio content lives here, so updating the site is a data edit.
 * Source: "John Vincent A. Amba — Skills & Career Profile" (Oct 2026).
 */

export const profile = {
  name: "John Vincent A. Amba",
  shortName: "John V Amba",
  headline: "Senior Full Stack Web Developer",
  stackLine: "Laravel · ASP.NET Core · React · Vue",
  summary:
    "I build and maintain scalable web apps end to end, from architecture and custom CMS work to performance and SEO. I am comfortable leading projects, mentoring developers and working directly with clients.",
  intro:
    "Senior Full Stack Web Developer with 8+ years across Laravel, ASP.NET Core, React and Vue. Currently an engineer on the Legend care coordination platform.",
  location: "Philippines (PHT, UTC+8)",
  experienceYears: "8+",
  currentRole: "Engineer at Wellgineering",
  workPreference: "Remote, with VPN or private network tunnelling for secure access",
  mainTool: "Claude Code",
  email: "johnvamba@gmail.com",
  phone: "+639066680425",
  linkedin: "https://linkedin.com/in/john-amba",
  github: "https://github.com/johnvamba",
} as const;

export type Metric = { label: string; value: string; note: string };

export const metrics: Metric[] = [
  { label: "Years full stack", value: "8+", note: "Laravel, .NET, React, Vue" },
  { label: "Playwright tests", value: "300+", note: "Regression suite on Legend" },
  { label: "Lighter pages", value: "40%", note: "Legacy → Duda at Sprolo" },
  { label: "Ahrefs SEO score", value: "67→90+", note: "Coggno marketing site" },
];

export type SkillGroup = { category: string; skills: string[]; proof: string };

export const skills: SkillGroup[] = [
  {
    category: "Backend",
    skills: ["PHP (Laravel, Symfony)", "ASP.NET Core", "Node.js", "REST APIs", "OAuth", "API design"],
    proof: "Amrap Music Catalog and Neuma Care APIs, legacy PHP → Laravel migration, Legend",
  },
  {
    category: "Frontend",
    skills: ["JavaScript", "TypeScript", "React", "Vue", "Blazor WebAssembly", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"],
    proof: "Neuma Care SPA, Amrap, Coding Matters UI work, structural analysis calculator",
  },
  {
    category: "CMS",
    skills: ["WordPress (Elementor, Divi, ACF)", "Shopify (Liquid)", "Duda (custom widgets)", "Contentful"],
    proof: "Sprolo, Coggno, Born Digital (Paxanas, Protein Malta)",
  },
  {
    category: "Databases",
    skills: ["MySQL", "PostgreSQL", "Redis", "SQLite"],
    proof: "Laravel projects, Moneycache POS",
  },
  {
    category: "Cloud & hosting",
    skills: ["AWS", "Google Cloud", "MS Azure", "Docker", "Vercel", "Heroku", "Hostinger"],
    proof: "Client deployments across roles",
  },
  {
    category: "Quality assurance",
    skills: ["Playwright", "PHPUnit"],
    proof: "300+ Playwright test cases for Legend",
  },
  {
    category: "DevOps",
    skills: ["Git", "GitHub Actions", "Bitbucket", "Semantic Versioning", "Supervisord"],
    proof: "Team delivery at Logicbase, Jiffi and later roles",
  },
  {
    category: "Integrations",
    skills: ["Stripe", "Zapier", "MailChimp", "Telegram Bot", "Google Search Console"],
    proof: "Neuma Care payments, Sprolo client SEO setup",
  },
  {
    category: "AI tools",
    skills: ["Claude Code", "ChatGPT", "GitHub Copilot", "v0 by Vercel", "Bolt.new"],
    proof: "Daily development; AI-generated SEO metadata at Sprolo",
  },
  {
    category: "Methods",
    skills: ["Agile (Scrum, Lean)", "SOLID", "DRY", "OOP", "Technical documentation"],
    proof: "Team and client projects",
  },
];

export const extraSkills: string[] = [
  "Figma to pixel-perfect code",
  "GA4, Meta and TikTok pixels",
  "React Native",
  "FHIR and HL7 (learning)",
];

export type Role = {
  dates: string;
  title: string;
  company: string;
  highlights: string[];
  current?: boolean;
};

export const experience: Role[] = [
  {
    dates: "Jul 2026 – Oct 2026",
    title: "Current Engineer",
    company: "Wellgineering",
    current: true,
    highlights: [
      "Builds components for Legend, the Crosstx care coordination platform (ASP.NET Core).",
      "Wrote 300+ Playwright regression tests.",
      "Provides technical support for care professionals; HIPAA-trained.",
    ],
  },
  {
    dates: "Feb – Jun 2026",
    title: "Freelance Full Stack & CMS Developer",
    company: "Born Digital",
    highlights: [
      "Rebuilt Paxanas WordPress pages on a new theme.",
      "Migrated Protein Malta from WooCommerce to Shopify in under 2 weeks.",
    ],
  },
  {
    dates: "Sep – Dec 2025",
    title: "WordPress Developer",
    company: "Coggno",
    highlights: [
      "Built Elementor pages for a SaaS training platform.",
      "Raised the Ahrefs SEO score from 67 to 90+ through an on-page SEO audit.",
    ],
  },
  {
    dates: "2024 – 2025",
    title: "CMS Developer",
    company: "Sprolo",
    highlights: [
      "Reusable components for WordPress, Duda and Shopify; AI-generated SEO metadata.",
      "Legacy → Duda migration cut page weight by 40%.",
      "Builds for Riverside Counseling, South Jersey Eye Associates and Austin Hills RV Park.",
    ],
  },
  {
    dates: "2023 – 2024",
    title: "Full Stack Developer",
    company: "Austin Madore",
    highlights: [
      "Commission-based point system with real-time notifications.",
      "Image compression cut upload sizes by 70%.",
    ],
  },
  {
    dates: "2019 – 2023",
    title: "Senior Full Stack Developer",
    company: "Logicbase Interactive",
    highlights: [
      "Delivered 3+ client projects a year, 100% on time.",
      "Built Moneycache POS: multi-location, stock transfer and sales reports.",
      "Mentored two intern cohorts; over half were hired full-time. Several Employee of the Month awards.",
    ],
  },
  {
    dates: "2019 – 2022",
    title: "Full Stack Developer",
    company: "Jiffi Web Help",
    highlights: [
      "Easyamends design proofing platform with multi-role permissions.",
      "Neuma Care SPA: React + Laravel API, React Native companion, Stripe.",
      "Led the Amrap Music Catalog build.",
    ],
  },
  {
    dates: "2018",
    title: "Web Developer",
    company: "Contract",
    highlights: ["Migrated a legacy PHP psychosocial response system to Laravel."],
  },
  {
    dates: "2016 – 2017",
    title: "Frontend Developer (Intern)",
    company: "Coding Matters",
    highlights: [
      "UI components in Laravel apps with Tailwind CSS and JavaScript.",
      "Regex text parser that automated data entry.",
    ],
  },
  {
    dates: "2016",
    title: "Full Stack Developer (Capstone)",
    company: "MSU–IIT",
    highlights: [
      "3D interactive campus map with Laravel and OpenStreetMap / OSMBuildings.",
      "Beam stress calculator in JavaScript.",
    ],
  },
];

export type ProjectCategory = "Full stack" | "CMS & e-commerce" | "QA & .NET" | "Frontend";

export type Project = {
  name: string;
  stack: string;
  result: string;
  bestFor: string;
  category: ProjectCategory;
  url?: string;
};

export const projects: Project[] = [
  {
    name: "Legend",
    stack: "ASP.NET Core · Playwright",
    result: "300+ regression tests, bug fixes and user support on the Crosstx care coordination platform.",
    bestFor: "QA automation, .NET",
    category: "QA & .NET",
    url: "https://crosstx.com",
  },
  {
    name: "Amrap Music Catalog",
    stack: "Laravel · React",
    result: "Built from scratch: audio player, playlists and optimised search across the catalog.",
    bestFor: "Backend and API design, leading a build",
    category: "Full stack",
    url: "https://amrap.org.au",
  },
  {
    name: "Neuma Care",
    stack: "React SPA · Laravel API · React Native · Stripe",
    result: "Donation and care management platform with a mobile companion app.",
    bestFor: "Payments, mobile",
    category: "Full stack",
  },
  {
    name: "Moneycache",
    stack: "Laravel",
    result: "Web POS with product management, multi-location stock, transfers and sales reports.",
    bestFor: "Business systems, retail",
    category: "Full stack",
  },
  {
    name: "Easyamends",
    stack: "Full-stack web app",
    result: "Design proofing and annotation with fine-grained, multi-role permissions.",
    bestFor: "Multi-tenant roles, SaaS",
    category: "Full stack",
  },
  {
    name: "LockedInLust Lounge",
    stack: "Laravel",
    result: "Point distribution with real-time notifications; image uploads 70% smaller.",
    bestFor: "Real-time features, performance",
    category: "Full stack",
    url: "https://lounge.lockedinlust.com",
  },
  {
    name: "Protein Malta",
    stack: "Shopify (Liquid) · WooCommerce",
    result: "Full store migration in under 2 weeks with theme and product data intact.",
    bestFor: "Shopify, migrations",
    category: "CMS & e-commerce",
    url: "https://proteinmalta.com",
  },
  {
    name: "Coggno and Sprolo SEO",
    stack: "WordPress · Duda · Shopify",
    result: "Ahrefs score 67 → 90+ at Coggno; 40% lighter pages after the Sprolo Duda migration.",
    bestFor: "Marketing sites, SEO, Core Web Vitals",
    category: "CMS & e-commerce",
  },
  {
    name: "Structural Analysis Calculator",
    stack: "JavaScript · HTML",
    result: "Interactive beam stress graphs, hosted on GitHub Pages.",
    bestFor: "Math-heavy frontend, visualisation",
    category: "Frontend",
    url: "https://johnvamba.github.io/ind_struct_analysis",
  },
  {
    name: "MSU–IIT 3D Campus Map",
    stack: "Laravel · OpenStreetMap · OSMBuildings",
    result: "Interactive 3D map of the university campus, built as a capstone project.",
    bestFor: "Mapping, 3D on the web",
    category: "Frontend",
  },
];

export const education = {
  degree: "BS Information Technology, major in Multimedia Systems",
  school: "Mindanao State University – Iligan Institute of Technology",
  year: "2016",
  certification: "HIPAA Training for Business Associates",
};
