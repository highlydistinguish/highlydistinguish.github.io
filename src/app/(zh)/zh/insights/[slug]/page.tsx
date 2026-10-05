import type { Metadata } from "next";
import { getInsight, getInsights } from "@/lib/insights";
import { pageMetadata } from "@/lib/metadata";
import { InsightView } from "@/views/insights";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getInsights("zh").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight("zh", slug)!;
  return pageMetadata("zh", `/insights/${slug}/`, { title: post.title, description: post.description });
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <InsightView locale={"zh"} slug={slug} />;
}
