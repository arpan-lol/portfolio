import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "@/data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SEO_CONFIG.url,
    },
  ];
}
