import { getWork } from "@/lib/works";

const NB = "\u00a0";

function Img({ image, eager }) {
  if (!image) return null;
  return <img src={image.src} srcSet={image.srcSet} sizes={image.sizes} alt={image.alt} loading={eager ? "eager" : "lazy"} />;
}

export function WorkCard({ work, filterKey = false }) {
  return (
    <a href={`/work/${work.slug}`} className="rt-work-card w-inline-block">
      <div className="rt-banner-card rt-work-media">
        <Img image={work.image} />
      </div>
      <div className="rt-work-text">
        <p className="rt-gap-off rt-body-text-v4 rt-color-primary">{work.category}</p>
        <p className="rt-gap-off rt-font-b2">{work.title}</p>
      </div>
      {filterKey && <p className="rt-filter-key">{work.filter}</p>}
    </a>
  );
}

function Split({ s }) {
  return (
    <div className="rt-split-row">
      <div className="rt-detail-aside">
        <div className="rt-tag">
          <p className="rt-gap-off rt-overline rt-color-primary">{s.tag}</p>
        </div>
        <h3 className="rt-gap-off rt-text-style-h6">{s.heading}</h3>
      </div>
      <div className="rt-detail-text">
        {s.paragraphs.map((p, i) => <p key={i} className="rt-gap-off rt-font-b2">{p}</p>)}
        {s.points.length > 0 && (
          <div className="rt-tab-list">
            {s.points.map((p) => (
              <div key={p} className="rt-detail-point">
                <div className="rt-bullet-dot" />
                <p className="rt-gap-off rt-font-b2">{p}</p>
              </div>
            ))}
          </div>
        )}
        {s.quote && (
          <div className="rt-detail-quote">
            <p className="rt-gap-off rt-font-b2">{s.quote}</p>
          </div>
        )}
      </div>
    </div>
  );
}

/** Work detail template (one per entry in lib/works.js). */
export default function WorkDetail({ slug }) {
  const w = getWork(slug);
  const related = w.related.map(getWork).filter(Boolean);
  const [first, second] = w.splits;
  return (
    <main>
      <section className="rt-page-banner">
        <div className="rt-container">
          <div className="rt-stack-lg">
            <div className="rt-stack-sm">
              {/* "W", nbsp run, "rk Details": the ring below draws the "O". */}
              <h1 aria-label="Work details" className="rt-gap-off rt-text-style-h2">
                W{NB.repeat(9)}rk Details
                <span className="rt-title-ring" />
              </h1>
              <p className="rt-gap-off rt-body-text-v2">
                [ Project showcase below to learn how we bring design to life through strategy and creativity. ]
              </p>
            </div>
            <div className="rt-detail-split">
              <div className="rt-banner-card rt-detail-cover">
                <Img image={w.cover} eager />
              </div>
              <div className="rt-detail-panel">
                <div className="rt-detail-head">
                  <div className="rt-tag-list">
                    <p className="rt-gap-off rt-overline">[</p>
                    <p className="rt-gap-off rt-overline">{w.detailCategory}</p>
                    <p className="rt-gap-off rt-overline">]</p>
                  </div>
                  <h2 className="rt-gap-off rt-text-style-h5">{w.detailTitle}</h2>
                  <p className="rt-gap-off rt-font-b2">{w.intro}</p>
                </div>
                <div>
                  {w.facts.map(([label, value]) => (
                    <div key={label} className="rt-detail-row">
                      <p className="rt-gap-off rt-font-b2 rt-color-primary">{label}</p>
                      <p className="rt-gap-off rt-font-b2">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rt-section-bottom-gap">
        <div className="rt-container">
          <div className="rt-vertical-stack">
            <div className="rt-detail-body">
              <div className="rt-stack-md">
                <h2 className="rt-gap-off rt-text-style-h5">{w.heading}</h2>
                <div className="rt-accent-grid">
                  {w.gallery.map((g, i) => (
                    <div key={i} className="rt-banner-card rt-detail-gallery"><Img image={g} /></div>
                  ))}
                </div>
              </div>

              {first && <Split s={first} />}

              <div className="rt-detail-stats">
                {w.stats.map(([value, label, note]) => (
                  <div key={label} className="rt-detail-stat">
                    <p data-counter="" className="rt-gap-off rt-text-style-h5">{value}</p>
                    <p className="rt-gap-off rt-body-text-v2 rt-color-primary">{label}</p>
                    <p className="rt-gap-off rt-overline">{note}</p>
                  </div>
                ))}
              </div>

              <div className="rt-banner-card rt-detail-wide"><Img image={w.wide} /></div>

              {second && <Split s={second} />}

              <div className="rt-detail-testimonial">
                <div className="rt-quote-icon">
                  <div className="w-embed">
                    <svg width="100%" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M0 0H17V17C17 25 13 30 6 32V25C9 24 10.5 21.5 10.5 17H0V0Z" fill="currentColor" />
                      <path d="M23 0H40V17C40 25 36 30 29 32V25C32 24 33.5 21.5 33.5 17H23V0Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <div className="rt-detail-testimonial-content">
                  <p className="rt-gap-off rt-font-b2">{w.testimonial.quote}</p>
                  <div className="rt-author-row">
                    <div className="rt-author-line" />
                    <p className="rt-gap-off rt-body-text-v2 rt-color-primary">{w.testimonial.author}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rt-stack-md">
              <h2 className="rt-gap-off rt-text-style-h2">Related works</h2>
              <div className="w-dyn-list">
                <div role="list" className="rt-accent-grid w-dyn-items">
                  {related.map((r) => (
                    <div key={r.slug} role="listitem" className="w-dyn-item"><WorkCard work={r} /></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
