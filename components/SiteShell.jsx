import Navbar from "./Navbar";
import { FooterBlock } from "./CtaFooter";
import SiteMotion from "./SiteMotion";

/** Inner-page frame: navbar, the page's <main>, footer, and the motion layer. */
export default function SiteShell({ current, overlay = false, children }) {
  return (
    <>
      <Navbar current={current} overlay={overlay} />
      {children}
      <FooterBlock current={current} />
      <SiteMotion />
    </>
  );
}
