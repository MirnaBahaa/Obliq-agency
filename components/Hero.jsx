import { hero } from "@/lib/assets";
import { Button } from "./ui";
import { Wordmark } from "./Brand";

function Card({ src, alt, eager }) {
  return (
    <div className="rt-banner-card">
      <img src={src} alt={alt} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="rt-banner">
      <div className="rt-container">
        <div className="rt-text-center">
          <div className="rt-label-text">
            [ Creative agency <span className="rt-color-primary">based in California</span> ]
          </div>
        </div>

        <h1 className="rt-banner-title rt-gap-off">
          <Wordmark />
        </h1>

        <div className="rt-banner-mountain">
          <img src={hero.mountain} alt="Dark rocky mountain range silhouette" loading="eager" />
        </div>

        <div className="rt-banner-slider">
          <div className="rt-banner-pair rt-tab-display-none">
            <Card src={hero.one} alt="Cocktail menu sign mockup mounted on a wall" eager />
            <Card src={hero.two} alt="Skateboarders jumping over a branded ramp" eager />
          </div>

          <Card src={hero.three} alt="Portrait of a woman wearing a red cap" eager />

          <div className="rt-banner-aside">
            <div className="rt-banner-intro">
              <p className="rt-gap-off rt-color-primary rt-body-text-v1">
                Great brands are never created by chance. They are built through countless intentional decisions toward one vision.
              </p>
              <Button href="/contact">Get in touch</Button>
            </div>
            <div className="rt-banner-pair rt-banner-pair-end">
              <Card src={hero.four} alt="Branded tote bag mockup on a red chair" eager />
              <Card src={hero.five} alt="Yellow branded t-shirt on a wooden bench" eager />
            </div>
          </div>
        </div>

        <div className="rt-banner-foot">
          <Button href="/contact">Start something bold</Button>
        </div>
        <div className="rt-subtext rt-tab-display-none">
          since <span className="rt-color-primary">@2010</span>
        </div>
      </div>
    </section>
  );
}
