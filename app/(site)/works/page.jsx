import SiteShell from "@/components/SiteShell";
import Works from "@/components/pages/Works";

export const metadata = { title: "Works | Obliq" };

export default function Page() {
  return (
    <SiteShell current="/works">
      <Works />
    </SiteShell>
  );
}
