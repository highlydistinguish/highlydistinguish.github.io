import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { ContactView } from "@/views/contact";

const t = getDictionary("en").contact;
export const metadata = pageMetadata("en", "/contact/", { title: t.metaTitle, description: t.metaDescription });

export default function Page() {
  return <ContactView locale={"en"} />;
}
