import "./(site)/site.css";
import "./globals.css";
import "./(site)/pages.css";
import SiteShell from "@/components/SiteShell";
import NotFound from "@/components/pages/NotFound";

/* Any unknown URL renders the 404 design. */
export default function NotFoundPage() {
  return (
    <SiteShell current="/404">
      <NotFound />
    </SiteShell>
  );
}
