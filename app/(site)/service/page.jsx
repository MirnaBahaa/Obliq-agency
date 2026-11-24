import SiteShell from "@/components/SiteShell";
import Service from "@/components/pages/Service";

export const metadata = { title: "Service | Obliq" };

export default function Page() {
  return (
    <SiteShell current="/service">
      <Service />
    </SiteShell>
  );
}
