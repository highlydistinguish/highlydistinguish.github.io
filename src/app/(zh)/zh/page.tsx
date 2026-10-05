import { pageMetadata } from "@/lib/metadata";
import { HomeView } from "@/views/home";

export const metadata = pageMetadata("zh", "/");

export default function Page() {
  return <HomeView locale={"zh"} />;
}
