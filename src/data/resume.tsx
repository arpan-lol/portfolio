import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { title } from "process";

export const DATA = {
  name: "Arpan Taneja",
  initials: "AT",
  url: "https://arpantaneja.dev",
  location: "New Delhi, India",
  locationLink: "https://maps.app.goo.gl/X1GHwDDYD2jmJ3iq8",
  description:
    "19 y/o Full Stack AI dev",
  summary: (
    <>
      Currently enrolled in <u><a href="#education">Bachelor&apos;s of Technology in Computer Science and Engineering</a></u>. I love playing with cloud infrastructure and automating anything that I can. I mostly learn by shipping and fixing what breaks. Outside of coding, I enjoy reading, playing guitar, and swimming.
    </>
  ),
  avatarUrl: "/me.jpeg",
  skills: [
    "Typescript",
    "Node.js",
    "RAG",
    "LangChain",
    "LangGraph",
    "MCP",
    "Next.js",
    "Python",
    "Go",
    "Nginx",
    "AWS",
    "GCP",
    "Cloudflare",
    "Postgres",
    "Docker",
    "Kubernetes",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "arpantaneja14@gmail.com",
    tel: "+91 9354478287",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/arpan-github",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/arpan-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/arpan-twitter",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://dub.sh/arpan-ig",
        icon: Icons.instagram,

        navbar: true,
      },
      Peerlist: {
        name: "Peerlist",
        url: "https://dub.sh/arpan-peerlist",
        icon: Icons.peerlist,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    // {
    // company: "Company",
    // href: "...",
    // badges: [],
    // location: "Remote",
    // title: "Software Engineer",
    // logoUrl: "/abc.png",
    // start: "May 2021",
    // end: "Oct 2022",
    // description:
    //   "description",
    // },
  ],
  education: [
    {
      school: "Maharaja Agrasen Institute of Technology",
      href: "https://mait.ac.in",
      degree: "Bachelor's of Technology in Computer Science and Engineering (B.Tech)",
      logoUrl: "/mait.png",
      start: "2024",
      end: "2028",
    },
    {
      school: "Indian Institute of Technology, Madras",
      href: "https://www.iitm.ac.in",
      degree: "Bachelor's of Science in Data Science and Applications (B.E.)",
      logoUrl: "/iitm.png",
      start: "2024",
      end: "Present",
    },
    {
      school: "St. Margaret Sr. Sec. School, New Delhi",
      href: "https://stmargaretsrsecschool.com/",
      degree: "Primary, Middle and High Schooling",
      logoUrl: "/smsss.jpg",
      start: "2010",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Cosmic Engine",
      href: "https://cosmicengine.arpantaneja.dev",
      dates: "Sep 2025 - Dec 2025",
      active: true,
      description:
        "A RAG experimentation platform that brings together 10+ retrieval, ranking, and caching strategies in one place. I originally built it to learn and experiment with Retrieval-Augmented Generation, and it gradually grew as I added more techniques and edge cases I ran into. As it evolved, I layered in observability and transparency to better understand how different RAG strategies behave in practice.",
      technologies: [
        "Milvus",
        "Typescript",
        "Python",
        "Gemini",
        "GCP,",
        "Sentry",
        "PostgreSQL",
        "Next.js",
        "Prisma",
      ],
      links: [
        {
          type: "Website",
          href: "https://cosmicengine.arpantaneja.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/arpan-lol/cosmic-engine",
          icon: <Icons.github className="size-3" />
        }
      ],
      image: "/cosmicengine.png",
      video: "",
    },
    {
      title: "CSI Innowave Mobile App",
      href: "https://csim1.arpantaneja.dev",
      dates: "Dec 2024 - Feb 2025",
      active: true,
      description:
        "A mobile app for running college events and live voting. schedules, profiles, and quick updates, all built with TypeScript.",
      technologies: [
        "React-Native",
        "Expo",
        "Docker",
        "DigitalOcean",
        "SSE",
        "Github Actions",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "Firebase",
      ],
      links: [
        {
          type: "Website",
          href: "https://csim1.arpantaneja.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/arpan-lol/csi-m1",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/csim1.jpg",
      video: "",
    },
    {
      title: "Veil",
      href: "https://cyborg.arpantaneja.dev",
      dates: "November 2025 - December 2025",
      active: true,
      description:
        "Encrypted & local RAG for investigative journalism, powered by CyborgDB. ",
      technologies: [
        "CyborgDB",
        "Typescript",
        "Gemini",
        "Ollama",
        "all-MiniLM-L6-v2",
        "Docker",
        "Next.js",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI"
      ],
      links: [
        {
          type: "Website",
          href: "https://cyborg.arpantaneja.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/arpan-lol/Cyborg-DB",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/veil-cover.png",
      video: "",
    },
    {
      title: "BitByBit",
      href: "https://bitbybit.arpantaneja.dev",
      dates: "March 2025",
      active: true,
      description:
        "A transaction safe system around milestone-based escrow, including atomic updates, dispute tracking, timed unlocks, and on-chain settlement states. Built as a freelancing host alternative, in 24 hours at Cognizance 2025 (hackathon).",
      technologies: [
        "Solana",
        "AWS",
        "Vercel",
        "Next.js",
        "React",
        "Express",
        "PostgreSQL"
      ],
      links: [
        {
          type: "Website",
          href: "https://bitbybit.arpantaneja.dev",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/arpan-lol/bitbybit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/bitbybit-cover.png",
      video: ""
    },
  ],
  hackathons: [
    {
      title: "BAJAJ HackRX 6.0 - Pace & Power Award (Top 4)",
      dates: "23 Aug 2025",
      location: "Bangaluru, India",
      description:
        "Built an Agentic + RAG document system for 6+ formats (PDF, DOCX, XLSX, PPTX, images, emails) with Browser automation for search, navigation, forms, and data capture; use an LLM to write and edit code, run sandbox checks, and auto-deploy to GitHub (auto-commit and PR) behind CI gating.",
      image:
        "/bajaj.png",
      win: "Pace & Power Award - 4th Position",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/HackRx-6/Laal-Tamatar",
        },
      ],
    },
    {
      title: "Cognizance 2025 (Second Position)",
      dates: "September 14th - 16th, 2018",
      location: "IIT Roorkee, Uttrakhand, India",
      description:
        "Built a transaction safe freelance platform around milestone-based escrow, including atomic updates, multi-role auth, dispute tracking, timed unlocks, and on-chain settlement states.",
      image:
        "/cognizance.png",
      links: [
        {
          title: "Github",
          href: "https://github.com/arpan-lol/bitbybit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      win: "Runners Up"
    },
    {
      title: "EY Techathon 6.0",
      dates: "December 2025",
      location: "",
      description:
        "Developed an autonomous platform that validates healthcare provider data through a multi-agent AI architecture orchestrated by LangGraph.",
      icon: "public",
      image:
        "/ey.png",
      links: [
        {
          title: "Github",
          href: "https://github.com/imashishchoudhary/lampstack",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "Tesco Retail Media InnovAItion Jam (National Finalist)",
      dates: "December 2025",
      location: "",
      description:
        "Built an AI-powered creative builder with real-time compliance enforcement. Suppliers design retail media directly in a browser-based canvas editor while an intelligent backend validates every element against Tesco's legal and brand guidelines.",
      icon: "public",
      image:
        "/tesco.png",
      links: [
        {
          title: "Github",
          href: "https://github.com/imashishchoudhary/retexture",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "CyborgDB Hackathon 2025",
      dates: "December 27th, 2025",
      location: "",
      description:
        "Developed an end-to-end encrypted RAG application, with a local embedding model & LLM powered by Cyborg's encrypted embeddings.",
      icon: "public",
      image:
        "/cyborg.png",
      links: [
        {
          title: "Github",
          href: "https://github.com/arpan-lol/cyborg-db",
          icon: <Icons.github className="size-3" />,
        },
      ],
    },
    {
      title: "CSI Code Genesis (Organiser)",
      dates: "February 21st, 2025",
      location: "Microsoft Office, Gurugram, India",
      description:
        "Organized a national hackathon with 1,000+ students; evaluated first-round submissions, interviewed teams, and assisted in hosting the accompanying tech conference at Microsoft Office, Gurugram.",
      image:
        "/codegenesis.jpg",
      links: [],
    },
    {
      title: "Dotslash Hackathon",
      dates: "November 23rd, 2024",
      location: "Mohali, Punjab, India",
      description:
        "Designed and built a full-stack transaction compliance platform leveraging machine learning (Isolation Forest) and Explainable AI (SHAP) to detect anomalous financial transactions with ~95% model accuracy, featuring real-time monitoring, adaptive model retraining, and a multilingual LLM-powered chatbot for compliance insights.",
      image:
        "/dotslash.webp",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/arpan-lol/dotslash-hackathon/",
        },
      ],
    }
  ],
} as const;
