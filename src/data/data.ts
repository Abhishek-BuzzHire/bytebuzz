import { Code, Database, Router, Braces, ShieldCheck, Infinity } from "lucide-react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export interface about {
  id: any;
  title: string;
  description: string;
  image: string;
}

export const aboutData: about[] = [
  {
    id: "feature-1",
    title: "Our Story",
    description:
      "Clean and intuitive interface built with the latest design principles. Optimized for the best user experience.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
  },
  {
    id: "feature-2",
    title: "Mission",
    description:
      "Fully responsive design that works seamlessly across all devices and screen sizes. Perfect for any platform.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
  },
  {
    id: "feature-3",
    title: "Vision",
    description:
      "Simple integration process with comprehensive documentation and dedicated support team.",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
  },
]

export interface ServiceSec {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  title: string;
  description: string;
  items: string[];
  slug: string;
}

export const serviceSec: ServiceSec[] = [
  {
    icon: Database,
    title: "Database",
    description:
      "Ensure the reliability, security, and optimum performance of databases that underpin all workflows",
    items: ["MySQL, PostgreSQL, DB2, SQL Server", "Monitoring, and Optimization", "Data Backup & Recovery Solutions"],
    slug: "database_service"
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Esse velit sit sint nostrud consequat culpa velit et ex ullamco nisi. Esse velit sit sint nostrud et ex ullamco nisi.",
    items: ["Web Application Development", "Custom ERP/CRM Solutions", "SaaS (Software as a Service)"],
    slug: "software-development-service"
  },
  {
    icon: Braces,
    title: "Data Engineering",
    description:
      "Design, build, and maintain data pipelines, Ensure raw data is ingested, cleaned, transformed, stored, and delivered as actionable information.",
    items: [" Data Source Assessment", " Data Pipeline Design", "Data Modelling & Schema Design"],
    slug: "data-engineering-service"
  },
  {
    icon: Infinity,
    title: "Cloud & DevOps",
    description:
      "Esse velit sit sint nostrud consequat culpa velit et ex ullamco nisi. Esse velit sit sint nostrud et ex ullamco nisi.",
    items: ["Cloud Infrastructure Setup & Optimization", "Cloud Cost Management", " Hybrid and Multi-Cloud Strategy"],
    slug: "cloud-devops-service"
  },
  {
    icon: ShieldCheck,
    title: "CyberSecurity",
    description:
      "Esse velit sit sint nostrud consequat culpa velit et ex ullamco nisi. Esse velit sit sint nostrud et ex ullamco nisi.",
    items: ["Security solutions", "Compliance"],
    slug: "cybersecurity-service"
  },
  {
    icon: Router,
    title: "IT Infrastructure Setup & Support",
    description:
      "Esse velit sit sint nostrud consequat culpa velit et ex ullamco nisi. Esse velit sit sint nostrud et ex ullamco nisi.",
    items: [" Network setup (LAN, WAN, Wi-Fi, VPN)", "Server installation and configuration", "IT helpdesk and technical support"],
    slug: "it-setup-support-service"
  },
];

export interface ServiceSection {
  heading: string;
  content: string[];
};

export interface Service {
  slug: string; // used for dynamic route
  title: string;
  image: string;
  description: string;
  highlights: {
    icon: string;
    value: string;
    label: string;
  }[];
  sections: ServiceSection[];
};

