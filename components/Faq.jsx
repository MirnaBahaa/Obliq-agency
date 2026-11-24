import { FaqChevron } from "./Icons";

const faqs = [
  ["What services does your creative agency offer?", "We offer branding, web design, digital experiences, content, and creative strategy tailored to help your business stand out and grow."],
  ["How does your creative process work?", "We start by understanding your goals, audience, and vision, then shape the strategy, design, and execution into a clear creative direction."],
  ["Can you design a website from scratch?", "Yes, we can design your website from scratch, creating a unique visual direction, intuitive structure, and engaging experience for your brand."],
  ["Do you work with existing brands?", "Absolutely. We work with existing brands to refine their identity, strengthen their digital presence, and create experiences that feel consistent."],
  ["Do you work with startups and established businesses?", "Yes, we work with startups and established businesses, adapting our creative approach to match each brand’s goals, audience, and needs."],
  ["Can you develop the websites you design?", "Yes, we can develop the websites we design, turning creative concepts into responsive, polished, and high-performing digital experiences."],
  ["How do we get started?", "Simply reach out with your project, goals, and ideas. We’ll discuss your needs, explore the right approach, and map out the next steps."],
];

export default function Faq() {
  return (
    <section className="rt-section-bottom-gap">
      <div className="rt-container">
        <div className="rt-bg-primary-accent rt-faq-box">
          <div className="rt-faq-main w-layout-hflex">
            <div className="rt-faq-left w-layout-vflex">
              <h2 className="rt-gap-off">faq</h2>
              <p className="rt-gap-off rt-label-text rt-faq-description">
                [ Find quick <span className="rt-color-primary">answers to the questions</span> we hear most often ]
              </p>
            </div>
            <div className="rt-faq-right w-layout-vflex">
              {faqs.map(([q, a], i) => (
                <div key={q} className="rt-faq" role="button" tabIndex={0} aria-expanded="false" aria-controls={`faq-answer-${i}`}>
                  <div className="rt-faq-toggle w-layout-hflex">
                    <div className="rt-body-text-v2 rt-color-primary">{q}</div>
                    <div className="rt-icon rt-faq-icon w-embed"><FaqChevron /></div>
                  </div>
                  <div className="rt-overflow-hidden" faq="answer" id={`faq-answer-${i}`}>
                    <div className="rt-faq-answer">
                      <p className="rt-gap-off rt-font-b2">{a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
