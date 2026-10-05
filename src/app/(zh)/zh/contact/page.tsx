import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { ContactView } from "@/views/contact";

const t = getDictionary("zh").contact;
export const metadata = pageMetadata("zh", "/contact/", { title: t.metaTitle, description: t.metaDescription });

export default function Page() {
  return <ContactView locale={"zh"} />;
}
