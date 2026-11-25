import { withBase } from "@/lib/path";
/* NotFound page content. Generated from the reference markup; class names drive theme CSS and lib/motion.js. */
export default function NotFound() {
  return (
    <main>
      <section className="rt-page-banner rt-banner-flush">
        <div className="rt-container">
          <div className="rt-404-stack">
            <div className="rt-404-mark">
              <svg aria-label="404" role="img" fill="none" preserveAspectRatio="xMidYMid meet" height="100%" width="100%" viewBox="0 0 618 242" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M144.21 5.27998V138.93H180.51V170.28H144.21V236.28H111.21V170.28H-0.000390508L98.9996 5.27998H144.21ZM111.21 138.93V47.52L56.4296 138.93H111.21ZM311.607 241.56C289.827 241.56 269.587 236.17 250.887 225.39C232.407 214.39 217.667 199.65 206.667 181.17C195.887 162.69 190.497 142.56 190.497 120.78C190.497 99 195.887 78.87 206.667 60.39C217.667 41.91 232.407 27.28 250.887 16.5C269.367 5.49999 289.607 -7.98702e-06 311.607 -7.98702e-06C333.387 -7.98702e-06 353.517 5.49999 371.997 16.5C390.477 27.28 405.107 41.91 415.887 60.39C426.887 78.87 432.387 99 432.387 120.78C432.387 142.56 426.887 162.69 415.887 181.17C405.107 199.65 390.477 214.39 371.997 225.39C353.517 236.17 333.387 241.56 311.607 241.56ZM223.497 120.78C223.497 136.84 227.457 151.8 235.377 165.66C243.297 179.3 253.967 190.19 267.387 198.33C281.027 206.25 295.767 210.21 311.607 210.21C327.447 210.21 342.077 206.25 355.497 198.33C368.917 190.19 379.587 179.3 387.507 165.66C395.427 151.8 399.387 136.84 399.387 120.78C399.387 104.72 395.427 89.87 387.507 76.23C379.587 62.37 368.917 51.48 355.497 43.56C342.077 35.42 327.447 31.35 311.607 31.35C295.767 31.35 281.027 35.42 267.387 43.56C253.967 51.48 243.297 62.37 235.377 76.23C227.457 89.87 223.497 104.72 223.497 120.78ZM581.524 5.27998V138.93H617.824V170.28H581.524V236.28H548.524V170.28H437.314L536.314 5.27998H581.524ZM548.524 138.93V47.52L493.744 138.93H548.524Z"></path>
              </svg>
              <div className="rt-404-can">
                <img src="https://cdn.prod.website-files.com/6a9ea602b150d10104e1bb2c/6ad1a8ecf8695709ec580d92_404-crushed-can.webp" loading="lazy" sizes="100vw" srcSet="https://cdn.prod.website-files.com/6a9ea602b150d10104e1bb2c/6ad1a8ecf8695709ec580d92_404-crushed-can-p-500.webp 500w, https://cdn.prod.website-files.com/6a9ea602b150d10104e1bb2c/6ad1a8ecf8695709ec580d92_404-crushed-can.webp 618w" alt="Crushed red Obliq drink can" />
              </div>
            </div>
            <div className="rt-center-heading">
              <h1 className="rt-gap-off rt-text-style-h5 rt-404-title">
                Page not found
              </h1>
              <div className="rt-font-b2 rt-col-text-narrow">
                Oops! it could be you or us, there is no page here. It might have been moved or deleted.
              </div>
              <a href={withBase("/")} className="rt-button w-inline-block">
                <div className="rt-button-text-v1">
                  Back to home
                </div>
                <div className="rt-icon rt-color-primary w-embed">
                  <svg width="9" height="9" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {" "}
                    <path d="M0.750001 9.75L9.75 0.75M9.75 9.75L9.75 0.75L0.75 0.750001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    {" "}
                  </svg>
                </div>
                <div className="rt-button-line w-embed">
                  <svg width="100%" height="100%" fill="none" overflow="visible" aria-hidden="true">
                    <rect width="100%" height="100%" rx="26.5" pathLength="1" stroke="currentColor" strokeWidth="1" strokeDasharray="1" strokeDashoffset="1"></rect>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
