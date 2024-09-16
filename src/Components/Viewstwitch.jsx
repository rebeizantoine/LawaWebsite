import React, { useState } from "react";
import Multipleboxesmodal from "./Multipleboxesmodal"; // Adjust path as necessary
import "../Styles/singleservicettwitchlike.css";
const Viewstwitch = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    console.log("Opening Modal...");
    setModalOpen(true);
  };

  const handleModalClose = () => {
    console.log("Closing Modal...");
    setModalOpen(false);
  };

  return (
    <div className="hero-section-servicestwitch">
      <div className="flex-containertwitch">
        <div className="w-layout-grid hero-grid-wrappertwitch">
          <div className="hero-text-blocktwitch">
            <h1 className="hero-h1twitch">
              Buy Twitch <span className="title-span-greentwitch"> Views</span>
            </h1>
            <p className="hero-paragraphtwitch">
              <strong className="bold-text-4twitch">
                Build social proof for your online business or grow your
                influencer page with our Views, instant delivery.
              </strong>
              <br />
            </p>
            <div className="div-review-section-herotwitch">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/63ff4056e10165cf63568681_Star-icon-2.svg"
                loading="lazy"
                alt="ratings icon"
                className="img-review-star"
              />
              <p className="p-reviews-herotwitch">
                Rated <span className="text-span-15twitch">4.8/5 </span> from
                over 1000+ reviews
              </p>
            </div>
            <div className="div-hero-bulletstwitch">
              <div className="div-hero-bullettwitch">
                <img
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                  loading="lazy"
                  alt="Checkmark green icon"
                />
                <p className="p-hero-bullettwitch">
                  High Quality views, Instant Delivery
                </p>
              </div>
              <div className="div-hero-bullettwitch">
                <img
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                  loading="lazy"
                  alt="Checkmark green icon"
                />
                <p className="p-hero-bullettwitch">Up to 1M views per post</p>
              </div>
              <div className="div-hero-bullettwitch">
                <img
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                  loading="lazy"
                  alt="Checkmark green icon"
                />
                <p className="p-hero-bullettwitch">
                  Card & Crypto payments available
                </p>
              </div>
            </div>
          </div>
          <div className="hero-pricing-wrappertwitch">
            <div className="hero-pricing-containertwitch">
              <div className="pricing-header-copytwitch">Starting from</div>
              <div className="green-line-pricingtwitch"></div>
              <div className="div-pricingtwitch">
                <div className="p-price-lgtwitch">$0.008</div>
                <div className="pricing-secondary-texttwitch">/ View</div>
              </div>
              <div className="div-pricing-bulletstwitch">
                <div className="div-bulletstwitch">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-smtwitch">
                    Up to 250,000 Followers per account
                  </p>
                </div>
                <div className="div-bulletstwitch">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-smtwitch">100% Instant Delivery</p>
                </div>
                <div className="div-bulletstwitch">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-smtwitch">
                    Card & Crypto payments available
                  </p>
                </div>
                <div className="div-bulletstwitch">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-smtwitch">
                    No signup or login required
                  </p>
                </div>
              </div>
              <button
                className="button-pricing w-button"
                onClick={handleModalOpen}
                aria-label="Choose a package"
              >
                Choose A Package
              </button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <Multipleboxesmodal onClose={handleModalClose} />}
    </div>
  );
};

export default Viewstwitch;
