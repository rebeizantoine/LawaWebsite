import React, { useState } from "react";
import Multipleboxesmodal from "../Components/Multipleboxesmodal"; // Adjust path as necessary
import "../Styles/singleservice.css";

const Singleservice = () => {
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
    <div className="hero-section-services">
      <div className="flex-container">
        <div className="w-layout-grid hero-grid-wrapper">
          <div className="hero-text-block">
            <h1 className="hero-h1">
              Buy Instagram <span className="title-span-green">Followers</span>
            </h1>
            <p className="hero-paragraph">
              <strong className="bold-text-4">
                Build social proof for your online business or grow your
                influencer page with our followers, instant delivery.
              </strong>
              <br />
            </p>
            <div className="div-review-section-hero">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/63ff4056e10165cf63568681_Star-icon-2.svg"
                loading="lazy"
                alt="ratings icon"
                className="img-review-star"
              />
              <p className="p-reviews-hero">
                Rated <span className="text-span-15">4.8/5 </span> from over
                1000+ reviews
              </p>
            </div>
            <div className="div-hero-bullets">
              <div className="div-hero-bullet">
                <img
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                  loading="lazy"
                  alt="Checkmark green icon"
                />
                <p className="p-hero-bullet">Instant Delivery</p>
              </div>
              <div className="div-hero-bullet">
                <img
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                  loading="lazy"
                  alt="Checkmark green icon"
                />
                <p className="p-hero-bullet">100% Growth Guarantee</p>
              </div>
              <div className="div-hero-bullet">
                <img
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                  loading="lazy"
                  alt="Checkmark green icon"
                />
                <p className="p-hero-bullet">24/7 Customer Support</p>
              </div>
            </div>
          </div>
          <div className="hero-pricing-wrapper">
            <div className="hero-pricing-container">
              <div className="pricing-header-copy">Starting from</div>
              <div className="green-line-pricing"></div>
              <div className="div-pricing">
                <div className="p-price-lg">$0.008</div>
                <div className="pricing-secondary-text">/ Follower</div>
              </div>
              <div className="div-pricing-bullets">
                <div className="div-bullets">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-sm">
                    Up to 250,000 Followers per account
                  </p>
                </div>
                <div className="div-bullets">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-sm">100% Instant Delivery</p>
                </div>
                <div className="div-bullets">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-sm">
                    Card & Crypto payments available
                  </p>
                </div>
                <div className="div-bullets">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-sm">No signup or login required</p>
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

export default Singleservice;
