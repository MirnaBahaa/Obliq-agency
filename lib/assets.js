import { withBase } from "./path";
// Image / video / logo asset URLs.
const A = "https://cdn.prod.website-files.com/6a9ea602b150d10104e1bb2c/";
const B = "https://cdn.prod.website-files.com/6a9ff8b8de6465026a2c5997/";
const V = "https://cdn.prod.website-files.com/6a9ea602b150d10104e1bb2c%2F";

export const hero = {
  mountain: A + "6ab60e882c31e5fd217ee343_home-hero-mountain-image.webp",
  one: A + "6ab612b547ffdc83f33dcc69_home-hero-image-one-card.avif",
  two: withBase("/images/hero-skate.webp"),
  three: withBase("/images/hero-portrait.webp"),
  four: A + "6ab603df1c5f8f3677a6cfd2_home-hero-image-four.avif",
  five: withBase("/images/hero-tshirt.webp"),
};

export const clientLogos = [
  A + "6ab616af7d89cd01fc49dab9_home-client-logo-six.svg",
  A + "6ab603df4da205cdc8480f0b_home-client-logo-one.svg",
  A + "6ab616afa9791b1f2d11d6ba_home-client-logo-two-grey.svg",
  A + "6ab603dfc905185805e3a63a_home-client-logo-three.svg",
  A + "6ab603df89d1a360f5747d55_home-client-logo-four.svg",
  A + "6ab603dfc557cd2f5d2429e0_home-client-logo-five.svg",
];

export const work = {
  gimbono: A + "6ab603dfc8a61abc8d1d0387_f6716b41301bc392366782107d512132_home-work-gimbono-image.webp",
  branding: A + "6ab603df112ddd1321763bf9_home-work-branding-image.avif",
  billboard: A + "6ab603df17b9e5b0b68d6b91_home-work-mock-up-billboard-image-image.avif",
  packaging: withBase("/images/work-packaging.webp"),
};

export const service = {
  lines: A + "6ab61c83ea25c199065b33a7_home-service-card-line-bg.webp",
  mesh: A + "6ab61c84ef0f0f5d1090efe3_0370a7f165b7ad701474890faeda042c_home-service-3d-mesh-animation.avif",
};

export const great = {
  cloud: A + "6ab622e06931639fba5af712_home-great-brand-cloud-image.webp",
  avatar1: A + "6ab603de28385fd73a349745_home-great-brand-client-image-one.avif",
  avatar2: A + "6ab603de28385fd73a349748_home-great-brand-client-image-two.avif",
};

export const redLines = A + "6ad0a30248ceba8bff4eae20_home-red-section-bg-lines.webp";

export const expandVideo = {
  poster: V + "6ad9b05e78a50e2ba7c54372_VtOI0RFyn1t6LuVkY3o7D3iv698_poster.0000000.jpg",
  mp4: V + "6ad9b05e78a50e2ba7c54372_VtOI0RFyn1t6LuVkY3o7D3iv698_mp4.mp4",
  webm: V + "6ad9b05e78a50e2ba7c54372_VtOI0RFyn1t6LuVkY3o7D3iv698_webm.webm",
};

export const testimonials = {
  one: A + "6ab603e5fc9d7e65b3654329_home-one-testimonial-client-image-one.avif",
  two: A + "6ab6268df3f1dcd982ae3bb3_5c1a0f0232c88f113c6f6847105295f2_home-one-testimonial-client-video-two.avif",
};

export const blog = {
  one: B + "6aebed2c5a328e7f534ce4e1_home-one-blog-image-one.webp",
  two: B + "6ab628832159a2087d440e4f_6ab603df28385fd73a349789_home-one-blog-image-two.avif",
  three: withBase("/images/blog-badge.webp"),
};

export const showcase = {
  signage: A + "6a9fd16dcc711ef88872072c_showcase-image-1.avif",
  tag: A + "6ab603de9eca10f6ce5c2e52_home-one-slider-image-two.avif",
  can: withBase("/images/showcase-can.webp"),
  poster: A + "6ab603df89d1a360f5747d42_bfcbf37dc5c2a56345e09cf5c449576c_home-slider-image-five.webp",
  corridor: A + "6ab6250dbcfe2feaeb708feb_a2569a3cf81ab408db95d2110d952b2b_home-corridor-video-animation.avif",
  card: A + "6ab62ac20dc4f96095afce5b_69160f475720a513702c50e32cb79948_home-slider-image-nine.webp",
  brochure: A + "6ab603dfa31d973560f1e9fc_home-slider-image-eight.avif",
  phone: A + "6ab603df28385fd73a349786_home-slider-image-four.avif",
  tote: A + "6ab603df3b3bd2393d9845e9_home-slider-image-seven.avif",
  video: {
    poster: V + "6aebec54e58f55fb6beb9ad6_team-highfive-video_poster.0000000.jpg",
    mp4: V + "6aebec54e58f55fb6beb9ad6_team-highfive-video_mp4.mp4",
    webm: V + "6aebec54e58f55fb6beb9ad6_team-highfive-video_webm.webm",
  },
};
