import type { Metadata } from "next";
import "./globals.css";
import { RootShell } from "@/components/root-shell";
import { NotFoundView } from "@/views/not-found";

export const metadata: Metadata = {
  title: "Page not found · Highly Distinguish",
  robots: { index: false },
};

export default function GlobalNotFound() {
  return (
    <RootShell locale="en">
      <NotFoundView locale="en" />
    </RootShell>
  );
}
