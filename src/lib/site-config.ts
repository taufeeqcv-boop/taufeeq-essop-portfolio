/**
 * Site-wide config from environment variables.
 * Set these in Netlify: Site configuration → Environment variables.
 * No redeploy needed for value-only changes after the first deploy.
 */
export const SITE_CONFIG = {
  /** FSP License Number (Footer, Contact, Services). Set NEXT_PUBLIC_FSP_NUMBER in Netlify. */
  fspNumber: process.env.NEXT_PUBLIC_FSP_NUMBER ?? "[Insert Number]",
  /** Canonical site URL for SEO and absolute links. Set NEXT_PUBLIC_SITE_URL in Netlify. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "",
  /** Optional: WhatsApp Business for floating widget. Set NEXT_PUBLIC_WHATSAPP_NUMBER (e.g. 27810487447). */
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  /** Optional: Google Analytics measurement ID. Set NEXT_PUBLIC_GA_ID. */
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
};