export const servicesData: Service[] = [
  {
    slug: "database_service",
    image: "/database.jpg",
    title: "Database Service",
    description: "We help businesses like yours ensure that their data is not just stored, but optimized, secured, and made actionable. Our Database Services ensure faster applications, zero downtime, and strong disaster recovery—so your business can scale confidently without worrying about data bottlenecks. We provide end-to-end database services – from designing robust systems to ensuring round-the-clock performance, secure backups, and seamless migrations. With our expertise across MySQL, PostgreSQL, Oracle, DB2, and SQL Server, we help your business run faster, safer, and smarter.",
    highlights: [
      { icon: "adobe", value: "100%", label: "Adobe Creative Suite" },
      { icon: "figma", value: "5+", label: "Years experience" },
      { icon: "sketch", value: "200+", label: "Projects completed" },
    ],
    sections: [
      {
        heading: "Database Design & Development (MySQL, PostgreSQL, Oracle, DB2, SQL Server)",
        content: [
          "Requirement Analysis: Understand client’s business needs, volume of data, and reporting requirements.",
          "Schema Design: Build efficient data models (ER diagrams, normalization, indexing strategy).",
          "Technology Choice: Suggest the right RDBMS (MySQL for cost efficiency, PostgreSQL for open-source robustness, Oracle/DB2/SQL Server for enterprise-grade needs).",
          "Development: Create procedures, triggers, views and queries tailored for their use cases.",
          "Testing: Test with sample data and optimize queries for performance."
        ],
      },
      {
        heading: "Database Administration, Monitoring, and Optimization",
        content: [
          "Set up monitoring tools (e.g., Nagios, Zabbix, Prometheus, native DB tools).",
          "Configure performance tuning (query optimization, indexing, caching).",
          "Implement user management, role-based access, and security hardening.",
          "Routine health checks, patch updates, and log monitoring."
        ],
      },
      {
        heading: "Data Backup & Recovery Solutions",
        content: [
          "Design a backup strategy (full, incremental, differential).",
          "Automate backups (cron jobs, DB-native schedulers, or enterprise backup tools).",
          "Store backups securely (on-premises + cloud, encrypted).",
          "Test disaster recovery (RTO – Recovery Time Objective, RPO – Recovery Point Objective)."
        ],
      },
      {
        heading: "Data Migration & Integration",
        content: [
          "Assess source and target systems.",
          "Plan migration (schema mapping, data cleansing, compatibility checks).",
          "Use ETL/ELT tools (Pentaho, Talend, Informatica, custom scripts).",
          "Run test migrations before full migration.",
          "Ensure zero/minimal downtime cutover."
        ],
      },
    ]
  }
]

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
}

export const members = [
  {
    id: "member-1",
    name: "Sarah Chen",
    role: "CEO & Founder",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: "member-2",
    name: "Marcus Rodriguez",
    role: "CTO",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-2.webp",
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
  {
    id: "member-3",
    name: "Emily Watson",
    role: "Head of Design",
    avatar: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-3.webp",
    github: "#",
    twitter: "#",
    linkedin: "#",
  },
]

export interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

export const logodata = [
  {
    id: "logo-1",
    description: "Logo 1",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/astro-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-2",
    description: "Logo 2",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/figma-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-3",
    description: "Logo 3",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/nextjs-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-4",
    description: "Logo 4",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/react-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-5",
    description: "Logo 5",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcn-ui-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/supabase-wordmark.svg",
    className: "h-7 w-auto",
  },
  {
    id: "logo-7",
    description: "Logo 7",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/tailwind-wordmark.svg",
    className: "h-4 w-auto",
  },
  {
    id: "logo-8",
    description: "Logo 8",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/vercel-wordmark.svg",
    className: "h-7 w-auto",
  },
]

export interface ContactProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  label: string,
  description: string,
  main: string
}

export const contactdata: ContactProps[] = [
  {
    icon: Mail,
    label: "Email",
    description: "We respond to all emails within 24 hours.",
    main: "info@bytebuzz.in"
  },
  {
    icon: MapPin,
    label: "Office",
    description: "Drop by our office for a chat.",
    main: "Unit No. 1527, 15 floor, Galaxy Diamond Plaza,  Sector-4,  Greater Noida, UP - 201016"
  },
  {
    icon: Phone,
    label: "Phone",
    description: "We're available Mon-Fri, 9am-5pm.",
    main: "+91 12345 67890"
  },
  {
    icon: MessageCircle,
    label: "Live Chat",
    description: "Get instant help from our support team.",
    main: "Start Chat"
  },
]