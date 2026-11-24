import SiteShell from "@/components/SiteShell";
import Password from "@/components/pages/Password";

export const metadata = { title: "Password | Obliq" };

export default function Page() {
  return (
    <SiteShell current="/401" overlay>
      <Password />
    </SiteShell>
  );
}
