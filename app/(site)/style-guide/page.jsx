import SiteShell from "@/components/SiteShell";
import StyleGuide from "@/components/pages/StyleGuide";

export const metadata = { title: "Style Guide | Obliq" };

export default function Page() {
  return (
    <SiteShell current="/style-guide">
      <StyleGuide />
    </SiteShell>
  );
}
