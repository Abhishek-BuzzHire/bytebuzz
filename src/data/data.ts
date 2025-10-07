import { Code, Cog, PenTool, Shrub } from "lucide-react";

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

export const serviceSec = [
    {
      icon: Cog,
      title: "Product Strategy",
      description:
        "Strategic planning and market positioning to ensure your product meets user needs and business goals.",
      items: ["Market Research", "User Personas", "Competitive Analysis"],
    },
    {
      icon: PenTool,
      title: "Design",
      description:
        "Beautiful, user-centered designs that create engaging experiences across all platforms.",
      items: ["UI/UX Design", "Prototyping", "Interaction Design"],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Modern, scalable web applications built with the latest technologies and best practices.",
      items: ["Frontend Dev", "Backend Dev", "API Integration"],
    },
    {
      icon: Shrub,
      title: "Marketing",
      description:
        "Data-driven strategies to launch successfully and scale your product efficiently.",
      items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Modern, scalable web applications built with the latest technologies and best practices.",
      items: ["Frontend Dev", "Backend Dev", "API Integration"],
    },
    {
      icon: Shrub,
      title: "Marketing",
      description:
        "Data-driven strategies to launch successfully and scale your product efficiently.",
      items: ["SEO Strategy", "Analytics & Data", "A/B Testing"],
    },
  ];

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