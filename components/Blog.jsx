import { blog } from "@/lib/assets";
import { Button, Label } from "./ui";

const posts = [
  {
    featured: true,
    img: blog.one,
    alt: "Exploring the ideas, trends and strategies behind remarkable brands",
    title: "Exploring the ideas, trends & strategies behind remarkable brands",
    href: "/post/exploring-the-ideas-trends-strategies-behind-remarkable-brands",
  },
  {
    img: blog.two,
    alt: "Corporate mockup banner with a person walking past",
    title: "“What made the experience different from working with other agencies?",
    href: "/post/what-made-the-experience-different-from-working-with-other-agencies",
  },
  {
    img: blog.three,
    alt: "Hand holding a branded badge",
    title: "Fresh perspectives to help brands think bigger and move forward",
    href: "/post/fresh-perspectives-to-help-brands-think-bigger-and-move-forward",
  },
];

function PostCard({ post }) {
  const f = post.featured;
  return (
    <a href={post.href} className={`rt-blog-card rt-post-card w-inline-block${f ? " rt-blog-card-featured" : ""}`}>
      <img className="rt-full" src={post.img} alt={post.alt} loading="lazy" />
      <div className="rt-blog-card-overlay" />
      <div className={`rt-blog-card-top${f ? " rt-blog-card-top-featured" : ""}`}>
        <div className="rt-blog-date">
          <div className="rt-subtext">[</div>
          <div className="rt-subtext rt-color-primary">August 26, 2026</div>
          <div className="rt-subtext">]</div>
        </div>
        <div className={`rt-blog-card-title${f ? " rt-blog-card-title-featured" : ""}`}>{post.title}</div>
      </div>
      <div className="rt-blog-card-box" aria-hidden="true">
        <div className="rt-blog-card-overlay-inside" />
        <div className="rt-blog-card-overlay-inside" />
        <div className="rt-blog-card-overlay-inside" />
        <div className="rt-view-button">View</div>
      </div>
    </a>
  );
}

export default function Blog() {
  return (
    <section className="rt-small-gutter">
      <div className="rt-container">
        <div className="rt-vertical-main w-layout-vflex">
          <div className="rt-vertical-top rt-heading-stack">
            <h2 className="rt-gap-off rt-col-seven">stories and insights</h2>
            <Label lead="350+" highlight="Happy customers" />
            <div className="rt-blog-button-wrapper">
              <Button href="/blog">Explore articles</Button>
            </div>
          </div>

          <div className="rt-blog-grid">
            <PostCard post={posts[0]} />
            <div className="rt-blog-card-wrapper">
              <PostCard post={posts[1]} />
              <PostCard post={posts[2]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
