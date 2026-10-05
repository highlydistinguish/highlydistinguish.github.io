import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { ServicesView } from "@/views/services";

const t = getDictionary("en").services;
export const metadata = pageMetadata("en", "/services/", { title: t.metaTitle, description: t.metaDescription });

export default function Page() {
  return <ServicesView locale={"en"} />;
}
