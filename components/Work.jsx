import { work } from "@/lib/assets";
import { Label } from "./ui";
import { WorkArrow } from "./Icons";

const projects = [
  { title: "Gimbono", sub: "Brand Strategy, Visual Identity", img: work.gimbono, alt: "Tablet mockup resting on a terracotta armchair", href: "/work/gimbono-minimalist-business-card" },
  { title: "Branding / UI-UX", sub: "Creative branding platform, Web design", img: work.branding, alt: "Creative branding website mockup", href: "/work/creative-branding-platform-web-design", arrow: true },
  { title: "Mock-up billboard", sub: "Branding Identity, Billboard", img: work.billboard, alt: "Billboard mockup on a rooftop against a blue sky", href: "/work/gimbono-branding-identity-web-design" },
  { title: "Packaging / Branding", sub: "Fast food brand packaging", img: work.packaging, alt: "Fast food packaging with paper cups and a burger", href: "/work/fast-food-brand-packaging" },
];

export default function Work() {
  return (
    <section className="rt-section-bottom-gap">
      <div className="rt-container">
        <div className="rt-vertical-top rt-heading-row">
          <div className="rt-relative">
            {/* "W", ten spaces, "rk" — the ring below draws the "O". */}
            <h2 className="rt-gap-off" aria-label="Work">{"W          rk"}</h2>
            <div className="rt-title-ring" aria-hidden="true" />
          </div>
          <Label lead="04" highlight="Selected projects" />
        </div>

        <div className="rt-work-grid">
          {projects.map((p) => (
            <a key={p.title} href={p.href} className="rt-work-card w-inline-block">
              <div className="rt-work-card-top">
                <div className="rt-work-text">
                  <div className="rt-body-text-v4 rt-color-primary">{p.title}</div>
                  <div className="rt-font-b2">{p.sub}</div>
                </div>
                {p.arrow && <div className="rt-icon rt-color-primary w-embed"><WorkArrow /></div>}
              </div>
              <div className="rt-banner-card">
                <img src={p.img} alt={p.alt} loading="lazy" />
              </div>
            </a>
          ))}
        </div>

        <div className="rt-see-all">
          <a href="/works" className="rt-text-style-h5 rt-link-underline">See all works</a>
        </div>
      </div>
    </section>
  );
}
