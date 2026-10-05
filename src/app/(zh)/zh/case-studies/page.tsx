import { getDictionary } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { CaseStudiesIndexView } from "@/views/case-studies";

const t = getDictionary("zh").caseStudyPage;
export const metadata = pageMetadata("zh", "/case-studies/", { title: t.indexTitle, description: t.indexIntro });

export default function Page() {
  return <CaseStudiesIndexView locale={"zh"} />;
}
