import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { AboutView } from "@/views/about";

const t = getDictionary("zh").about;
export const metadata = pageMetadata("zh", "/about/", { title: t.metaTitle, description: t.metaDescription });

export default function Page() {
  return <AboutView locale={"zh"} />;
}
