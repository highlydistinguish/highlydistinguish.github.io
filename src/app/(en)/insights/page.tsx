import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { InsightsIndexView } from "@/views/insights";

const t = getDictionary("en").insightsPage;
export const metadata = pageMetadata("en", "/insights/", { title: t.title, description: t.metaDescription });

export default function Page() {
  return <InsightsIndexView locale={"en"} />;
}
