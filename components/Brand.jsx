import { BRAND } from "@/lib/brand";

/**
 * OBLIQ logo mark: a bold ring cut by an oblique bar, the same idea as the Q in the wordmark.
 * Drawn with currentColor; the accent dot uses the site's red.
 */
export function LogoMark({ size = 44, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 44 44" fill="none" role="img" aria-label={`${BRAND.name} logo`} xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="14.5" stroke="#fff" strokeWidth="7" />
      <path d="M26 26L40 40" stroke="#fff" strokeWidth="7" />
      <circle cx="38" cy="7" r="4" style={{ fill: "var(--accent-colors--accent-100)" }} />
    </svg>
  );
}

/**
 * OBLIQ wordmark: geometric letterforms built from 48-unit strokes,
 * sized to fill its container's width (used in the hero and the footer).
 */
export function Wordmark({ className, style }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1400 350"
      fill="none"
      role="img"
      aria-label={BRAND.name}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "block", width: "100%", height: "auto", ...style }}
    >
      <g stroke="currentColor" strokeWidth="48" strokeLinejoin="miter">
        {/* O */}
        <circle cx="175" cy="175" r="151" />
        {/* B */}
        <path d="M414 0V350" />
        <path d="M414 24H530A74 74 0 0 1 530 172H414" />
        <path d="M414 172H545A77 77 0 0 1 545 326H414" />
        {/* L */}
        <path d="M710 0V326H906" />
        {/* I */}
        <path d="M970 0V350" />
        {/* Q */}
        <circle cx="1209" cy="175" r="151" />
        <path d="M1250 215L1366 324" />
      </g>
    </svg>
  );
}
