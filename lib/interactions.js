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
    // React does not render the `muted` attribute on the server, so set it before autoplay kicks in.
    video.muted = true;
    if (reduce()) { video.removeAttribute("autoplay"); video.pause(); }
    else if (video.autoplay && video.paused) video.play().catch(() => {});
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

/* ---------- WORKS FILTER (data-filter tags -> data-filter-list lists) ---------- */
function worksFilter() {
  const tags = document.querySelectorAll("[data-filter]");
  if (!tags.length) return;
  const lists = document.querySelectorAll("[data-filter-list]");
  function show(key) {
    tags.forEach((t) => {
      const on = t.getAttribute("data-filter") === key;
      t.classList.toggle("rt-filter-current", on);
      t.setAttribute("aria-pressed", String(on));
    });
    lists.forEach((l) => l.classList.toggle("rt-is-hidden", l.getAttribute("data-filter-list") !== key));
    const cards = document.querySelectorAll(`[data-filter-list="${key}"] .rt-work-card`);
    if (!reduce()) gsap.fromTo(cards, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out", overwrite: true });
    refreshSoon();
  }
  tags.forEach((t) => {
    t.setAttribute("role", "button");
    t.setAttribute("tabindex", "0");
    t.setAttribute("aria-pressed", String(t.classList.contains("rt-filter-current")));
    t.addEventListener("click", () => show(t.getAttribute("data-filter")));
    t.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(t.getAttribute("data-filter")); }
    });
  });
}

/* ---------- TABS (pricing monthly/yearly, about mission/vision) ---------- */
function tabs() {
  document.querySelectorAll("[data-tab]").forEach((tab) => {
    const group = tab.closest("[data-tabs]") || document;
    const key = tab.getAttribute("data-tab");
    tab.setAttribute("role", "button");
    tab.setAttribute("tabindex", "0");
    function select() {
      group.querySelectorAll("[data-tab]").forEach((t) => {
        const on = t.getAttribute("data-tab") === key;
        t.classList.toggle("rt-tab-current", on);
        if (t.classList.contains("rt-tab-row")) t.classList.toggle("rt-tab-dim", !on);
        t.setAttribute("aria-pressed", String(on));
      });
      const panels = group.querySelectorAll("[data-tab-panel]");
      panels.forEach((p) => p.classList.toggle("rt-is-hidden", p.getAttribute("data-tab-panel") !== key));
      const shown = group.querySelectorAll(`[data-tab-panel="${key}"]`);
      if (!reduce()) gsap.fromTo(shown, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out", overwrite: true });
      refreshSoon();
    }
    tab.addEventListener("click", select);
    tab.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(); }
    });
  });
}

/* ---------- SLIDER (stands in for Webflow's w-slider runtime) ---------- */
function sliders() {
  document.querySelectorAll(".w-slider").forEach((slider) => {
    const mask = slider.querySelector(".w-slider-mask");
    const slides = mask ? Array.from(mask.children).filter((s) => s.classList.contains("w-slide")) : [];
    if (slides.length < 2) return;
    const prev = slider.querySelector(".w-slider-arrow-left");
    const next = slider.querySelector(".w-slider-arrow-right");
    const nav = slider.querySelector(".w-slider-nav");
    const duration = (parseFloat(slider.getAttribute("data-duration")) || 500) / 1000;
    const autoplay = slider.getAttribute("data-autoplay") === "true";
    const delay = parseFloat(slider.getAttribute("data-delay")) || 4000;
    let index = 0;
    let timer;

    // How many slides fit in the mask decides the last reachable position.
    const lastIndex = () => {
      const visible = Math.max(1, Math.round(mask.clientWidth / Math.max(1, slides[0].offsetWidth)));
      return Math.max(0, slides.length - visible);
    };

    const dots = [];
    function buildDots() {
      if (!nav) return;
      nav.innerHTML = "";
      dots.length = 0;
      for (let i = 0; i <= lastIndex(); i++) {
        const d = document.createElement("div");
        d.className = "w-slider-dot";
        d.textContent = String(i + 1);
        d.setAttribute("role", "button");
        d.setAttribute("tabindex", "0");
        d.setAttribute("aria-label", `Show slide ${i + 1}`);
        d.addEventListener("click", () => go(i));
        d.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(i); } });
        nav.appendChild(d);
        dots.push(d);
      }
    }

    function go(i, instant) {
      const max = lastIndex();
      index = i > max ? 0 : i < 0 ? max : i;
      const x = -(slides[index].offsetLeft - slides[0].offsetLeft);
      gsap.to(slides, { x, duration: instant || reduce() ? 0 : duration, ease: "power2.inOut", overwrite: true });
      slides.forEach((s, n) => s.setAttribute("aria-hidden", String(n < index || n > index + (slides.length - 1 - max))));
      dots.forEach((d, n) => {
        d.classList.toggle("w-active", n === index);
        d.setAttribute("aria-pressed", String(n === index));
      });
      restart();
    }

    function restart() {
      if (!autoplay || reduce()) return;
      clearTimeout(timer);
      timer = setTimeout(() => go(index + 1), delay);
    }

    [prev, next].forEach((btn, n) => {
      if (!btn) return;
      btn.setAttribute("role", "button");
      btn.setAttribute("tabindex", "0");
      btn.setAttribute("aria-label", n ? "Next slide" : "Previous slide");
      const step = () => go(index + (n ? 1 : -1));
      btn.addEventListener("click", step);
      btn.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); step(); } });
    });

    // Swipe / drag
    let startX = null;
    mask.addEventListener("pointerdown", (e) => { startX = e.clientX; });
    mask.addEventListener("pointerup", (e) => {
      if (startX == null) return;
      const dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    });

    buildDots();
    go(0, true);
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => { buildDots(); go(Math.min(index, lastIndex()), true); }, 150);
    });
  });
}

/* ---------- PAGE FORMS (contact, password) ---------- */
function pageForms() {
  document.querySelectorAll("form[data-form]").forEach((form) => {
    const wrap = form.closest(".w-form");
    const done = wrap && wrap.querySelector(".w-form-done");
    const fail = (wrap && wrap.querySelector(".w-form-fail")) || form.querySelector(".w-form-fail");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // No backend yet: the password page always reports a wrong password, other forms show their success state.
      if (form.classList.contains("w-password-page")) {
        if (fail) fail.style.display = "block";
        return;
      }
      form.style.display = "none";
      if (done) done.style.display = "block";
      if (fail) fail.style.display = "none";
    });
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
  worksFilter();
  tabs();
  sliders();
  pageForms();
}
