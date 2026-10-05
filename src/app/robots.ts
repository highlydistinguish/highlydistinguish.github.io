import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

// Open to all crawlers, including AI assistants (GPTBot, ClaudeBot,
// PerplexityBot, Google-Extended): being quotable by them is a goal.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
