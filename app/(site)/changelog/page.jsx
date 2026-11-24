import SiteShell from "@/components/SiteShell";
import Changelog from "@/components/pages/Changelog";

export const metadata = { title: "Changelog | Obliq" };

export default function Page() {
  return (
    <SiteShell current="/changelog">
      <Changelog />
    </SiteShell>
  );
}
