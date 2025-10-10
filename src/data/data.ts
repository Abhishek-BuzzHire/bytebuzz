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
      "Every great idea begins with a simple question “Can we make this better?” That's how ByteBuzz was born. A small group of tech enthusiasts came together with one goal: to simplify technology and help businesses grow faster through smart, scalable IT solutions.",
    image: "story.jpg",
  },
  {
    id: "feature-2",
    title: "Mission",
    description:
      "We've grown into a team of developers, designers, and data experts who believe technology should be practical, beautiful, and impactful. Every line of code we write and every solution we design is focused on one thing - helping businesses move forward.",
    image: "mission.jpg",
  },
  {
    id: "feature-3",
    title: "Vision",
    description:
      "We believe in creating long-lasting partnerships rather than one-time projects. Our focus is on offering a superior customer experience through transparency, innovation, and reliability in everything we do.",
    image: "vision.jpg",
  },
]

export interface ServiceSec {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>,
  title: string;
  description: string;
  items: string[];
  slug: string;
  image: string;
}

export const serviceSec: ServiceSec[] = [
  {
    icon: Database,
    title: "Database",
    description:
      "Ensure the reliability, security, and optimum performance of databases that underpin all workflows",
    items: ["MySQL, PostgreSQL, DB2, SQL Server", "Monitoring, and Optimization", "Data Backup & Recovery Solutions"],
    slug: "database-service",
    image: "database.jpg",
  },
  {
    icon: Code,
    title: "Software Development",
    description:
      "Esse velit sit sint nostrud consequat culpa velit et ex ullamco nisi. Esse velit sit sint nostrud et ex ullamco nisi.",
    items: ["Web Application Development", "Custom ERP/CRM Solutions", "SaaS (Software as a Service)"],
    slug: "software-development-service",
    image: "web-dev.jpg",

  },
  {
    icon: Braces,
    title: "Data Engineering",
    description:
      "Design, build, and maintain data pipelines, Ensure raw data is ingested, cleaned, transformed, stored, and delivered as actionable information.",
    items: [" Data Source Assessment", " Data Pipeline Design", "Data Modelling & Schema Design"],
    slug: "data-engineering-service",
    image: "data-engineering.jpg",
  },
  {
    icon: Infinity,
    title: "Cloud & DevOps",
    description:
      "Esse velit sit sint nostrud consequat culpa velit et ex ullamco nisi. Esse velit sit sint nostrud et ex ullamco nisi.",
    items: ["Cloud Infrastructure Setup & Optimization", "Cloud Cost Management", " Hybrid and Multi-Cloud Strategy"],
    slug: "cloud-devops-service",
    image: "devops.jpg",
  },
  {
    icon: ShieldCheck,
    title: "CyberSecurity",
    description:
      "Esse velit sit sint nostrud consequat culpa velit et ex ullamco nisi. Esse velit sit sint nostrud et ex ullamco nisi.",
    items: ["Security solutions", "Compliance"],
    slug: "cybersecurity-service",
    image: "cybersecurity.jpg",
  },
  {
    icon: Router,
    title: "IT Infrastructure Setup & Support",
    description:
      "Esse velit sit sint nostrud consequat culpa velit et ex ullamco nisi. Esse velit sit sint nostrud et ex ullamco nisi.",
    items: [" Network setup (LAN, WAN, Wi-Fi, VPN)", "Server installation and configuration", "IT helpdesk and technical support"],
    slug: "it-setup-support-service",
    image: "it-support.jpg",
  },
];

export type SectionContent =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] };

export interface ServiceSection {
  heading: string;
  content: SectionContent[];
};

export interface Service {
  slug: string; // used for dynamic route
  title: string;
  image: string;
  description: string;
  highlights: {
    icon: string;
    label: string;
  }[];
  sections: ServiceSection[];
};

