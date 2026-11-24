import SiteShell from "@/components/SiteShell";
import About from "@/components/pages/About";

export const metadata = { title: "About | Obliq" };

export default function Page() {
  return (
    <SiteShell current="/about">
      <About />
    </SiteShell>
  );
}
