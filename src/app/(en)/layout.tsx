import type { ReactNode } from "react";
import "../globals.css";
import { RootShell } from "@/components/root-shell";
import { rootMetadata } from "@/lib/metadata";

export const metadata = rootMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
