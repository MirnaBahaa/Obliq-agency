# Obliq Agency - Frontend

## 1. Description

A responsive, single-page website for **Obliq**, a creative agency, built with Next.js and animated with GSAP ScrollTrigger. Sections: hero, client logos, work, services, brand statement with counters, red accent section, expanding video, testimonials, blog, FAQ, showcase gallery, and call to action with footer. It respects `prefers-reduced-motion`.

> **Note:** Projects, testimonials, statistics, blog posts, and contact details on the site are placeholders. Most media loads from a remote CDN.

## 2. Languages, Runtime, and Packages

- **Languages:** JavaScript (JSX), CSS with custom properties
- **Runtime:** Node.js 20.9+ with npm
- **Packages:** `next` ^16.4.6, `react` ^19.3.1, `react-dom` ^19.3.1, `gsap` ^3.15.1

## 3. Project Setup

```bash
git clone https://github.com/MirnaBahaa/Obliq-agency.git
cd Obliq-agency
npm ci
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the build
```

No environment variables are needed.

## 4. Project Structure

| Path          | Contents                                                        |
| ------------- | --------------------------------------------------------------- |
| `app/`        | Layout, homepage, favicon, and stylesheets (`theme.css`, `globals.css`) |
| `components/` | One file per section, plus the logo, icons, and shared UI       |
| `lib/`        | Animations (`motion.js`, `interactions.js`), brand details (`brand.js`), and media URLs (`assets.js`) |
| `public/images/` | Locally hosted images                                        |

## 5. Project Details

| Field            | Value                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------- |
| Project          | Obliq Agency - creative-agency website (frontend)                                       |
| Owner / Designer | Mirna                                                                                   |
| Repository       | [github.com/MirnaBahaa/Obliq-agency](https://github.com/MirnaBahaa/Obliq-agency)        |
| Type             | Marketing website for a creative agency based in California                             |
| Scope            | Homepage (13 parts: navbar, hero, client logos, work, services, brand statement, red accent section, video expand, testimonials, blog, FAQ, showcase gallery, call to action and footer) |
| Layouts          | Desktop (≥992px), tablet (768–991px), phone landscape (480–767px), phone portrait (≤479px) |
| Brand            | Obliq: original logo mark and wordmark; near-black `#111111`, red `#CF3D3D`, peach `#FFA589`, white `#FFFFFF` |
| Typography       | Stack Sans Headline (headings), Goli (body), Google Sans (labels, menu, and form text)  |
| Accessibility    | Keyboard-reachable menu and controls, ARIA labels, alt text, video pause controls, reduced-motion support |
| Started          | November 2026                                                                           |

### Remaining work

- Replace placeholder content and CDN-hosted media with Obliq's own.
- Retouch or replace the packaging photo; its wrapper still shows the old brand name.
- Build the pages the navigation links to.

## Project Status

| Field    | Value       |
| -------- | ----------- |
| Designer | Mirna       |
| Tool     | Claude Code |
