import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import WorkDetail from "@/components/pages/WorkDetail";
import { works, getWork } from "@/lib/works";

export const dynamicParams = false;

export function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const w = getWork(slug);
  return { title: w ? `${w.title} | Obliq` : "Work | Obliq", description: w?.intro };
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!getWork(slug)) notFound();
  return (
    <SiteShell current="/works">
      <WorkDetail slug={slug} />
    </SiteShell>
  );
}
