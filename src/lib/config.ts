export const SITE_CONFIG = {
  profile: {
    name: "Taufeeq Essop",
    title: "Financial Recovery Architect",
    tagline: "Rebuilding Wealth. Engineering Resilience.",
    email: "contact@taufeeqessop.co.za",
    linkedin: "https://www.linkedin.com/in/taufeeq-essop-927911103",
    about:
      "Bridging the gap between financial crisis and structural recovery. I architect systems that turn volatility into stability, leveraging elite financial planning and industrial psychology backgrounds.",
  },
  accolades: [
    {
      label: "Absa Top 10",
      sub: "Trending Young Entrepreneur",
      icon: "TrendingUp",
    },
    {
      label: "League of Champions",
      sub: "Sanlam (4x Winner)",
      icon: "Award",
    },
    {
      label: "Airbnb Superhost",
      sub: "4.8+ Rating (Glengrove)",
      icon: "Star",
    },
    {
      label: "Dr. Phil Award",
      sub: "Attitude & Team Contribution",
      icon: "Heart",
    },
  ],
  ventures: [
    {
      id: "crisis",
      name: "Crisis Interceptor",
      description:
        "Emergency financial triage. Intervene, place into care, financial recovery & aftercare.",
      type: "service",
      link: "/crisis-interceptor",
      color: "red",
      icon: "ShieldAlert",
      logo: "/logos/crisis-interceptor.png",
    },
    {
      id: "alkimya",
      name: "Al-Kimya Recovery",
      description:
        "Wealth recovery & restructuring protocols. Turning lead into gold.",
      type: "venture",
      link: "/ventures#alkimya",
      color: "emerald",
      icon: "Briefcase",
      logo: "/logos/al-kimya.png",
    },
    {
      id: "precision",
      name: "Precision LGS",
      description:
        "Light Gauge Steel construction. Building physical assets for long-term yield.",
      type: "venture",
      link: "/ventures#precision",
      color: "blue",
      icon: "Hammer",
      logo: "/logos/precision-lgs.png",
    },
    {
      id: "glengrove",
      name: "Glengrove",
      description:
        "Authentic Cape Town hospitality & exploration. Lodge, tours, short-term rentals.",
      type: "venture",
      link: "/ventures#glengrove",
      color: "amber",
      icon: "Home",
      logo: "/logos/glengrove.png",
    },
    {
      id: "alameen",
      name: "Al-Ameen Caps",
      description:
        "Premium Islamic headwear & Sunnah attire. Nationwide delivery, retail & wholesale.",
      type: "venture",
      link: "/ventures#alameen",
      color: "violet",
      icon: "ShoppingBag",
      logo: "/logos/al-ameen-caps.png",
    },
  ],
} as const;

export type VentureColor = (typeof SITE_CONFIG.ventures)[number]["color"];
export type VentureIconName = (typeof SITE_CONFIG.ventures)[number]["icon"];

/** Venture with optional logo image path and external website URL. */
export type VentureWithMedia = (typeof SITE_CONFIG.ventures)[number] & {
  logo?: string;
  website?: string;
};
