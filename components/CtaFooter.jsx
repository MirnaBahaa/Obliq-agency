import { BRAND } from "@/lib/brand";
import { LogoMark, Wordmark } from "./Brand";
import { Button } from "./ui";
import { ArrowUpRight, FacebookIcon, InstagramIcon, LinkedInIcon, Starburst53, XIcon } from "./Icons";

const quickLinks = [
  { label: "Homepage", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Blogs", href: "/blog" },
  { label: "Portfolio", href: "/works" },
];
const otherLinks = [
  { label: "License", href: "/licenses" },
  { label: "404 error", href: "/404" },
  { label: "Password protected", href: "/401" },
  { label: "Style-guide", href: "/style-guide" },
  { label: "Changelog", href: "/changelog" },
];
const socials = [
  { label: "Facebook", href: "https://www.facebook.com/", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/", Icon: InstagramIcon },
  { label: "X", href: "https://x.com/", Icon: XIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/", Icon: LinkedInIcon },
];

function LinkCol({ className, title, links, current }) {
  return (
    <div className={`${className} w-layout-vflex`}>
      <div className="rt-body-text-v4 rt-color-primary">{title}</div>
      <div className="rt-link-wrapper w-layout-vflex">
        {links.map((l) => (
          <a key={l.label} href={l.href} aria-current={l.href === current ? "page" : undefined}
            className={`rt-body-text-v5 rt-footer-link-hover${l.href === current ? " w--current" : ""}`}>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

/** Site footer: contact, link columns, newsletter, wordmark and credit line. */
export function Footer({ current = "/" }) {
  return (
    <footer className="rt-footer-section">
      <div className="rt-container">
        <div className="rt-footer-main w-layout-vflex">
          <div className="rt-footer-top w-layout-hflex">
            <div className="rt-footer-col-1 w-layout-vflex">
              <div className="rt-footer-col-1-inside w-layout-vflex">
                <a href="/" className="w-inline-block"><LogoMark /></a>
                <p className="rt-gap-off rt-font-b2">Whether you have a project in mind, or just want to say hi.</p>
              </div>
              <div className="rt-link-wrapper w-layout-vflex">
                <a href="mailto:info@example.com" className="rt-body-text-v2 rt-color-primary rt-footer-link-hover">info@example.com</a>
                <a href="tel:+18881234560" className="rt-other-text-v2 rt-color-primary rt-footer-link-hover">(888) 123 4560</a>
              </div>
            </div>

            <LinkCol className="rt-footer-col-2" title="Quick links" links={quickLinks} current={current} />
            <LinkCol className="rt-footer-col-3" title="Others" links={otherLinks} current={current} />

            <div className="rt-footer-col-4 w-layout-vflex">
              <div className="rt-body-text-v4 rt-color-primary">Join our newsletter</div>
              <div className="w-form">
                <form className="rt-form-v1" data-newsletter noValidate={false}>
                  <label htmlFor="newsletter-email" className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Email</label>
                  <input className="rt-input-v1 w-input" maxLength={256} name="email" placeholder="Enter your email" type="email" id="newsletter-email" required />
                  <div className="rt-button-submit">
                    <div className="rt-icon rt-color-primary w-embed"><ArrowUpRight size={11} /></div>
                    <input type="submit" className="rt-submit w-button" value="Submit" aria-label="Subscribe" />
                  </div>
                </form>
                <div className="w-form-done rt-success" role="status"><div>Thank you! Your submission has been received!</div></div>
                <div className="w-form-fail rt-error" role="alert"><div>Oops! Something went wrong while submitting the form.</div></div>
              </div>
            </div>
          </div>

          <div className="rt-footer-bottom w-layout-vflex">
            <div className="rt-footer-bottom-top w-layout-hflex">
              <div className="rt-footer-bottom-col-1">
                <Wordmark className="rt-color-primary" />
              </div>
              <a href="/contact" className="rt-footer-button w-inline-block">
                <div className="rt-button-text-v2">Get in touch</div>
                <div className="rt-icon rt-color-primary w-embed"><ArrowUpRight size={13} /></div>
              </a>
            </div>

            <div className="rt-footer-bottom-strip w-layout-hflex">
              <div className="rt-small-text rt-footer-strip-text">
                © {BRAND.year} <span className="rt-color-primary">{BRAND.name}</span>. All rights reserved.
              </div>
              <div className="rt-footer-social">
                <div className="rt-small-text">Follow us</div>
                {socials.map(({ label, href, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener" aria-label={label} className="rt-footer-social-link w-inline-block">
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/** Inner pages: the footer on its own, inside the same dark wrapper. */
export function FooterBlock({ current }) {
  return (
    <div className="rt-bg-primary rt-index-5">
      <Footer current={current} />
    </div>
  );
}

/** Homepage: CTA + footer share one wrapper; on desktop it slides up over the pinned showcase gallery. */
export default function CtaFooter() {
  return (
    <div className="rt-bg-primary rt-index-5">
      <section className="rt-section">
        <div className="rt-container">
          <div className="rt-vertical-center w-layout-vflex">
            <div className="rt-vertical-center-top w-layout-vflex">
              <div className="rt-cta-v1-top w-layout-vflex">
                <div className="rt-icon rt-color-tertiary w-embed"><Starburst53 /></div>
                <p className="rt-body-text-v2 rt-color-primary">Ready to create something meaningful that moves your brand forward?</p>
              </div>
              <h2 className="rt-gap-off rt-text-style-h3">Let’s build a brand that moves people</h2>
              <Button href="/contact">Start something bold</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer current="/" />
    </div>
  );
}
