import SiteShell from "@/components/SiteShell";
import Blog from "@/components/pages/Blog";

export const metadata = { title: "Blog | Obliq" };

export default function Page() {
  return (
    <SiteShell current="/blog">
      <Blog />
    </SiteShell>
  );
}
