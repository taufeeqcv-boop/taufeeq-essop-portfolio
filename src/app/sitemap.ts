import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.siteUrl;
  const now = new Date().toISOString();

  return [
    { url: base, lastModified: now },
    { url: `${base}/about`, lastModified: now },
    { url: `${base}/services`, lastModified: now },
    { url: `${base}/ventures`, lastModified: now },
    { url: `${base}/crisis-interceptor`, lastModified: now },
    { url: `${base}/for-recruiters`, lastModified: now },
    { url: `${base}/resume`, lastModified: now },
    { url: `${base}/contact`, lastModified: now },
    { url: `${base}/thank-you`, lastModified: now },
    { url: `${base}/privacy-policy`, lastModified: now },
    { url: `${base}/paia-manual`, lastModified: now },
  ];
}
