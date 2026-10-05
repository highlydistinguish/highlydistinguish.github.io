import type { MetadataRoute } from "next";
import { getDictionary } from "@/content";
import { site } from "@/content/site";
import { getInsights } from "@/lib/insights";
import { localePath } from "@/lib/i18n";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const t = getDictionary("en");
  const paths = [
    "/",
    "/services/",
    "/case-studies/",
    "/insights/",
    "/about/",
    "/contact/",
    "/privacy/",
    "/terms/",
    ...t.industries.map((i) => `/industries/${i.slug}/`),
    ...t.caseStudies.map((c) => `/case-studies/${c.slug}/`),
    ...getInsights("en").map((p) => `/insights/${p.slug}/`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    alternates: {
      languages: {
        "en-AU": `${site.url}${localePath("en", path)}`,
        "zh-Hans": `${site.url}${localePath("zh", path)}`,
      },
    },
  }));
}
