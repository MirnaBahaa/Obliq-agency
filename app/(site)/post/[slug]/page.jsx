import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import PostDetail from "@/components/pages/PostDetail";
import { posts, getPost } from "@/lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = getPost(slug);
  return { title: p ? `${p.title} | Obliq` : "Blog | Obliq" };
}

export default async function Page({ params }) {
  const { slug } = await params;
  if (!getPost(slug)) notFound();
  return (
    <SiteShell current="/blog">
      <PostDetail slug={slug} />
    </SiteShell>
  );
}
