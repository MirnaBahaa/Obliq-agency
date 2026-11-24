import "./site.css";
import "../globals.css";
import "./pages.css";

/* Inner pages use the full site stylesheet (page banners, detail pages, forms, sliders, rich text). */
export default function SiteLayout({ children }) {
  return children;
}
