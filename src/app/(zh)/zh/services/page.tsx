import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { ServicesView } from "@/views/services";

const t = getDictionary("zh").services;
export const metadata = pageMetadata("zh", "/services/", { title: t.metaTitle, description: t.metaDescription });

export default function Page() {
  return <ServicesView locale={"zh"} />;
}
