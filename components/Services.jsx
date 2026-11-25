import { withBase } from "@/lib/path";
import { service } from "@/lib/assets";
import { Button } from "./ui";
import { CornerDots, CornerStarburst, CornerSwirl, IconButtonArrow, ServiceDots, ServiceSquiggle, ServiceStarburst } from "./Icons";

const cards = [
  {
    bg: "rt-bg-neutral-500",
    title: ["Brand", "Strategy"],
    Icon: ServiceStarburst,
    iconClass: "rt-icon w-embed",
    Corner: CornerStarburst,
    behind: <img className="rt-fill-behind" src={service.lines} alt="" loading="lazy" />,
    text: "Great brands are never created by chance. They are built through thoughtful strategy, creative direction, and a clear vision.",
    tags: ["Brand Strategy", "Typography", "Visual Identity"],
  },
  {
    bg: "rt-bg-accent",
    title: ["Marketing", "Campaigns"],
    Icon: ServiceSquiggle,
    iconClass: "rt-icon rt-color-primary w-embed",
    Corner: CornerSwirl,
    textClass: "rt-color-primary",
    text: "Great campaigns are never created by chance. They are built through powerful concepts, creative storytelling, and a clear vision.",
    tags: ["Campaign Strategy", "Social Media", "Ad Design", "Voice & tone"],
  },
  {
    bg: "rt-bg-primary-accent",
    title: ["3D Object", "Visualization"],
    secondLineMuted: true,
    Icon: ServiceDots,
    iconClass: "rt-icon w-embed",
    behind: (
      <div className="rt-fill-behind rt-card-media">
        <img src={service.mesh} alt="Abstract 3D mesh animation" loading="lazy" />
      </div>
    ),
    text: "Great identities are never created by chance. They are built through thoughtful design, distinctive visuals, and a clear vision.",
    tags: ["3D Modelling", "Motion Graphics", "Product Render"],
  },
  {
    bg: "rt-bg-neutral-300",
    title: ["Digital", "Experiences"],
    Icon: ServiceDots,
    iconClass: "rt-icon w-embed",
    Corner: CornerDots,
    text: "Great experiences are never created by chance. They are built through strategic design, engaging interactions, and a clear vision.",
    tags: ["Frontend Dev", "UI-UX Architecture"],
  },
];

export default function Services() {
  return (
    <section className="rt-section-bottom-gap">
      <div className="rt-container">
        <div className="rt-vertical-top rt-heading-divider">
          <h2 className="rt-gap-off">Service</h2>
        </div>

        <div className="rt-col-eight rt-center-stack">
          <div className="rt-horizontal-between">
            <p className="rt-gap-off rt-body-text-v1 rt-col-five">
              We craft creative experiences that move brands forward. From strategy to visual identity and digital experiences,{" "}
              <span className="rt-color-primary">we build bold creative solutions</span> designed to connect, engage, and grow.
            </p>
            <Button href="/service">Explore services</Button>
          </div>

          <div className="rt-stack-list">
            {cards.map((c) => (
              <div key={c.title.join()} className={`rt-stack-card ${c.bg}`}>
                {c.behind}
                {c.Corner && (
                  <div className="rt-icon rt-color-primary rt-corner-icon w-embed"><c.Corner /></div>
                )}
                <h3 className="rt-gap-off rt-stack-title">
                  {c.title[0]}
                  <br />
                  {c.secondLineMuted ? <span className="rt-color-secondary">{c.title[1]}</span> : c.title[1]}
                </h3>
                <div className="rt-card-bottom">
                  <div className="rt-icon-text">
                    <div className={c.iconClass}><c.Icon /></div>
                    <p className={`rt-gap-off rt-body-text-v1 ${c.textClass || ""}`.trim()}>{c.text}</p>
                  </div>
                  <div className="rt-card-footer">
                    <div className="rt-tag-list">
                      {c.tags.map((t) => <div key={t} className="rt-tag">{t}</div>)}
                    </div>
                    <a href={withBase("/service")} className="rt-icon-button w-inline-block" aria-label={`Explore ${c.title.join(" ")}`}>
                      <div className="rt-icon rt-color-primary w-embed"><IconButtonArrow /></div>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
