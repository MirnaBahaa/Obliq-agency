import { showcase } from "@/lib/assets";
import { BackgroundVideo } from "./ui";
import { GalleryPlayIcon, VideoPauseIcon, VideoPlayIcon } from "./Icons";

function Tile({ src, alt }) {
  return (
    <div className="rt-show-grid-image">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

/** A direct child of <body> (not a <section>): pinned, then zooms into the video tile. */
export default function Showcase() {
  return (
    <div className="rt-show-frames-box">
      <div className="rt-container">
        <div className="rt-show-grid-wrapper">
          <div className="rt-show-grid">
            <div className="rt-show-grid-col-1 rt-grid-col-1 w-layout-vflex">
              <Tile src={showcase.signage} alt="Illuminated signage mockup on a concrete wall" />
              <Tile src={showcase.tag} alt="Hand holding a branded tag" />
              <Tile src={showcase.can} alt="Drink can with orange slices" />
            </div>

            <div className="rt-show-grid-col-1 rt-grid-col-middle w-layout-vflex">
              <Tile src={showcase.poster} alt="Grande Premiere film poster mockup" />
              <div className="rt-show-grid-image rt-show-grid-video">
                <img scale="image" src={showcase.corridor} alt="Team walking through an office corridor with coffee" loading="lazy" />
                <div className="rt-icon rt-play-icon w-embed"><GalleryPlayIcon /></div>
                <BackgroundVideo
                  src={showcase.video}
                  className="rt-video-fill"
                  controlClassName="rt-video-toggle"
                  label="Pause/play team video"
                  pauseIcon={<VideoPauseIcon />}
                  playIcon={<VideoPlayIcon />}
                />
              </div>
              <Tile src={showcase.card} alt="Business card mockup on concrete blocks" />
            </div>

            <div className="rt-show-grid-col-1 rt-grid-col-2 w-layout-vflex">
              <Tile src={showcase.brochure} alt="Spiral binder brochure mockup" />
              <Tile src={showcase.phone} alt="Phone mockup on an orange chair" />
              <Tile src={showcase.tote} alt="Tote bag on a sea cliff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
