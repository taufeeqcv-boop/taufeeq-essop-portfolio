import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    allow: "/",
    sitemap: `${SITE_CONFIG.siteUrl}/sitemap.xml`,
  };
}