export const servicesData: Service[] = [
  {
    slug: "database-service",
    image: "/database.jpg",
    title: "Database Service",
    description: "We help businesses like yours ensure that their data is not just stored, but optimized, secured, and made actionable. Our Database Services ensure faster applications, zero downtime, and strong disaster recovery—so your business can scale confidently without worrying about data bottlenecks. We provide end-to-end database services – from designing robust systems to ensuring round-the-clock performance, secure backups, and seamless migrations. With our expertise across MySQL, PostgreSQL, Oracle, DB2, and SQL Server, we help your business run faster, safer, and smarter.",
    highlights: [
      { icon: "/logos/mongodb.svg", label: "MongoDB" },
      { icon: "/logos/mysql.svg", label: "MySQL" },
      { icon: "/logos/oracle.svg", label: "Oracle" },
      { icon: "/logos/postgresql.svg", label: "PostgreSQL" },
    ],
    sections: [
      {
        heading: "Database Design & Development (MySQL, PostgreSQL, Oracle, DB2, SQL Server)",
        content: [
          {
            type: 'list',
            items: [
              "Requirement Analysis: Understand client’s business needs, volume of data, and reporting requirements.",
              "Schema Design: Build efficient data models (ER diagrams, normalization, indexing strategy).",
              "Technology Choice: Suggest the right RDBMS (MySQL for cost efficiency, PostgreSQL for open-source robustness, Oracle/DB2/SQL Server for enterprise-grade needs).",
              "Development: Create procedures, triggers, views and queries tailored for their use cases.",
              "Testing: Test with sample data and optimize queries for performance."
            ]
          }
        ],
      },
      {
        heading: "Database Administration, Monitoring, and Optimization",
        content: [
          {
            type: 'list',
            items: [
              "Set up monitoring tools (e.g., Nagios, Zabbix, Prometheus, native DB tools).",
              "Configure performance tuning (query optimization, indexing, caching).",
              "Implement user management, role-based access, and security hardening.",
              "Routine health checks, patch updates, and log monitoring."
            ]
          }

        ],
      },
      {
        heading: "Data Backup & Recovery Solutions",
        content: [
          {
            type: 'list',
            items: [
              "Design a backup strategy (full, incremental, differential).",
              "Automate backups (cron jobs, DB-native schedulers, or enterprise backup tools).",
              "Store backups securely (on-premises + cloud, encrypted).",
              "Test disaster recovery (RTO – Recovery Time Objective, RPO – Recovery Point Objective)."
            ]
          }

        ],
      },
      {
        heading: "Data Migration & Integration",
        content: [
          {
            type: 'list',
            items: [
              "Assess source and target systems.",
              "Plan migration (schema mapping, data cleansing, compatibility checks).",
              "Use ETL/ELT tools (Pentaho, Talend, Informatica, custom scripts).",
              "Run test migrations before full migration.",
              "Ensure zero/minimal downtime cutover."
            ]
          }

        ],
      },
    ]
  },
  {
    slug: "software-development-service",
    image: "/web-dev.jpg",
    title: "Software Development",
    description: "Faster time-to-market with agile methodology, Secure, scalable, and future-proof solutions, Tailored ERP/CRM systems to boost productivity, SaaS offerings for cost efficiency & business growth, Data-driven decision-making with integrated analytics, Web Application Development, Custom ERP/CRM Solutions for Small Businesses, SaaS (Software as a Service.",
    highlights: [
      { icon: "/logos/nextjs.svg", label: "NextJS" },
      { icon: "/logos/react.svg", label: "ReactJS" },
      { icon: "/logos/angular.svg", label: "Angular" },
      { icon: "/logos/python.svg", label: "Python" },
      { icon: "/logos/nodejs.svg", label: "NodeJS" },
      { icon: "/logos/java.svg", label: "JAVA" },
      { icon: "/logos/php.svg", label: "php" },
      { icon: "/logos/ruby.svg", label: "Ruby" },
      { icon: "/logos/go.svg", label: "GoLang" },
      { icon: "/logos/rails.svg", label: "Rails" },
      { icon: "/logos/postgresql.svg", label: "PostgreSQL" },
      { icon: "/logos/mongodb.svg", label: "MongoDB" },
      { icon: "/logos/aws.svg", label: "Amazon Web Services" },
      { icon: "/logos/azure.svg", label: "Azure" },
      { icon: "/logos/gcloud.svg", label: "Google Cloud" },
      { icon: "/logos/docker.svg", label: "Docker" },
      { icon: "/logos/kubernetes.svg", label: "Kubernetes" },
    ],
    sections: [
      {
        heading: "Web Application Development",
        content: [
          {
            type: 'paragraph',
            text: "Front-end (User Interface)"
          },
          {
            type: 'list',
            items: [
              "Technologies: React.js, Angular, Vue.js.",
              "Responsive design (mobile-first).",
              "UI/UX design principles.",
              "Accessibility compliance (WCAG).",
            ]
          },
          {
            type: 'paragraph',
            text: "Back-end (Server-Side)"
          },
          {
            type: 'list',
            items: [
              "Technologies: Node.js, Python (Django/Flask), Java (Spring Boot), PHP (Laravel), Go, Rails (RoR).",
              "RESTful / GraphQL APIs.",
              "Authentication & Authorization (OAuth2, JWT, SSO).",
              "Database integration (MySQL, PostgreSQL, MongoDB, DB2, SQL Server).",
            ]
          },
          {
            type: 'paragraph',
            text: "Implementation Approach"
          },
          {
            type: 'list',
            items: [
              "Requirement gathering & wireframing.",
              "Agile/Scrum development process.",
              "Automated testing & QA.",
              "CI/CD pipeline for deployment.",
              "Hosting (Cloud: AWS, Azure, GCP / On-premises).",
            ]
          },
        ],
      },
      {
        heading: "Custom ERP/CRM Solutions",
        content: [
          {
            type: 'paragraph',
            text: "ERP Modules"
          },
          {
            type: 'list',
            items: [
              "Inventory & Supply Chain.",
              "HR & Payroll.",
              "Finance & Accounting.",
              "Sales & Purchase.",
              "Reporting & Analytics.",
            ]
          },
          {
            type: 'paragraph',
            text: "CRM Modules"
          },
          {
            type: 'list',
            items: [
              "Lead & Contact management.",
              "Customer support/ticketing system.",
              "Sales pipeline tracking.",
              "Marketing automation (email/SMS campaigns).",
            ]
          },
          {
            type: 'paragraph',
            text: "Implementation Approach"
          },
          {
            type: 'list',
            items: [
              "Analyze business workflows & pain points.",
              "Customization based on client needs.",
              "Integration with existing systems (e.g., accounting, e-commerce).",
              "Role-based dashboards.",
              "Data migration & training support.",
            ]
          },
        ],
      },
      {
        heading: "SaaS (Software as a Service)",
        content: [
          {
            type: 'paragraph',
            text: "Core Features"
          },
          {
            type: 'list',
            items: [
              "Multi-tenancy architecture.",
              "Subscription management & billing.",
              "Role-based access control.",
              "Scalability & performance optimization.",
              "Security (data encryption, compliance: GDPR, HIPAA if required).",
            ]
          },
          {
            type: 'paragraph',
            text: "Implementation Approach"
          },
          {
            type: 'list',
            items: [
              "Choose cloud-native architecture (AWS/Azure/GCP).",
              "Containerization (Docker, Kubernetes).",
              "CI/CD & automated scaling.",
              "Monitoring & support (logging, alerts, analytics).",
              "Regular updates with zero downtime deployment.",
            ]
          },
          {
            type: 'paragraph',
            text: "Technology Stack (Suggested)"
          },
          {
            type: 'paragraph',
            text: " React.js / Angular,  Node.js / Python / Java / Go lang / Ruby on Rails,  PostgreSQL, MySQL, MongoDB, AWS, Azure, GCP, Docker, Kubernetes, Jenkins, GitHub Actions,  SSL/TLS, OAuth2, IAM, Pen-testing"
          },
        ],
      },

    ]
  },
  {
    slug: "data-engineering-service",
    image: "/data-engineering.jpg",
    title: "Data Engineering",
    description: ".Design, build, and maintain data pipelines, Ensure raw data is ingested, cleaned, transformed, stored, and delivered as actionable information, Source-to-target mapping document, Data pipeline code (with documentation), Data model diagrams, Data quality and monitoring reports, Handover and support guide.",
    highlights: [
      { icon: "/logos/spark.svg", label: "Spark" },
      { icon: "/logos/apache.svg", label: "Apache" },
      { icon: "/logos/kafka.svg", label: "Kafka" },
      { icon: "/logos/airflow.svg", label: "AirFlow" },
      { icon: "/logos/aws.svg", label: "Amazon Web Services" },
      { icon: "/logos/azure.svg", label: "Azure" },
      { icon: "/logos/gcloud.svg", label: "Google Cloud" },

    ],
    sections: [
      {
        heading: "Key Phases & Deliverables",
        content: [
          {
            type: 'paragraph',
            text: "Requirements Gathering"
          },
          {
            type: 'list',
            items: [
              "Identify stakeholders and data consumers.",
              "Gather analytics, reporting, and data product needs",
              "Define KPIs and project success metrics.",
            ]
          },
          {
            type: 'paragraph',
            text: "Data Source Assessment"
          },
          {
            type: 'list',
            items: [
              "Audit and document existing data sources (databases, APIs, files, etc.).",
              "Assess data quality, availability, and required integrations.",
            ]
          },
          {
            type: 'paragraph',
            text: "Data Pipeline Design"
          },
          {
            type: 'list',
            items: [
              "Architect ETL/ELT pipelines (batch and/or streaming).",
              "Choose technology stack (e.g. Spark, Airflow, Kafka, cloud services).",
            ]
          },
          {
            type: 'paragraph',
            text: "Data Modelling & Schema Design"
          },
          {
            type: 'list',
            items: [
              "Model data for analytics or operational use (star/snowflake schema, data marts, Lakehouse frameworks).",
              "Enforce data types, integrity, and lineage.",
            ]
          },
          {
            type: 'paragraph',
            text: "Development & Implementation"
          },
          {
            type: 'list',
            items: [
              "Build pipelines for ingestion, transformation, and loading.",
              "Implement automation and monitoring.",
            ]
          },
          {
            type: 'paragraph',
            text: "Testing & Validation"
          },
          {
            type: 'list',
            items: [
              "Data quality checks (completeness, accuracy, consistency).",
              "Pipeline unit/integration testing.",
            ]
          },
          {
            type: 'paragraph',
            text: "Deployment & Handover"
          },
          {
            type: 'list',
            items: [
              "Operationalize workflows (scheduling, monitoring, alerting).",
              "Provide documentation and knowledge transfer.",
              "Support UAT (User Acceptance Testing).",
            ]
          },
          {
            type: 'paragraph',
            text: "Governance & Compliance"
          },
          {
            type: 'list',
            items: [
              "Implement data security, access controls, and audit trails.",
              "Document data policies and privacy compliance.",
            ]
          },
        ],
      },
    ]
  },
  {
    slug: "cloud-devops-service",
    image: "/devops.jpg",
    title: "Cloud & DevOps Services",
    description: "Lower IT costs & optimized resource usage, Faster deployment & scalability of applications, Increased security & compliance, Future-proof IT with hybrid/multi-cloud flexibility, Assessment → Design → Migration → Optimization → Cost Control → Multi/Hybrid Cloud Strategy → Business Growth",
    highlights: [
      { icon: "/logos/aws.svg", label: "Amazon Web Services" },
      { icon: "/logos/azure.svg", label: "Azure" },
      { icon: "/logos/gcloud.svg", label: "Google Cloud" },
      { icon: "/logos/docker.svg", label: "Docker" },
      { icon: "/logos/kubernetes.svg", label: "Kubernetes" },
      { icon: "/logos/git.svg", label: "Git" },
      { icon: "/logos/github.svg", label: "GitHub" },
    ],
    sections: [
      {
        heading: "Cloud Infrastructure Setup & Optimization",
        content: [
          {
            type: 'paragraph',
            text: "Assessment & Planning"
          },
          {
            type: 'list',
            items: [
              "Analyze current IT landscape.",
              "Define workload requirements.",
              "Select appropriate cloud provider(s) (AWS, Azure, GCP).",
            ]
          },
          {
            type: 'paragraph',
            text: "Setup & Migration"
          },
          {
            type: 'list',
            items: [
              "Provision virtual machines, storage, and networking.",
              "Migrate applications & databases to the cloud.",
              "Ensure security configurations (IAM, encryption, firewalls).",
            ]
          },
          {
            type: 'paragraph',
            text: "Optimization"
          },
          {
            type: 'list',
            items: [
              "Implement autoscaling for demand fluctuations.",
              "Use load balancing for performance and availability.",
              "Monitor system health with cloud-native tools (CloudWatch, Azure Monitor, etc.).",
            ]
          },
        ],
      },
      {
        heading: "Cloud Cost Management",
        content: [
          {
            type: 'paragraph',
            text: "Monitoring & Reporting"
          },
          {
            type: 'list',
            items: [
              "Enable cost dashboards (AWS Cost Explorer, Azure Cost Management).",
              "Track per-service and per-department usage.",
            ]
          },
          {
            type: 'paragraph',
            text: "Optimization Techniques"
          },
          {
            type: 'list',
            items: [
              "Rightsize instances (avoid overprovisioning).",
              "Use reserved instances and spot instances.",
              "Implement storage lifecycle policies.",
            ]
          },
          {
            type: 'paragraph',
            text: "Governance"
          },
          {
            type: 'list',
            items: [
              "Define budget alerts and spending limits.",
              "Enforce tagging for cost allocation.",
              "Apply FinOps (Financial Operations) practices.",
            ]
          },
        ],
      },
      {
        heading: "Hybrid and Multi-Cloud Strategy",
        content: [
          {
            type: 'paragraph',
            text: "Hybrid Cloud Implementation"
          },
          {
            type: 'list',
            items: [
              "Integrate on-premises infrastructure with cloud services.",
              "Use secure VPN/Direct Connect/ExpressRoute for connectivity.",
              "Deploy applications across on-prem and cloud for flexibility.",
            ]
          },
          {
            type: 'paragraph',
            text: "Multi-Cloud Strategy"
          },
          {
            type: 'list',
            items: [
              "Select best-of-breed services from different providers.",
              "Prevent vendor lock-in.",
              "Implement cloud management platforms (CMPs) for unified visibility.",
            ]
          },
          {
            type: 'paragraph',
            text: "Security & Compliance"
          },
          {
            type: 'list',
            items: [
              "Consistent security policies across environments.",
              "Data portability & backup strategies.",
              "Ensure compliance with regulations (GDPR, HIPAA, ISO).",
            ]
          },
        ],
      },

    ]
  },
  {
    slug: "cybersecurity-service",
    image: "/cybersecurity.jpg",
    title: "CyberSecurity Services",
    description: "Sit in quis ullamco nulla magna amet adipisicing irure magna velit Lorem nulla adipisicing elit. Enim proident eu officia nisi mollit Lorem nostrud proident consequat ad officia consequat consequat. Nulla pariatur officia anim adipisicing voluptate quis. Voluptate veniam ut irure aliqua enim exercitation laborum ullamco aute nulla.",
    highlights: [
      { icon: "/logos/auth0.svg", label: "Auth0" },
    ],
    sections: [
      {
        heading: "Security solutions",
        content: [
          {
            type: 'list',
            items: [
              "Firewall & endpoint protection.",
              "Network vulnerability assessment.",
              "Data encryption and secure access control.",
              "SOC (Security Operations Center) as a service.",
            ]
          },
        ],
      },
      {
        heading: "Compliance",
        content: [
          {
            type: 'list',
            items: [
              "GDPR, HIPAA, ISO compliance support.",
              "Security audits & penetration testing.",
            ]
          },
        ],
      },
    ]
  },
  {
    slug: "it-setup-support-service",
    image: "/it-support.jpg",
    title: "IT Infrastructure Setup & Support",
    description: "Sit in quis ullamco nulla magna amet adipisicing irure magna velit Lorem nulla adipisicing elit. Enim proident eu officia nisi mollit Lorem nostrud proident consequat ad officia consequat consequat. Nulla pariatur officia anim adipisicing voluptate quis. Voluptate veniam ut irure aliqua enim exercitation laborum ullamco aute nulla.",
    highlights: [],
    sections: [
      {
        heading: "IT Infrastructure Setup & Support",
        content: [
          {
            type: 'list',
            items: [
              " Network setup (LAN, WAN, Wi-Fi, VPN).",
              "Server installation and configuration.",
              "Cloud migration and management (AWS, Azure, GCP).",
              " IT helpdesk and technical support.",
            ]
          },
        ],
      },
    ]
  },
]

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  github?: string;
  twitter?: string;
  linkedin?: string;
}

export const members = [
  {
    id: "member-1",
    name: "Satyajeet Mishra",
    role: "Founder",
    image: "/satyajeet-mishra.jpg",

    linkedin: "https://www.linkedin.com/in/satyajeet007/",
  },
  {
    id: "member-2",
    name: "Ankit Shukla",
    role: "Founder",
    image: "/ankit-shukla.jpg",

    linkedin: "https://www.linkedin.com/in/ankitshukla3/",
  },
  {
    id: "member-3",
    name: "Atul Sharma",
    role: "Chief Technical Officer",
    image: "/atul-sharma.jpg",

    linkedin: "https://www.linkedin.com/in/atul-sharma-a4072514/",
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