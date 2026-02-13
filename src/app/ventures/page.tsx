import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG, type VentureWithMedia } from "@/lib/config";
import { getIcon } from "@/lib/icons";
import { ArrowUpRight } from "lucide-react";
import { SITE_CONFIG as SITE } from "@/lib/site-config";

const title = "Ventures | Taufeeq Essop - Financial Recovery Architect";
const description =
  "Al-Kimya Origin, Glengrove Lodge & Tours, Precision LGS, Al-Ameen Caps, Crisis Interceptor. What each venture does and how to get involved.";
const url = `${SITE.siteUrl}/ventures`;
const ogImage = { url: "/taufeeq-essop-profile.png", width: 1200, height: 630, alt: "Taufeeq Essop - Financial Recovery Architect" };

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, url, siteName: "Taufeeq Essop", type: "website", images: [ogImage] },
  twitter: { card: "summary_large_image", title, description },
  alternates: { canonical: url },
};

const colorToBg: Record<(typeof SITE_CONFIG.ventures)[number]["color"], string> = {
  red: "bg-red-900",
  blue: "bg-blue-900",
  emerald: "bg-emerald-900",
  amber: "bg-amber-900",
  violet: "bg-violet-900",
};

/** Detailed content per venture: concept, how it helps, and services list. */
const VENTURE_DETAIL: Record<
  string,
  {
    subtitle?: string;
    concept: string;
    howItHelps: string;
    servicesLabel: string;
    services: string[];
    cta: string;
    ctaHref: string;
  }
> = {
  crisis: {
    subtitle: "Emergency financial triage & intervention",
    concept:
      "When someone is in crisis with addiction (drugs or alcohol), families and employers often don't know the next step. Crisis Interceptor is immediate intervention: we help get everything necessary in place, get the person checked into a facility that works, and support financial recovery and aftercare so the journey is sustainable.",
    howItHelps:
      "We provide crisis intervention and placement, financial recovery planning (including Medical Aid PMB advocacy and Section 6B tax strategy for rehab costs), and aftercare support. It's emergency financial triage so families can act with structure instead of panic.",
    servicesLabel: "What we provide",
    services: [
      "Crisis intervention & placement into a facility that works",
      "Financial recovery planning & aftercare support",
      "Medical Aid PMB advocacy for addiction treatment cover",
      "Section 6B tax strategy for rehab costs",
      "Liquidity strategy so families can fund recovery without collapsing",
    ],
    cta: "Initiate protocol",
    ctaHref: "/crisis-interceptor",
  },
  alkimya: {
    subtitle: "Bridging Ancient Wisdom & Modern Technology for Recovery",
    concept:
      "Al-Kimya Origin is a pioneering mobile application and digital platform designed to revolutionize the journey of addiction recovery and self-mastery. By synthesizing the timeless spiritual technologies of Sufism with modern therapeutic techniques and Artificial Intelligence, we create a \"digital twin\" for your spiritual and mental growth.",
    howItHelps:
      "Recovery is often a lonely and fragmented process. Al-Kimya Origin provides a holistic companion that integrates the physical, mental, and spiritual aspects of healing. It offers users a structured pathway out of chaos, using data-driven insights to reinforce spiritual habits and maintain sobriety.",
    servicesLabel: "Services & Features",
    services: [
      "AI-Assisted Mentorship: Personalized guidance combining cognitive behavioral tools with spiritual wisdom.",
      "Digital Dhikr & Meditation: Interactive tools for spiritual grounding and mindfulness.",
      "The Wealth Garden: A virtual representation of your personal growth, mirroring real-world progress.",
      "Community Connection: A safe, private network for peer support and shared accountability.",
    ],
    cta: "Learn more",
    ctaHref: "/services",
  },
  precision: {
    subtitle: "Light Gauge Steel construction",
    concept:
      "Precision LGS is Light Gauge Steel construction—building physical assets for long-term yield. We focus on structures that last and that support resilient portfolios.",
    howItHelps:
      "From residential to commercial applications, we bring construction expertise into the venture ecosystem so that physical assets and financial planning can work together. Ideal for investors or partners who want to build as well as invest.",
    servicesLabel: "What we offer",
    services: [
      "Residential and commercial LGS structures",
      "Long-term yield-focused physical assets",
      "Construction and investment alignment",
    ],
    cta: "Get in touch",
    ctaHref: "/contact",
  },
  glengrove: {
    subtitle: "Authentic Cape Town Hospitality & Exploration",
    concept:
      "Located in the heart of Goodwood, Glengrove Lodge is more than just accommodation; it is a gateway to the authentic Cape Town experience. We combine comfortable, family-oriented lodging with curated tourism experiences that reveal the hidden gems of the Mother City.",
    howItHelps:
      "We provide travelers with a \"home away from home\" environment that is safe, affordable, and deeply connected to local culture. For international and local tourists alike, we remove the stress of planning by offering trusted, guided access to Cape Town's rich history and natural beauty.",
    servicesLabel: "Services Offered",
    services: [
      "Private Accommodation: Fully equipped, comfortable lodging suitable for families and business travelers.",
      "\"Little Explorers\" Tours: Specialized, family-friendly tours (e.g. GetYourGuide, Viator) designed to engage younger travelers.",
      "Cultural Excursions: Guided experiences focusing on Cape Town's diverse heritage.",
      "Short-Term Rentals: Flexible booking options for transit or holiday stays.",
    ],
    cta: "Enquire about Glengrove",
    ctaHref: "/contact",
  },
  alameen: {
    subtitle: "Premium Islamic Headwear & Sunnah Attire",
    concept:
      "Al-Ameen Caps connects the South African community with high-quality, ethically sourced Islamic headwear and accessories. Specializing in premium imports, particularly from India, we bridge the gap between traditional Sunnah attire and contemporary style.",
    howItHelps:
      "We help men uphold the tradition of the Sunnah with dignity and elegance. By curating high-quality fabrics and designs that are often hard to find locally, we ensure that our customers can express their identity and faith with confidence and comfort.",
    servicesLabel: "Services & Products",
    services: [
      "Premium Imports: Exclusive collections of caps and headwear sourced directly from artisans.",
      "Nationwide Delivery: Reliable shipping across South Africa.",
      "Retail & Wholesale: Options for individual buyers and bulk purchasers.",
      "Custom Sourcing: Finding specific styles and sizes to meet community needs.",
    ],
    cta: "Get in touch",
    ctaHref: "/contact",
  },
};

