import { pageMetadata } from "@/lib/metadata";
import { LegalView, loadLegal } from "@/views/legal";

export const metadata = pageMetadata("zh", "/terms/", { title: loadLegal("terms").title });

export default function Page() {
  return <LegalView locale={"zh"} doc="terms" />;
}
