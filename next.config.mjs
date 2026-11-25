// GITHUB_PAGES=true builds a fully static copy of the site into `out/`, served from the
// https://mirnabahaa.github.io/Obliq-agency/ sub-path. Without it, the app runs normally (npm run dev / build / start).
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/Obliq-agency" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict Mode stays off: in development it would run the DOM-enhancing motion setup twice.
  reactStrictMode: false,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isPages && {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

export default nextConfig;
