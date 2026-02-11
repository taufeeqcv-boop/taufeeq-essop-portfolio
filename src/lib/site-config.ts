/**
 * Site-wide config from environment variables.
 * Set these in Netlify: Site configuration → Environment variables.
 * No redeploy needed for value-only changes after the first deploy.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://taufeeqessop.co.za";

export const SITE_CONFIG = {
  /** FSP License Number (Footer, Contact, Services). Set NEXT_PUBLIC_FSP_NUMBER in Netlify. */
  fspNumber: process.env.NEXT_PUBLIC_FSP_NUMBER ?? "[Insert Number]",
  /** Canonical site URL for SEO and absolute links. */
  siteUrl,
  /** Optional: WhatsApp Business for floating widget. Set NEXT_PUBLIC_WHATSAPP_NUMBER (e.g. 27810487447). */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  /** Optional: Google Analytics measurement ID. Set NEXT_PUBLIC_GA_ID. */
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  /** LinkedIn profile URL (used in Bento hero). Set NEXT_PUBLIC_LINKEDIN_URL. */
  linkedinUrl:
    process.env.NEXT_PUBLIC_LINKEDIN_URL ??
    "https://www.linkedin.com/in/taufeeqessop",
  /** Contact email used in mailto links across the site. */
  contactEmail: "contact@taufeeqessop.co.za",
};
