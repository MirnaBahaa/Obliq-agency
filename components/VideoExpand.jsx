import { expandVideo } from "@/lib/assets";
import { BackgroundVideo } from "./ui";
import { TagDot } from "./Icons";

export default function VideoExpand() {
  return (
    <section className="rt-relative rt-overflow-clip">
      <div className="rt-fill-behind is-interactive">
        <div className="rt-sticky-video" data-expand="">
          <BackgroundVideo src={expandVideo} className="rt-bg-video" controlClassName="rt-video-control">
            <div className="rt-overlay-dark" />
          </BackgroundVideo>
        </div>
      </div>
      <div className="rt-fade-overlay" />

      <div className="rt-container">
        <div className="rt-text-scroll-main">
          <p className="rt-gap-off rt-text-style-h4" data-word-reveal="">
            we create bold ideas and <span className="rt-color-tertiary">meaningful</span> brand experiences.{" "}
            <span className="rt-color-tertiary">From strategy</span> and identity to campaigns and{" "}
            <span className="rt-color-tertiary">digital</span> experiences, every detail is{" "}
            <span className="rt-color-tertiary">crafted</span> with purpose and impact
          </p>

          <div className="rt-float-pill rt-float-pill-left rt-tab-display-none">
            <div className="rt-button-text-v1">Explore works</div>
          </div>
          <div className="rt-float-pill rt-float-pill-right rt-tab-display-none">
            <div className="rt-button-text-v1">Explore articles</div>
          </div>

          <div className="rt-tag-row">
            <div className="rt-tag rt-tag-dot">Modern <div className="rt-icon rt-color-primary w-embed"><TagDot /></div></div>
            <div className="rt-tag rt-tag-dot">Creative <div className="rt-icon rt-color-primary w-embed"><TagDot /></div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
