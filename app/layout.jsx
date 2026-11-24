import "./theme.css";
import "./globals.css";

export const metadata = {
  title: "Obliq – Creative Agency",
  description:
    "Obliq is a creative studio shaping bold brands and daring ideas — brand strategy, campaigns, 3D and digital experiences.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

// Hides the hero + navbar until the GSAP intro has applied its start state (prevents a flash).
// Failsafe: always reveal after 4s even if the motion bundle never loads.
const preloadScript = `(function(){try{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;var d=document.documentElement;d.classList.add('is-loading');setTimeout(function(){d.classList.remove('is-loading')},4000)}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: preloadScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.prod.website-files.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600&family=Stack+Sans+Headline:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
