import { PhoneIcon } from "./Icons";
import { LogoMark } from "./Brand";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/company" },
  { label: "Work", href: "/works", cms: true },
  { label: "Service", href: "/service" },
  { label: "Blog", href: "/blog", cms: true },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const menuSocials = [
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Dribble", href: "https://dribbble.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "x", href: "https://x.com/" },
];

const menuFoot = [
  { label: "404", href: "/404" },
  { label: "Password protected", href: "/401" },
  { label: "style-guide", href: "/style-guide" },
  { label: "license", href: "/license" },
];

export default function Navbar() {
  return (
    <header className="rt-navbar rt-bg-primary rt-index-5">
      <div className="rt-navbar-bar">
        <div className="rt-container">
          <div className="rt-navbar-main">
            <div className="rt-navbar-left">
              <a href="/" aria-current="page" className="rt-navbar-logo w-inline-block w--current">
                <LogoMark />
              </a>
              <div className="rt-navbar-contact">
                <div className="rt-navbar-socials">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener" className="rt-nav-text rt-footer-link-hover">Fb</a>
                  <span className="rt-nav-text">-</span>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener" className="rt-nav-text rt-footer-link-hover">In</a>
                  <span className="rt-nav-text">-</span>
                  <a href="https://dribbble.com/" target="_blank" rel="noopener" className="rt-nav-text rt-footer-link-hover">dr</a>
                </div>
                <div className="rt-vertical-line" />
                <a href="mailto:info@example.com" className="rt-nav-text rt-color-primary rt-footer-link-hover rt-navbar-email">info@example.com</a>
              </div>
            </div>
            <div className="rt-navbar-actions">
              <a href="tel:+18881234560" className="rt-navbar-call w-inline-block" aria-label="Call us: Get in touch">
                <div className="rt-icon rt-color-primary w-embed"><PhoneIcon /></div>
                <div className="rt-button-text-v1 rt-call-label">Get in touch</div>
              </a>
              <button type="button" className="rt-navbar-menu" data-menu-open aria-expanded="false" aria-controls="rt-menu-panel">
                <div>menu</div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide-out menu (animated in lib/interactions.js) */}
      <div className="rt-menu-panel" id="rt-menu-panel" data-menu role="dialog" aria-modal="true" aria-label="Site menu">
        <div className="rt-menu-content">
          <div className="rt-menu-top" data-menu-item>
            <a href="/" className="w-inline-block"><LogoMark /></a>
            <button type="button" className="rt-navbar-menu rt-menu-close" data-menu-close>close</button>
          </div>
          <div className="rt-menu-body">
            <nav className="rt-menu-links" aria-label="Primary">
              {menuLinks.map((l) => (
                <div key={l.label} className="rt-menu-row" data-menu-item>
                  <a href={l.href} className="rt-menu-link">{l.label}</a>
                  {l.cms && <div className="rt-menu-badge">+ CMS</div>}
                </div>
              ))}
            </nav>
            <div className="rt-menu-side">
              <div className="rt-menu-list" data-menu-item>
                {menuSocials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener" className="rt-body-text-v5 rt-footer-link-hover">{s.label}</a>
                ))}
              </div>
              <div className="rt-menu-list" data-menu-item>
                <a href="tel:+18881234560" className="rt-body-text-v5 rt-footer-link-hover">(888) 123 4560</a>
                <a href="mailto:info@example.com" className="rt-body-text-v5 rt-footer-link-hover rt-underline">info@example.com</a>
                <p className="rt-gap-off rt-body-text-v5 rt-menu-address">410 Sandtown, California 94001, USA</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rt-menu-foot" data-menu-item>
          {menuFoot.map((l, i) => (
            <div key={l.label} style={{ display: "contents" }}>
              {i > 0 && <div className="rt-menu-divider" />}
              <a href={l.href} className="rt-menu-foot-link">{l.label}</a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
