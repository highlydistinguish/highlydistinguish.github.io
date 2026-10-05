import type { Metadata } from "next";
import { getDictionary } from "@/content";
import type { CaseStudySlug } from "@/content/types";
import { pageMetadata } from "@/lib/metadata";
import { CaseStudyView } from "@/views/case-studies";

type Props = { params: Promise<{ slug: CaseStudySlug }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getDictionary("zh").caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getDictionary("zh").caseStudies.find((c) => c.slug === slug)!;
  return pageMetadata("zh", `/case-studies/${slug}/`, { title: cs.title, description: cs.metaDescription });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <CaseStudyView locale={"zh"} slug={slug} />;
}
