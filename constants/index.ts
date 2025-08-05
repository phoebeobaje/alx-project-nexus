// constants/index.ts
import heroBg from "../public/assets/images/hero.jpg";
import { PropertyProps } from "../interfaces";
import logo from "../public/assets/images/logo.png";

export const HERO_BG = heroBg;
export const logoTop = logo;

export const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Countryside",
  "Luxury",
  "Near Beach",
];

// API URLs
export const API_URLS = {
  GET_PROPERTIES: "/api/properties",
  BOOK_PROPERTY: "/api/book",
};

// UI Text
export const UI_TEXT = {
  BOOK_NOW: "Book Now",
  VIEW_DETAILS: "View Details",
  LOADING: "Loading...",
};

// Configuration
export const CONFIG = {
  MAX_ITEMS_PER_PAGE: 10,
  DEFAULT_LANGUAGE: "en",
};

export const JOB_LISTINGS = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    company: "Oceanic Tech",
    location: {
      city: "Bali",
      state: "Seminyak",
      country: "Indonesia",
    },
    salary: "$100,000 - $120,000",
    type: "Full-time",
    category: ["Engineering", "Frontend", "Remote"],
    experienceLevel: "Senior",
    description:
      "We’re looking for a Senior Frontend Engineer who thrives on building performant, scalable, and elegant web applications using React and TypeScript.",
    responsibilities: [
      "Implement UI features with pixel-perfect precision.",
      "Collaborate with product and design teams to ship new features.",
      "Optimize components for maximum performance.",
      "Conduct code reviews and mentor junior engineers.",
    ],
    requirements: [
      "5+ years experience in frontend development.",
      "Strong React and TypeScript skills.",
      "Familiarity with testing libraries and state management.",
      "Understanding of accessibility and responsive design.",
    ],
    benefits: [
      "Remote-first culture",
      "Paid annual retreats",
      "Health insurance",
      "Learning budget",
    ],
    companyInfo:
      "Oceanic Tech is a fast-growing startup committed to building tools that enable creators and businesses to thrive globally.",
    howToApply: "Submit your application through our careers page or via the apply button.",
    logo: "/assets/logos/oceanic.png",
    postedAt: "2 days ago",
    isFeatured: true,
    applyLink: "https://oceanictech.com/careers/frontend",
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Mountain Tech",
    location: {
      city: "Aspen",
      state: "Colorado",
      country: "USA",
    },
    salary: "$70,000 - $90,000",
    type: "Remote",
    category: ["Design", "Product", "UX"],
    experienceLevel: "Mid-level",
    description:
      "We’re searching for a UI/UX Designer who can turn our software into user-friendly products that delight customers.",
    responsibilities: [
      "Translate concepts into user flows and wireframes.",
      "Design UI elements like menus, tabs, and widgets.",
      "Conduct user research and usability testing.",
    ],
    requirements: [
      "3+ years in UI/UX design.",
      "Portfolio of design projects.",
      "Proficient in Figma, Adobe XD, or Sketch.",
    ],
    benefits: ["Flexible hours", "Remote setup", "Growth opportunities"],
    companyInfo:
      "Mountain Tech is an award-winning SaaS company specializing in eco-conscious design tools.",
    howToApply: "Send your portfolio and resume through our official job portal.",
    logo: "/assets/logos/mountain-tech.png",
    postedAt: "5 days ago",
    isFeatured: false,
    applyLink: "https://mountaintech.com/jobs/uiux-designer",
  },
  {
    id: 3,
    title: "Product Manager",
    company: "City Innovations",
    location: {
      city: "New York",
      state: "New York",
      country: "USA",
    },
    salary: "$110,000 - $130,000",
    type: "Hybrid",
    category: ["Product", "Management"],
    experienceLevel: "Senior",
    description:
      "We need a strategic Product Manager to lead cross-functional teams and drive product excellence.",
    responsibilities: [
      "Define product vision and roadmap.",
      "Lead planning and execution of new features.",
      "Gather and prioritize customer feedback.",
    ],
    requirements: [
      "5+ years in product management.",
      "Strong leadership and communication skills.",
      "Experience with Agile methodologies.",
    ],
    benefits: [
      "Hybrid work model",
      "Equity options",
      "401(k) matching",
      "Health & wellness stipend",
    ],
    companyInfo:
      "City Innovations builds digital products that power the world’s largest cities.",
    howToApply: "Use the link below to apply through our secure portal.",
    logo: "/assets/logos/city-innovations.png",
    postedAt: "1 day ago",
    isFeatured: true,
    applyLink: "https://cityinnovations.com/careers/product-manager",
  },
  {
    id: 4,
    title: "Junior Backend Developer",
    company: "ForestSoft",
    location: {
      city: "Whistler",
      state: "British Columbia",
      country: "Canada",
    },
    salary: "$60,000 - $75,000",
    type: "Onsite",
    category: ["Engineering", "Backend"],
    experienceLevel: "Entry-level",
    description:
      "ForestSoft is looking for a Junior Backend Developer eager to contribute to building robust APIs and backend services.",
    responsibilities: [
      "Build and maintain RESTful APIs.",
      "Work with MongoDB and PostgreSQL.",
      "Assist with debugging and performance tuning.",
    ],
    requirements: [
      "1-2 years of backend experience.",
      "Node.js, Express, and database knowledge.",
      "Strong problem-solving skills.",
    ],
    benefits: ["Onsite lunch", "Paid time off", "Mentorship program"],
    companyInfo:
      "ForestSoft is a software consultancy building tools for green-tech startups.",
    howToApply: "Email your resume to careers@forestsoft.ca or apply online.",
    logo: "/assets/logos/forestsoft.png",
    postedAt: "6 days ago",
    isFeatured: false,
    applyLink: "https://forestsoft.ca/jobs/backend-junior",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    company: "CloudNest",
    location: {
      city: "Berlin",
      state: "Berlin",
      country: "Germany",
    },
    salary: "$95,000 - $115,000",
    type: "Remote",
    category: ["DevOps", "Cloud", "Infrastructure"],
    experienceLevel: "Mid-level",
    description:
      "Join CloudNest as a DevOps Engineer and help us automate infrastructure, improve CI/CD workflows, and monitor system health.",
    responsibilities: [
      "Automate infrastructure deployments using Terraform.",
      "Monitor systems using Prometheus and Grafana.",
      "Ensure high availability of production services.",
    ],
    requirements: [
      "3+ years experience in DevOps.",
      "Experience with Docker, AWS, Kubernetes.",
      "Good scripting knowledge (Bash, Python).",
    ],
    benefits: ["Remote-friendly", "Annual tech stipend", "Healthcare package"],
    companyInfo:
      "CloudNest is a cloud infrastructure company helping businesses scale globally with minimal downtime.",
    howToApply: "Click the apply link or send your resume to hr@cloudnest.io.",
    logo: "/assets/logos/cloudnest.png",
    postedAt: "3 days ago",
    isFeatured: true,
    applyLink: "https://cloudnest.io/careers/devops",
  },
];
