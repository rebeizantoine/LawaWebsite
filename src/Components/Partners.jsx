import React from "react";
import "../Styles/partners.css"; // Assuming you have a CSS file for styles

const Partners = () => {
  return (
    <div>
      <div className="content-section-4">
        <div className="container-default">
          <div className="container-medium-730px pricing">
            <h2
              data-w-id="65b16b90-da37-f94b-5a89-14a8bfa8b971"
              className="h2 h2-centered"
              style={{
                transform:
                  "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                opacity: 1,
                transformStyle: "preserve-3d",
              }}
            >
              Our Partners
            </h2>
          </div>

          <div className="w-layout-grid grid-partners">
            <a
              id="w-node-_65b16b90-da37-f94b-5a89-14a8bfa8b980-26753ca0"
              href="https://adsellr.com"
              target="_blank"
              className="partners-link w-inline-block"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/643f10469e03642769b61ace_adsellr-logo-green.webp"
                loading="lazy"
                alt="Adsellr logo green"
                className="partners-logo-img partners-logo-img-sm"
              />
            </a>
            <a
              id="w-node-_65b16b90-da37-f94b-5a89-14a8bfa8b986-26753ca0"
              href="#"
              className="partners-link w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/637aaeb8b609f3a19ba4211b_SecretPlace%20Logo%20Black.webp"
                loading="lazy"
                sizes="(max-width: 767px) 100vw, (max-width: 1919px) 200px, 250px"
                srcSet="
                  https://cdn.prod.website-files.com/628d4467de238a5806753c9b/637aaeb8b609f3a19ba4211b_SecretPlace%2520Logo%2520Black-p-500.png 500w,
                  https://cdn.prod.website-files.com/628d4467de238a5806753c9b/637aaeb8b609f3a19ba4211b_SecretPlace%2520Logo%2520Black-p-800.png 800w,
                  https://cdn.prod.website-files.com/628d4467de238a5806753c9b/637aaeb8b609f3a19ba4211b_SecretPlace%2520Logo%2520Black-p-1080.png 1080w,
                  https://cdn.prod.website-files.com/628d4467de238a5806753c9b/637aaeb8b609f3a19ba4211b_SecretPlace%2520Logo%2520Black-p-1600.png 1600w,
                  https://cdn.prod.website-files.com/628d4467de238a5806753c9b/637aaeb8b609f3a19ba4211b_SecretPlace%20Logo%20Black.webp 1983w
                "
                alt="Secret place logo"
                className="partners-logo-img"
              />
            </a>
            <a
              id="w-node-f832ca13-636c-e68c-514e-c40404009519-26753ca0"
              href="https://icecartel.com/"
              className="partners-link w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/63e8dea1be8e5c23d8d90d65_icecartel-new-logo.png"
                loading="lazy"
                alt="Icecartel.com Hip Hop Jewelry"
                className="partners-logo-img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
