/* Interactive UI behaviours:
   menu open/close, FAQ accordion, blog card hover wipe, client-logo marquee,
   background-video pause/play controls, and the newsletter form states. */
import { gsap, ScrollTrigger } from "./motion";

const reduce = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Debounced ScrollTrigger refresh for when layout height changes (FAQ open/close). */
let refreshTimer;
function refreshSoon() {
  clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 120);
}

/* ---------- MENU ---------- */
function menu() {
  const panel = document.querySelector("[data-menu]");
  const openBtn = document.querySelector("[data-menu-open]");
  const closeBtn = panel && panel.querySelector("[data-menu-close]");
  if (!panel || !openBtn || !closeBtn) return;
  const items = panel.querySelectorAll("[data-menu-item]");
  const CLIP = "--_layout---menu--clip";
  let tl = null;
  let isOpen = false;

  function open() {
    if (isOpen) return;
    isOpen = true;
    openBtn.setAttribute("aria-expanded", "true");
    if (tl) tl.kill();
    if (reduce()) {
      gsap.set(panel, { display: "flex", [CLIP]: "0%", overflowY: "auto" });
      gsap.set(items, { opacity: 1, y: 0 });
    } else {
      tl = gsap.timeline()
        .set(panel, { display: "flex", overflowY: "hidden" }, 0)
        .fromTo(panel, { [CLIP]: "100%" }, { [CLIP]: "0%", duration: 0.9, ease: "power3.inOut" }, 0)
        .fromTo(items, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" }, 0.45)
        .set(panel, { overflowY: "auto" }, 0.95);
    }
    closeBtn.focus({ preventScroll: true });
  }

  function close() {
    if (!isOpen) return;
    isOpen = false;
    openBtn.setAttribute("aria-expanded", "false");
    if (tl) tl.kill();
    if (reduce()) {
      gsap.set(panel, { display: "none", [CLIP]: "100%" });
    } else {
      tl = gsap.timeline()
        .to(items, { opacity: 0, y: -12, duration: 0.3, stagger: { each: 0.03, from: "end" }, ease: "power2.in" }, 0)
        .to(panel, { [CLIP]: "100%", duration: 0.7, ease: "power3.inOut" }, 0.47)
        .set(panel, { display: "none" }, 1.18);
    }
    openBtn.focus({ preventScroll: true });
  }

  openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
}

/* ---------- FAQ ---------- */
function faq() {
  document.querySelectorAll(".rt-faq").forEach((item) => {
    const answer = item.querySelector('[faq="answer"]');
    const icon = item.querySelector(".rt-faq-icon");
    if (!answer) return;
    const tl = gsap.timeline({ paused: true, onComplete: refreshSoon, onReverseComplete: refreshSoon })
      .fromTo(answer, { height: 0 }, { height: "auto", duration: 0.5, ease: "power2.inOut" }, 0);
    if (icon) tl.fromTo(icon, { rotation: 0 }, { rotation: 180, duration: 0.5, ease: "power2.inOut" }, 0);
    let isOpen = false;
    function toggle() {
      isOpen = !isOpen;
      item.setAttribute("aria-expanded", String(isOpen));
      if (reduce()) tl.progress(isOpen ? 1 : 0).pause();
      else if (isOpen) tl.play(); else tl.reverse();
      if (reduce()) refreshSoon();
    }
    item.addEventListener("click", toggle);
    item.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });
}

/* ---------- BLOG CARD HOVER ---------- */
function blogHover() {
  if (reduce() || !window.matchMedia("(hover: hover)").matches) return;
  document.querySelectorAll(".rt-blog-card").forEach((card) => {
    const panels = card.querySelectorAll(".rt-blog-card-overlay-inside");
    const view = card.querySelector(".rt-view-button");
    gsap.set(panels, { x: 0, yPercent: 100 });
    gsap.set(view, { scale: 0 });
    const tl = gsap.timeline({ paused: true })
      .to(panels, { yPercent: 0, duration: 0.39, stagger: { each: 0.1, from: "end" }, ease: "power2.inOut" }, 0)
      .to(view, { scale: 1, duration: 0.5, ease: "power3.out" }, 0.3)
      .to(panels, { yPercent: -100, duration: 0.39, stagger: { each: 0.1, from: "end" }, ease: "power2.inOut" }, 0.59);
    card.addEventListener("mouseenter", () => tl.play());
    card.addEventListener("mouseleave", () => tl.reverse());
  });
}

/* ---------- CLIENT LOGO MARQUEE ---------- */
function logoMarquee() {
  if (reduce()) return;
  const tracks = gsap.utils.toArray(".rt-clients-track");
  if (!tracks.length) return;
  gsap.matchMedia().add({ desktop: "(min-width: 992px)", tablet: "(max-width: 991px)" }, (ctx) => {
    const duration = ctx.conditions.desktop ? 29.76 : 21.6;
    tracks.forEach((track, i) => {
      const reverse = i % 2 === 1;
      gsap.fromTo(track, { xPercent: reverse ? -50 : 0 }, { xPercent: reverse ? 0 : -50, duration, ease: "none", repeat: -1 });
    });
  });
}

/* ---------- BACKGROUND VIDEO CONTROLS ---------- */
function videoControls() {
  document.querySelectorAll(".w-background-video").forEach((wrap) => {
    const video = wrap.querySelector("video");
    const btn = wrap.querySelector(".w-background-video--control");
    if (!video || !btn) return;
    const [pauseState, playState] = btn.children;
    function sync() {
      if (pauseState) pauseState.hidden = video.paused;
      if (playState) playState.hidden = !video.paused;
      btn.setAttribute("aria-pressed", String(video.paused));
    }
    if (reduce()) { video.removeAttribute("autoplay"); video.pause(); }
    video.addEventListener("play", sync);
    video.addEventListener("pause", sync);
    btn.addEventListener("click", (e) => {
      // Clones inside the marquee are handled by the capture listener in motion.js.
      if (btn.closest('[aria-hidden="true"]')) return;
      e.preventDefault();
      if (video.paused) video.play(); else video.pause();
    });
    sync();
  });
}

/* ---------- NEWSLETTER FORM ---------- */
function newsletter() {
  document.querySelectorAll("form[data-newsletter]").forEach((form) => {
    const wrap = form.closest(".w-form");
    const done = wrap && wrap.querySelector(".w-form-done");
    const fail = wrap && wrap.querySelector(".w-form-fail");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = form.querySelector('input[type="email"]');
      const ok = email && email.checkValidity();
      if (ok) {
        form.style.display = "none";
        if (done) done.style.display = "block";
        if (fail) fail.style.display = "none";
      } else if (fail) {
        fail.style.display = "block";
      }
    });
  });
}

export default function runSiteInteractions() {
  menu();
  faq();
  blogHover();
  logoMarquee();
  videoControls();
  newsletter();
}
