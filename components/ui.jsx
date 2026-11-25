import { withBase } from "@/lib/path";
import { ArrowUpRight, ButtonLine, VideoPauseIcon, VideoPlayIcon } from "./Icons";

/** .rt-button pill CTA: label + 9px arrow + self-drawing outline (motion section 12). */
export function Button({ href, children }) {
  return (
    <a href={withBase(href)} className="rt-button w-inline-block">
      <div className="rt-button-text-v1">{children}</div>
      <div className="rt-icon rt-color-primary w-embed"><ArrowUpRight size={9} /></div>
      <div className="rt-button-line w-embed"><ButtonLine /></div>
    </a>
  );
}

/** Bracketed label: [ Lead + <white>highlight</white> ] */
export function Label({ lead, highlight, tail = "", className = "" }) {
  return (
    <p className={`rt-gap-off rt-label-text ${className}`.trim()}>
      [ {lead}{lead && highlight ? " " : ""}
      {highlight && <span className="rt-color-primary">{highlight}</span>}
      {tail} ]
    </p>
  );
}

/** Muted, autoplaying, looping background video with a pause/play control. */
export function BackgroundVideo({ src, className = "", controlClassName = "", children, label = "Pause/play background video", pauseIcon, playIcon }) {
  return (
    <div className={`w-background-video w-background-video-atom ${className}`.trim()}>
      <video autoPlay loop muted playsInline poster={src.poster} preload="metadata" style={{ backgroundImage: `url("${src.poster}")` }}>
        <source src={src.mp4} type="video/mp4" />
        <source src={src.webm} type="video/webm" />
      </video>
      {children}
      <button type="button" aria-label={label} className={`w-background-video--control ${controlClassName}`.trim()}>
        <div className="rt-video-toggle-state">{pauseIcon || <VideoPauseIcon />}</div>
        <div className="rt-video-toggle-state" hidden>{playIcon || <VideoPlayIcon />}</div>
      </button>
    </div>
  );
}
