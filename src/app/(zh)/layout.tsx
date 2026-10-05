import type { ReactNode } from "react";
import "../globals.css";
import { RootShell } from "@/components/root-shell";
import { rootMetadata } from "@/lib/metadata";

export const metadata = rootMetadata("zh");

export default function ChineseLayout({ children }: { children: ReactNode }) {
  return <RootShell locale="zh">{children}</RootShell>;
}
