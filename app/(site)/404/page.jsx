import SiteShell from "@/components/SiteShell";
import NotFound from "@/components/pages/NotFound";

export const metadata = { title: "Page not found | Obliq" };

export default function Page() {
  return (
    <SiteShell current="/404">
      <NotFound />
    </SiteShell>
  );
}