export default function Ventures() {
  const ventures = [...SITE_CONFIG.ventures] as VentureWithMedia[];

  return (
    <div className="min-h-screen bg-black pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-4">
          Venture Ecosystem
        </h1>
        <p className="text-zinc-400 max-w-2xl mb-12">
          A portfolio of specialized businesses designed to build resilience
          across physical, financial, and biological domains. Below is detailed
          information about each venture so you know what this movement is about.
        </p>

        <div className="space-y-12">
          {ventures.map((v) => {
            const Icon = getIcon(v.icon);
            const bgClass = colorToBg[v.color];
            const detail = VENTURE_DETAIL[v.id];

            return (
              <article
                key={v.id}
                id={v.id}
                className={`rounded-2xl p-8 text-white ${bgClass} border border-[#27272a] hover:shadow-2xl transition-all scroll-mt-24`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="bg-white/10 w-28 h-28 flex items-center justify-center p-3 rounded-xl shrink-0">
                    {v.logo ? (
                      <Image
                        src={v.logo}
                        alt=""
                        width={112}
                        height={112}
                        className="w-full h-full object-fill"
                        unoptimized
                      />
                    ) : (
                      <Icon className="w-14 h-14 text-white/90" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-2xl font-bold mb-1">{v.name}</h2>
                    <p className="text-xs uppercase tracking-widest opacity-70 mb-1">
                      {v.type === "venture" ? "Venture" : "Service"}
                    </p>
                    <p className="text-gray-200 font-medium mb-4">
                      {(detail?.subtitle) ?? v.description}
                    </p>

                    {detail && (
                      <div className="mb-6 space-y-5">
                        <div>
                          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                            The Concept
                          </h3>
                          <p className="text-gray-200 text-sm leading-relaxed">{detail.concept}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                            How It Helps
                          </h3>
                          <p className="text-gray-200 text-sm leading-relaxed">{detail.howItHelps}</p>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                            {detail.servicesLabel}
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-gray-200 text-sm leading-relaxed">
                            {detail.services.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-3">
                      <Link
                        href={detail?.ctaHref ?? v.link}
                        className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
                      >
                        {detail?.cta ?? "Learn more"}{" "}
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                      {v.website && (
                        <a
                          href={v.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-white/90 hover:text-white"
                        >
                          Visit site <ArrowUpRight className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
