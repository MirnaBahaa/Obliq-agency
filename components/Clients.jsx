import { clientLogos } from "@/lib/assets";

function Track({ hidden }) {
  // Each track holds the 6 logos twice so xPercent -50 → 0 loops seamlessly.
  const logos = [...clientLogos, ...clientLogos];
  return (
    <div className="rt-clients-row" aria-hidden={hidden || undefined}>
      <div className="rt-clients-track">
        {logos.map((src, i) => (
          <div key={i} className="rt-client-card" aria-hidden={i >= clientLogos.length || undefined}>
            <img src={src} alt={i < clientLogos.length ? "Client logo" : ""} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section className="rt-section-bottom-gap">
      <div className="rt-container">
        <div className="rt-clients-main">
          <h1 className="rt-gap-off rt-text-style-h4 rt-clients-title">
            Great brands are built with strategy, creativity, and purpose
          </h1>
          <div className="rt-clients-logos">
            <Track />
            <Track hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
