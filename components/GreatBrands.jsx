import { great } from "@/lib/assets";
import { BoltIcon } from "./Icons";

function Counter({ value, label }) {
  return (
    <div className="rt-counter-card">
      <div className="rt-text-style-h4" data-counter>{value}</div>
      <div className="rt-font-b2">{label}</div>
    </div>
  );
}

export default function GreatBrands() {
  return (
    <section className="rt-section-bottom-gap">
      <div className="rt-container">
        <div className="rt-vertical-stack">
          <img className="rt-cloud-decor" src={great.cloud} alt="" loading="lazy" />

          <h2 className="rt-gap-off rt-text-style-h3 rt-col-seven" data-scroll-text="">
            Great brands are never created by chance. They are built through countless intentional decisions
          </h2>

          <div className="rt-great-row">
            <div className="rt-avatar-group">
              <div className="rt-avatar"><img src={great.avatar1} alt="Client portrait of a curly-haired man" loading="lazy" /></div>
              <div className="rt-avatar"><img src={great.avatar2} alt="Client portrait of a smiling man" loading="lazy" /></div>
              <div className="rt-avatar"><div className="rt-icon rt-color-primary w-embed"><BoltIcon /></div></div>
            </div>
            <p className="rt-gap-off rt-body-text-v1">
              We craft experiences that move culture forward. From strategy that cuts through{" "}
              <span className="rt-color-primary">noise to design that demands attention,</span> we build the systems ambitious brands need to win.
            </p>
          </div>

          <div className="rt-counter-row">
            <div className="rt-counter-line" />
            <div className="rt-counter-list">
              <div className="rt-counter-grid rt-counter-grid-offset">
                <Counter value="92,630" label="User engagement score" />
                <Counter value="15+" label="Years of market leadership" />
              </div>
              <div className="rt-counter-grid">
                <Counter value="468" label="Brand transformations" />
                <Counter value="98%" label="Client success rate" />
                <Counter value="342" label="Digital campaigns" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
