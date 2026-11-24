import SiteShell from "@/components/SiteShell";
import Licenses from "@/components/pages/Licenses";

export const metadata = { title: "Licenses | Obliq" };

export default function Page() {
  return (
    <SiteShell current="/licenses">
      <Licenses />
    </SiteShell>
  );
}
