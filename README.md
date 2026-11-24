# Obliq Agency

## 1. Description

Obliq Agency is the marketing homepage for **Obliq**, a creative agency covering brand strategy, campaigns, 3D visualization and digital experiences. It is a single, heavily animated landing page built with Next.js and GSAP.

The page has these sections, in order:

1. **Hero**: navbar with a slide-out menu, a giant OBLIQ wordmark rising over a mountain, and a five-card photo collage.
2. **Client logos**: two marquee rows scrolling in opposite directions.
3. **Work**: a 2×2 grid of selected projects.
4. **Services**: four sticky cards that stack and shrink as you scroll.
5. **Brand statement**: text that colors in word by word on scroll, plus animated counters.
6. **Red section**: "Turning ideas into iconic brands".
7. **Video expand**: a video that grows from a small box into a full-screen sticky video, with word-reveal text and floating pills.
8. **Testimonials**: an auto-scrolling marquee that pauses on hover or focus.
9. **Blog**: cards with a red wipe and a "View" button on hover.
10. **FAQ**: an accordion.
11. **Showcase gallery**: a pinned image wall that zooms into a video tile.
12. **Call to action and footer**: they slide up over the gallery.

The page adapts to four screen widths: desktop (992px and up), tablet (991px and below), mobile landscape (767px and below) and mobile portrait (479px and below). Visitors with "reduced motion" turned on get a static layout.

## 2. Languages, Runtime, and Packages

**Languages**
- JavaScript (ES modules) with JSX for React components
- CSS, using custom properties for design tokens; no CSS framework
- HTML, rendered by Next.js

**Runtime**
- Node.js 20.9 or newer, which Next.js 16 requires (developed on Node 24)
- npm (it ships with Node.js)

**Packages** (from `package.json`)

| Package | Version | Purpose |
|---|---|---|
| `next` | ^16.4.6 | Framework (App Router), dev server, production build |
| `react` | ^19.3.1 | UI library |
| `react-dom` | ^19.3.1 | React renderer for the browser |
| `gsap` | ^3.15.1 | Animation engine; its ScrollTrigger plugin drives all the scroll animations |

**External resources loaded at runtime**
- Fonts: *Stack Sans Headline* and *Google Sans* from Google Fonts. *Goli* loads from the asset CDN declared in `app/theme.css`.
- Most images and videos load from an external CDN. The URLs live in one file, `lib/assets.js`. Images that were edited for this project are served locally from `public/images/`.

## 3. Project Setup

**Prerequisites:** Node.js 20.9+ and Git.

```bash
# 1. Clone the repository
git clone https://github.com/MirnaBahaa/Obliq-agency.git
cd Obliq-agency

# 2. Install dependencies
npm install

# 3. Start the development server (http://localhost:3000)
npm run dev
```

To run on a different port, for example when 3000 is already in use:

```bash
npm run dev -- -p 4321
```

**Production build**

```bash
npm run build   # creates an optimized build in .next/
npm run start   # serves the production build on http://localhost:3000
```

**Common edits**
- **Brand name, email, phone, address:** change `lib/brand.js`. Some components still contain contact details directly, so search the `components/` folder for the old values as well.
- **Logo and wordmark:** edit `components/Brand.jsx`. Both are inline SVGs, and the browser-tab icon is `app/icon.svg`.
- **Images and videos:** edit `lib/assets.js`. You can point an entry at a file in `public/images/`, for example `"/images/my-photo.webp"`.
- **Colors, fonts, spacing:** edit the design tokens in the `:root` block at the top of `app/theme.css`.

## 4. Project Structure

```
Obliq-agency/
├── app/
│   ├── layout.jsx          # Root layout: <html>/<head>, fonts, metadata, intro flash guard
│   ├── page.jsx            # The homepage: assembles every section in order
│   ├── theme.css           # Design tokens + all component classes and breakpoints
│   ├── globals.css         # Base resets and layout supplements
│   └── icon.svg            # Browser-tab icon
├── components/
│   ├── Navbar.jsx          # Fixed navbar + slide-out menu panel
│   ├── Hero.jsx            # Wordmark, mountain, photo collage
│   ├── Clients.jsx         # Client-logo marquee rows
│   ├── Work.jsx            # Selected projects grid
│   ├── Services.jsx        # Sticky stacking service cards
│   ├── GreatBrands.jsx     # Scroll-colored statement + counters
│   ├── Accent.jsx          # Red "Turning ideas into iconic brands" section
│   ├── VideoExpand.jsx     # Growing full-screen video + word reveal
│   ├── Testimonials.jsx    # Testimonial marquee
│   ├── Blog.jsx            # Stories & insights cards
│   ├── Faq.jsx             # FAQ accordion
│   ├── Showcase.jsx        # Pinned zooming image gallery
│   ├── CtaFooter.jsx       # Call to action + footer
│   ├── Brand.jsx           # Obliq logo mark + wordmark (SVG)
│   ├── Icons.jsx           # Inline SVG icon set
│   ├── ui.jsx              # Shared pieces: Button, Label, BackgroundVideo
│   └── SiteMotion.jsx      # Client component that starts the animation layer after hydration
├── lib/
│   ├── motion.js           # GSAP + ScrollTrigger animations (intro, scroll effects, marquees, hovers)
│   ├── interactions.js     # Menu, FAQ, blog hover, logo marquee, video controls, newsletter form
│   ├── assets.js           # Image / video URLs
│   └── brand.js            # Brand name and contact details
├── public/
│   └── images/             # Locally hosted, edited images
├── next.config.mjs         # Next.js config (React Strict Mode is off; see below)
├── jsconfig.json           # "@/..." import alias
├── package.json
└── README.md
```

**How the page works:** the page is static markup rendered on the server. After hydration, `components/SiteMotion.jsx` runs `lib/motion.js` and `lib/interactions.js` once. These scripts enhance the DOM directly: they split headings into words, clone marquee items and attach scroll triggers. React Strict Mode is turned off in `next.config.mjs`, because in development it would run that setup twice.

**Class names:** many CSS classes use the `rt-` prefix, and some use `w-`. The CSS and the animation scripts both select elements by these names, so keep them in sync if you rename one.
