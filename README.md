# Obliq Agency - Frontend

## 1. Description

Obliq Agency is a responsive, single-page website for **Obliq**, a creative agency, built with Next.js. The homepage includes a hero with a giant OBLIQ wordmark rising over a mountain and a five-card photo collage, two client-logo marquees, a selected-work grid, sticky stacking service cards, a scroll-coloured brand statement with animated counters, a red "Turning ideas into iconic brands" section, a video that expands to full screen, a testimonial marquee, blog cards, an FAQ accordion, a pinned showcase gallery that zooms into a video tile, and a call-to-action and footer that slide up over the gallery.

Motion is built with GSAP and its ScrollTrigger plugin: the hero intro sequence, word-by-word heading reveals, number counters, sticky and pinned scroll scenes, marquees, the expanding video, blog-card hover wipes, and self-drawing button outlines. Desktop, tablet, phone landscape, and phone portrait each have their own layout. The site respects `prefers-reduced-motion` and shows a static layout to visitors who turn motion off.

The brand name and contact details are in `lib/brand.js`. Image and video URLs are in `lib/assets.js`. Section text is written directly in each component in `components/`. The site has no CMS, analytics, or environment variables and runs locally out of the box.

> **Note:** The project details in this README (designer, status, and dates) are real. The content shown *on the website itself* is sample content: the client logos, projects, testimonials, blog posts, statistics, phone number, email, and office address are placeholders. Most photos and videos, and the Goli font, load from a remote CDN. Replace them with Obliq's own content and licensed media before going live.

## 2. Languages, Runtime, and Packages

### Languages and runtime

| Technology              | Version                                                     |
| ----------------------- | ----------------------------------------------------------- |
| JavaScript (ES modules) | Used for all components, animation scripts, and configuration |
| React / JSX             | React `^19.3.1`                                             |
| CSS                     | Plain CSS with custom properties (no CSS framework)         |
| Node.js                 | `20.9` or later (required by Next.js 16; developed on Node 24) |
| npm                     | Use the npm version included with your Node.js installation |

The project uses the exact dependency versions recorded in `package-lock.json`. Version ranges below are from `package.json`.

### Runtime dependencies

| Package     | Version   | Purpose                                                        |
| ----------- | --------- | -------------------------------------------------------------- |
| `next`      | `^16.4.6` | Next.js app framework (App Router), dev server, and production build |
| `react`     | `^19.3.1` | UI library                                                     |
| `react-dom` | `^19.3.1` | React DOM rendering                                            |
| `gsap`      | `^3.15.1` | Animations, including the ScrollTrigger plugin                 |

### Development dependencies

None. The project is plain JavaScript, so it needs no TypeScript compiler or type packages.

Fonts: *Stack Sans Headline* and *Google Sans* are loaded from Google Fonts in `app/layout.jsx`. *Goli* is loaded with `@font-face` from the asset CDN in `app/theme.css`. No font package is needed.

## 3. Project Setup

### Prerequisites

