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
        "Emergency financial triage for distressed businesses. 90-day hemorrhage control.",
      type: "service",
      link: "/contact",
      color: "red",
      icon: "ShieldAlert",
      featured: true,
    },
    {
      id: "alkimya",
      name: "Al-Kimya Recovery",
      description:
        "Wealth recovery & restructuring protocols. Turning lead into gold.",
      type: "venture",
      link: "/ventures",
      color: "emerald",
      icon: "Briefcase",
    },
    {
      id: "precision",
      name: "Precision LGS",
      description:
        "Light Gauge Steel construction. Building physical assets for long-term yield.",
      type: "venture",
      link: "/ventures",
      color: "blue",
      icon: "Hammer",
    },
    {
      id: "glengrove",
      name: "Glengrove",
      description:
        "Hospitality management & asset utilization. Passive income architecture.",
      type: "venture",
      link: "/ventures",
      color: "amber",
      icon: "Home",
    },
  ],
} as const;

export type VentureColor = (typeof SITE_CONFIG.ventures)[number]["color"];
export type VentureIconName = (typeof SITE_CONFIG.ventures)[number]["icon"];
