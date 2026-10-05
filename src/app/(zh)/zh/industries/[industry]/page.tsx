import type { Metadata } from "next";
import { getDictionary } from "@/content";
import type { IndustrySlug } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { IndustryView } from "@/views/industry";

type Props = { params: Promise<{ industry: IndustrySlug }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getDictionary("zh").industries.map((i) => ({ industry: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const ind = getDictionary("zh").industries.find((i) => i.slug === industry)!;
  return pageMetadata("zh", `/industries/${industry}/`, { title: ind.metaTitle, description: ind.metaDescription });
}

export default async function Page({ params }: Props) {
  const { industry } = await params;
  return <IndustryView locale={"zh"} slug={industry} />;
}
