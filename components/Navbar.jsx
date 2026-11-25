import { withBase } from "@/lib/path";
import { PhoneIcon } from "./Icons";
import { LogoMark } from "./Brand";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "Company", href: "/about" },
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
  { label: "license", href: "/licenses" },
];

// Transparent variant used over full-bleed banners (Contact, Password).
const OVERLAY = "w-variant-8e9db615-2192-8cf8-5feb-b6329913ce1f";

export default function Navbar({ overlay = false, current = "/" }) {
  const v = overlay ? " " + OVERLAY : "";
  return (
    <header className={`rt-navbar rt-bg-primary rt-index-5${v}`}>
      <div className={`rt-navbar-bar${v}`}>
        <div className="rt-container">
          <div className="rt-navbar-main">
            <div className="rt-navbar-left">
              <a href={withBase("/")} aria-current={current === "/" ? "page" : undefined} className={`rt-navbar-logo w-inline-block${current === "/" ? " w--current" : ""}`}>
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
                <div className={`rt-vertical-line${v}`} />
                <a href="mailto:info@example.com" className="rt-nav-text rt-color-primary rt-footer-link-hover rt-navbar-email">info@example.com</a>
              </div>
            </div>
            <div className="rt-navbar-actions">
              <a href="tel:+18881234560" className={`rt-navbar-call w-inline-block${v}`} aria-label="Call us: Get in touch">
                <div className={`rt-icon rt-color-primary w-embed${v}`}><PhoneIcon /></div>
                <div className={`rt-button-text-v1 rt-call-label${v}`}>Get in touch</div>
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
            <a href={withBase("/")} className="w-inline-block"><LogoMark /></a>
            <button type="button" className="rt-navbar-menu rt-menu-close" data-menu-close>close</button>
          </div>
          <div className="rt-menu-body">
            <nav className="rt-menu-links" aria-label="Primary">
              {menuLinks.map((l) => (
                <div key={l.label} className="rt-menu-row" data-menu-item>
                  <a href={withBase(l.href)} aria-current={current === l.href ? "page" : undefined} className={`rt-menu-link${current === l.href ? " w--current" : ""}`}>{l.label}</a>
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
              <a href={withBase(l.href)} className="rt-menu-foot-link">{l.label}</a>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
