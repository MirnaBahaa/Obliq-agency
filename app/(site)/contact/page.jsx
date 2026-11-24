import SiteShell from "@/components/SiteShell";
import Contact from "@/components/pages/Contact";

export const metadata = { title: "Contact | Obliq" };

export default function Page() {
  return (
    <SiteShell current="/contact" overlay>
      <Contact />
    </SiteShell>
  );
}
