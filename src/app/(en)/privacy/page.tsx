import { pageMetadata } from "@/lib/metadata";
import { LegalView, loadLegal } from "@/views/legal";

export const metadata = pageMetadata("en", "/privacy/", { title: loadLegal("privacy").title });

export default function Page() {
  return <LegalView locale={"en"} doc="privacy" />;
}
