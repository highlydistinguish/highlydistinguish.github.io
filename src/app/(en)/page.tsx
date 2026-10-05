import { pageMetadata } from "@/lib/metadata";
import { HomeView } from "@/views/home";

export const metadata = pageMetadata("en", "/");

export default function Page() {
  return <HomeView locale={"en"} />;
}
