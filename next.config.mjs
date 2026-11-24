/** @type {import('next').NextConfig} */
const nextConfig = {
  // The GSAP motion layer mutates the static DOM once (word splitting, marquee clones).
  // Strict mode's double-mount in dev would run it twice, so it is off.
  reactStrictMode: false,
};

export default nextConfig;
