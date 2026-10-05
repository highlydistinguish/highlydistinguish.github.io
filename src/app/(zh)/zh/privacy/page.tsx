import { pageMetadata } from "@/lib/metadata";
import { LegalView, loadLegal } from "@/views/legal";

export const metadata = pageMetadata("zh", "/privacy/", { title: loadLegal("privacy").title });

export default function Page() {
  return <LegalView locale={"zh"} doc="privacy" />;
}
