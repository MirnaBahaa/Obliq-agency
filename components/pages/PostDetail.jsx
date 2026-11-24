import { getPost } from "@/lib/posts";

function Img({ image, eager }) {
  if (!image) return null;
  return <img src={image.src} srcSet={image.srcSet} sizes={image.sizes} alt={image.alt} loading={eager ? "eager" : "lazy"} />;
}

function DateTag({ date }) {
  return (
    <div className="rt-blog-date">
      <div className="rt-subtext rt-text-uppercase">[</div>
      <div className="rt-subtext rt-text-uppercase">{date}</div>
      <div className="rt-subtext rt-text-uppercase">]</div>
    </div>
  );
}

export function PostCard({ post }) {
  return (
    <a href={`/post/${post.slug}`} className="rt-post-card w-inline-block">
      <div className="rt-banner-card rt-banner-post">
        <Img image={post.image} />
      </div>
      <div className="rt-post-box">
        <DateTag date={post.date} />
        <div className="rt-body-text-v2 rt-color-primary">{post.title}</div>
      </div>
    </a>
  );
}

/** Blog post template (one per entry in lib/posts.js). The article body is CMS rich text. */
export default function PostDetail({ slug }) {
  const p = getPost(slug);
  const related = p.related.map(getPost).filter(Boolean);
  return (
    <main>
      <section className="rt-page-banner rt-banner-roomy">
        <div className="rt-container">
          <div className="rt-page-banner-heading">
            <div className="rt-text-style-h2">blog details</div>
            <div className="rt-col-five">
              {"[Discover "}
              <span className="rt-color-primary">our detailed insights,</span>
              {" strategic thinking behind modern visual design.]"}
            </div>
          </div>
        </div>
      </section>

      <section className="rt-section-bottom-gap">
        <div className="rt-container">
          <div className="rt-post-layout">
            <div className="rt-post-cover">
              <div className="rt-banner-card rt-banner-cover">
                <Img image={p.cover} eager />
              </div>
            </div>
            <div className="rt-post-main">
              <div className="rt-post-head">
                <div className="rt-vertical-top rt-heading-tight">
                  <DateTag date={p.date} />
                  <h1 className="rt-gap-off rt-text-style-h5">{p.title}</h1>
                </div>
                <div className="rt-stack-sm">
                  <div className="rt-meta-row">
                    <p className="rt-gap-off rt-font-b2 rt-color-primary">Posted by</p>
                    <div className="rt-meta-author">
                      <p className="rt-gap-off rt-font-b2">{p.author.name}</p>
                      <div className="rt-avatar rt-avatar-square"><Img image={p.author.avatar} /></div>
                    </div>
                  </div>
                  <div className="rt-meta-row">
                    <p className="rt-gap-off rt-font-b2 rt-color-primary">Category</p>
                    <p className="rt-gap-off rt-font-b2">{p.category}</p>
                  </div>
                  <div className="rt-meta-row">
                    <p className="rt-gap-off rt-font-b2 rt-color-primary">Posted date</p>
                    <p className="rt-gap-off rt-font-b2">{p.postedDate}</p>
                  </div>
                </div>
              </div>
              <div className="rt-banner-card rt-banner-detail">
                <Img image={p.detailImage} />
              </div>
              <div className="rt-post-article" dangerouslySetInnerHTML={{ __html: p.body }} />
            </div>
          </div>
        </div>
      </section>

      <section className="rt-section-bottom-gap">
        <div className="rt-container">
          <div className="rt-vertical-stack">
            <div className="rt-page-banner-heading">
              <h2 className="rt-gap-off rt-text-style-h2">related blogs</h2>
            </div>
            <div className="w-dyn-list">
              <div role="list" className="rt-post-grid w-dyn-items">
                {related.map((r) => (
                  <div key={r.slug} role="listitem" className="w-dyn-item"><PostCard post={r} /></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
