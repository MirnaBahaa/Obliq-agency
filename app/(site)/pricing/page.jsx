import SiteShell from "@/components/SiteShell";
import Pricing from "@/components/pages/Pricing";

export const metadata = { title: "Pricing | Obliq" };

export default function Page() {
  return (
    <SiteShell current="/pricing">
      <Pricing />
    </SiteShell>
  );
}