- [Node.js](https://nodejs.org/) **20.9 or later** (npm is included).
- [Git for Windows](https://git-scm.com/download/win) on Windows, or [Git](https://git-scm.com/downloads) for macOS/Linux.
- A terminal: PowerShell on Windows, or Terminal on macOS/Linux.

See the [Next.js installation requirements](https://nextjs.org/docs/app/getting-started/installation#system-requirements) for runtime details.

### Windows (PowerShell)

```powershell
git clone https://github.com/MirnaBahaa/Obliq-agency.git
Set-Location Obliq-agency
npm ci
```

### macOS / Linux (Terminal)

```bash
git clone https://github.com/MirnaBahaa/Obliq-agency.git
cd Obliq-agency
npm ci
```

### Environment variables

None are required. If you add integrations later, put their values in `.env.local` in the project root. Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser, so never put secrets in them. `.env*` files are ignored by Git.

### Run and build

```bash
npm run dev       # Start the development server at http://localhost:3000
npm run build     # Create a production build
npm run start     # Serve the production build
```

If port 3000 is already in use, pick another one: `npm run dev -- -p 4321`.

## 4. Project Structure

| Path                                   | Contents                                                                                                                          |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `app/layout.jsx`                       | Root document, fonts, metadata, and the script that hides the hero and navbar until the intro animation is ready                   |
| `app/page.jsx`                         | Home page: assembles the navbar, all sections, the footer, and the motion layer                                                    |
| `app/icon.svg`                         | Favicon                                                                                                                           |
| `app/theme.css`                        | Base stylesheet: design tokens (colours, type scale, spacing), component classes, and the 991 / 767 / 479px breakpoints            |
| `app/globals.css`                      | Additions: resets, layout fixes, and reduced-motion styles                                                                        |
| `components/Navbar.jsx`                | Fixed navbar and slide-out menu panel                                                                                             |
| `components/Hero.jsx`, `Clients.jsx`, `Work.jsx`, `Services.jsx`, `GreatBrands.jsx`, `Accent.jsx`, `VideoExpand.jsx`, `Testimonials.jsx`, `Blog.jsx`, `Faq.jsx`, `Showcase.jsx`, `CtaFooter.jsx` | One file per page section, in page order |
| `components/SiteMotion.jsx`            | Client component that starts the animation scripts once, after hydration                                                          |
| `components/Brand.jsx`                 | Obliq logo mark and wordmark (inline SVG)                                                                                         |
| `components/ui.jsx`, `Icons.jsx`       | Shared button, bracketed label, background video with play/pause control, and SVG icons                                           |
| `lib/motion.js`                        | All GSAP + ScrollTrigger animation: hero intro, reveals, counters, sticky and pinned scenes, marquees, and hover timelines          |
| `lib/interactions.js`                  | Menu, FAQ accordion, blog hover, logo marquee, video controls, and newsletter form                                                |
| `lib/brand.js`                         | Brand name and contact details                                                                                                    |
| `lib/assets.js`                        | All image and video URLs                                                                                                          |
| `public/images/`                       | Locally hosted, edited images                                                                                                     |
| `next.config.mjs`, `jsconfig.json`     | Next.js configuration (React Strict Mode is off so the animation setup runs only once in development) and the `@/` import alias    |
| `package.json` / `package-lock.json`   | Scripts and dependency definitions/lockfile                                                                                       |

Many CSS classes use the `rt-` and `w-` prefixes. The stylesheets and the animation scripts both select elements by these names, so keep them in sync if you rename one.

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

- Replace the sample site content (client logos, projects, testimonials, blog posts, statistics, contact details) with Obliq's real information. Contact details appear in `lib/brand.js`, `components/Navbar.jsx`, and `components/CtaFooter.jsx`.
- Replace the CDN-hosted photos, videos, and Goli font with licensed media stored in the project.
- Retouch or replace the packaging photo (`public/images/work-packaging.webp`); its wrapper still shows the old brand name.
- Build the pages the navigation already links to: Company, Work, Service, Blog, Pricing, Contact, License, Style guide, Changelog, the 404 and password-protected pages, and the individual project and blog pages.

## 6. Homepage Content

This is the text that appears on the homepage, section by section, as written in `components/`. Sample items (projects, testimonials, statistics, blog posts) are marked as samples.

### Navbar and menu

- **Logo:** Obliq logo mark, links to the homepage.
- **Bar:** social links (Fb - In - dr), the email address, a **Get in touch** call button, and a **menu** button.
- **Menu panel:** Home, Company, Work *(+ CMS)*, Service, Blog *(+ CMS)*, Pricing, Contact. Social links: Facebook, Instagram, Dribble, LinkedIn, x. Contact: phone, email, and address. Footer links: 404, Password protected, style-guide, license.

### Hero

- **Label:** [ Creative agency **based in California** ]
- **Title:** the OBLIQ wordmark, rising over a mountain silhouette.
- **Photo collage (5 cards):** cocktail menu sign, skateboarders on a branded ramp, portrait in a red cap, tote bag on a red chair, yellow t-shirt on a bench.
- **Intro:** "Great brands are never created by chance. They are built through countless intentional decisions toward one vision."
- **Buttons:** Get in touch · Start something bold
- **Subtext:** since **@2010**

### Client logos

- **Heading:** "Great brands are built with strategy, creativity, and purpose"
- Two rows of six client logos, scrolling in opposite directions *(sample logos)*.

### Work

- **Heading:** WORK (the "O" is drawn as a ring) · **Label:** [ 04 **Selected projects** ]
- **Projects** *(samples)*:

| Project               | Description                              |
| --------------------- | ---------------------------------------- |
| Gimbono               | Brand Strategy, Visual Identity          |
| Branding / UI-UX      | Creative branding platform, Web design   |
| Mock-up billboard     | Branding Identity, Billboard             |
| Packaging / Branding  | Fast food brand packaging                |

- **Link:** See all works

### Services

- **Heading:** SERVICE
- **Intro:** "We craft creative experiences that move brands forward. From strategy to visual identity and digital experiences, **we build bold creative solutions** designed to connect, engage, and grow."
- **Button:** Explore services
- **Stacking cards:**

| Service                  | Text                                                                                                                       | Tags                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Brand Strategy           | Great brands are never created by chance. They are built through thoughtful strategy, creative direction, and a clear vision. | Brand Strategy, Typography, Visual Identity                 |
| Marketing Campaigns      | Great campaigns are never created by chance. They are built through powerful concepts, creative storytelling, and a clear vision. | Campaign Strategy, Social Media, Ad Design, Voice & tone    |
| 3D Object Visualization  | Great identities are never created by chance. They are built through thoughtful design, distinctive visuals, and a clear vision. | 3D Modelling, Motion Graphics, Product Render               |
| Digital Experiences      | Great experiences are never created by chance. They are built through strategic design, engaging interactions, and a clear vision. | Frontend Dev, UI-UX Architecture                            |

### Brand statement

- **Heading (colours in word by word on scroll):** "Great brands are never created by chance. They are built through countless intentional decisions"
- **Text:** "We craft experiences that move culture forward. From strategy that cuts through **noise to design that demands attention,** we build the systems ambitious brands need to win."
- **Counters** *(sample figures)*:

| Figure  | Label                       |
| ------- | --------------------------- |
| 92,630  | User engagement score       |
| 15+     | Years of market leadership  |
| 468     | Brand transformations       |
| 98%     | Client success rate         |
| 342     | Digital campaigns           |

### Red section

- **Heading:** "Turning ideas into iconic brands"
- **Text:** "Great brands are never created by chance. They are built through countless intentional decisions working toward one vision."
- **Intro:** "Obliq is a creative studio shaping bold brands and daring ideas."
- **Label:** [ 06 **Selected services** ]

### Video expand

- A video grows from a small box into a full-screen background.
- **Text (revealed word by word):** "we create bold ideas and *meaningful* brand experiences. *From strategy* and identity to campaigns and *digital* experiences, every detail is *crafted* with purpose and impact"
- **Floating pills:** Explore works · Explore articles
- **Tags:** Modern · Creative

### Testimonials

- **Heading:** CLIENTS SAY · **Label:** [ Hear from **our clients** ]
- **Quotes** *(samples, both credited to Levino Thomas, Brand director @northlane, with five stars)*:
  1. "Obliq challenged our thinking, asked the right questions, and pushed the creative beyond what we imagined. The process felt effortless and collaborative, with every idea bringing fresh perspective and meaningful impact to our brand."
  2. "We came to Obliq with a rough idea, and they transformed it into a clear creative direction and stronger identity. They understood our audience deeply, made every decision intentional, and delivered a brand that feels both unexpected and authentically ours."

### Blog

- **Heading:** STORIES AND INSIGHTS · **Label:** [ 350+ **Happy customers** ]
- **Button:** Explore articles
- **Posts** *(samples, all dated August 26, 2026)*:
  1. *(featured)* "Exploring the ideas, trends & strategies behind remarkable brands"
  2. "What made the experience different from working with other agencies?"
  3. "Fresh perspectives to help brands think bigger and move forward"

### FAQ

- **Heading:** FAQ · **Label:** [ Find quick **answers to the questions** we hear most often ]

| Question                                              | Answer                                                                                                                              |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| What services does your creative agency offer?        | We offer branding, web design, digital experiences, content, and creative strategy tailored to help your business stand out and grow. |
| How does your creative process work?                  | We start by understanding your goals, audience, and vision, then shape the strategy, design, and execution into a clear creative direction. |
| Can you design a website from scratch?                | Yes, we can design your website from scratch, creating a unique visual direction, intuitive structure, and engaging experience for your brand. |
| Do you work with existing brands?                     | Absolutely. We work with existing brands to refine their identity, strengthen their digital presence, and create experiences that feel consistent. |
| Do you work with startups and established businesses? | Yes, we work with startups and established businesses, adapting our creative approach to match each brand’s goals, audience, and needs. |
| Can you develop the websites you design?              | Yes, we can develop the websites we design, turning creative concepts into responsive, polished, and high-performing digital experiences. |
| How do we get started?                                | Simply reach out with your project, goals, and ideas. We’ll discuss your needs, explore the right approach, and map out the next steps. |

### Showcase gallery

A pinned wall of nine tiles that zooms into the centre video tile: signage mockup, branded tag, drink can, film poster, team video, business card, spiral brochure, phone mockup, and tote bag.

### Call to action and footer

- **Call to action:** "Ready to create something meaningful that moves your brand forward?" · **Heading:** "Let’s build a brand that moves people" · **Button:** Start something bold
- **Footer:** "Whether you have a project in mind, or just want to say hi." · email and phone *(placeholders)*
- **Quick links:** Homepage, About, Service, Blogs, Portfolio
- **Others:** License, 404 error, Password protected, Style-guide, Changelog
- **Newsletter:** Join our newsletter (email field and submit button)
- **Bottom:** OBLIQ wordmark · Get in touch · © 2026 Obliq. All rights reserved. · Follow us: Facebook, Instagram, X, LinkedIn

## Project Status

| Field              | Value                       |
| ------------------ | --------------------------- |
| Designer           | Mirna                       |
| Tool               | Claude Code                 |
