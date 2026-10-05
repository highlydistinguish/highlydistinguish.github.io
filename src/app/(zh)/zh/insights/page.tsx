import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { InsightsIndexView } from "@/views/insights";

const t = getDictionary("zh").insightsPage;
export const metadata = pageMetadata("zh", "/insights/", { title: t.title, description: t.metaDescription });

export default function Page() {
  return <InsightsIndexView locale={"zh"} />;
}
