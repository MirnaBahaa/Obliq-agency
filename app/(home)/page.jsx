import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Work from "@/components/Work";
import Services from "@/components/Services";
import GreatBrands from "@/components/GreatBrands";
import Accent from "@/components/Accent";
import VideoExpand from "@/components/VideoExpand";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Faq from "@/components/Faq";
import Showcase from "@/components/Showcase";
import CtaFooter from "@/components/CtaFooter";
import SiteMotion from "@/components/SiteMotion";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Work />
        <Services />
        <GreatBrands />
        <Accent />
        <VideoExpand />
        <Testimonials />
        <Blog />
        <Faq />
      </main>
      {/* Showcase + CTA/footer sit outside <main> as direct body-level blocks, like the original. */}
      <Showcase />
      <CtaFooter />
      <SiteMotion />
    </>
  );
}
