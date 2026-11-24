import { service, testimonials } from "@/lib/assets";
import { Label } from "./ui";
import { FiveStars, QuoteMarks } from "./Icons";

const items = [
  {
    photo: testimonials.one,
    alt: "Portrait of a smiling man in a cream sweater",
    quote: (
      <>
        <span className="rt-color-primary">Obliq</span> challenged our thinking, asked the right questions, and pushed the creative beyond what we imagined. The{" "}
        <span className="rt-color-primary">process felt effortless and collaborative,</span> with every idea bringing fresh perspective and meaningful impact to our brand.
      </>
    ),
  },
  {
    photo: testimonials.two,
    alt: "Client with wavy dark hair speaking to the camera about her experience",
    quote: (
      <>
        We came to <span className="rt-color-primary">Obliq</span> with a rough idea, and they transformed it into a clear creative direction and stronger identity. They{" "}
        <span className="rt-color-primary">understood our audience deeply, made every decision intentional,</span> and delivered a brand that feels both unexpected and authentically ours.
      </>
    ),
  },
];

export default function Testimonials() {
  return (
    <section className="rt-section">
      <div className="rt-container">
        <div className="rt-vertical-top rt-heading-stack">
          <h2 className="rt-gap-off">Clients Say</h2>
          <Label lead="Hear from" highlight="our clients" />
        </div>
      </div>

      <div className="rt-testimonial-viewport">
        <div className="rt-testimonial-grid">
          {items.map((t, i) => (
            <div key={i} className="rt-testimonial-item">
              <div className="rt-testimonial-photo">
                <img src={t.photo} alt={t.alt} loading="lazy" />
              </div>
              <div className="rt-testimonial-card">
                <img className="rt-fill-behind" src={service.lines} alt="" loading="lazy" />
                <div className="rt-icon rt-color-primary rt-testimonial-quote-icon w-embed"><QuoteMarks /></div>
                <div className="rt-testimonial-quote">
                  <div className="rt-icon w-embed"><FiveStars /></div>
                  <p className="rt-gap-off rt-font-b2">{t.quote}</p>
                </div>
                <div className="rt-testimonial-author">
                  <p className="rt-gap-off rt-testimonial-name">Levino Thomas</p>
                  <p className="rt-gap-off rt-testimonial-role">Brand director @northlane</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
