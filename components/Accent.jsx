import { redLines } from "@/lib/assets";
import { ArrowPillIcon, Starburst53 } from "./Icons";

export default function Accent() {
  return (
    <section className="rt-accent-section">
      <img className="rt-fill-behind rt-tab-display-none" src={redLines} alt="" loading="lazy" />
      <div className="rt-container">
        <div className="rt-accent-main">
          <div className="rt-accent-top">
            <h2 className="rt-accent-title" data-scroll-text="--accent-colors--accent-300">
              Turning ideas
              <br />
              into iconic brands
            </h2>
            <div className="rt-arrow-pill rt-tab-display-none" aria-hidden="true">
              <div className="rt-icon rt-color-primary w-embed"><ArrowPillIcon /></div>
            </div>
            <p className="rt-gap-off rt-color-primary rt-accent-desc">
              Great brands are never created by chance. They are built through countless intentional decisions working toward one vision.
            </p>
          </div>

          <div className="rt-accent-grid rt-tab-display-none">
            <div className="rt-accent-intro">
              <div className="rt-icon rt-color-tertiary w-embed"><Starburst53 /></div>
              <p className="rt-gap-off rt-color-primary rt-body-text-v1">
                Obliq is a creative studio shaping bold brands and daring ideas.
              </p>
            </div>
            {/* The next section's video starts exactly here and grows to full screen. */}
            <div className="rt-accent-video">
              <div className="rt-overlay-dark" />
            </div>
            <p className="rt-gap-off rt-label-text rt-accent-label">
              [ 06 <span className="rt-color-primary">Selected services</span> ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
