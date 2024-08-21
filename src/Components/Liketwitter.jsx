import React, { useState } from "react";
import Multipleboxesmodal from "../Components/Multipleboxesmodal"; // Adjust path as necessary
import "../Styles/singleservicetwitterlike.css";

const Liketwitter = () => {
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
    <div className="hero-section-servicestwitter">
      <div className="flex-containertwitter">
        <div className="w-layout-grid hero-grid-wrappertwitter">
          <div className="hero-text-blocktwitter">
            <h1 className="hero-h1twitter">
              Buy Twitter{" "}
              <span className="title-span-greentwitter"> &nbsp;Likes</span>
            </h1>
            <p className="hero-paragraphtwitter">
              <strong className="bold-text-4twitter">
                Build social proof for your online business or grow your
                influencer page with our followers, instant delivery.
              </strong>
              <br />
            </p>
            <div className="div-review-section-herotwitter">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/63ff4056e10165cf63568681_Star-icon-2.svg"
                loading="lazy"
                alt="ratings icon"
                className="img-review-star"
              />
              <p className="p-reviews-herotwitter">
                Rated <span className="text-span-15tiktok">4.8/5 </span> from
                over 1000+ reviews
              </p>
            </div>
            <div className="div-hero-bulletstiktok">
              <div className="div-hero-bullettiktok">
                <img
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                  loading="lazy"
                  alt="Checkmark green icon"
                />
                <p className="p-hero-bullettiktok">
                  High Quality Likes, Instant Delivery
                </p>
              </div>
              <div className="div-hero-bullettiktok">
                <img
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                  loading="lazy"
                  alt="Checkmark green icon"
                />
                <p className="p-hero-bullettiktok">Up to 100k likes per post</p>
              </div>
              <div className="div-hero-bullettiktok">
                <img
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                  loading="lazy"
                  alt="Checkmark green icon"
                />
                <p className="p-hero-bullettiktok">
                  Card & Crypto payments available
                </p>
              </div>
            </div>
          </div>
          <div className="hero-pricing-wrappertiktok">
            <div className="hero-pricing-containertiktok">
              <div className="pricing-header-copytiktok">Starting from</div>
              <div className="green-line-pricingtiktok"></div>
              <div className="div-pricingtiktok">
                <div className="p-price-lgtiktok">$0.008</div>
                <div className="pricing-secondary-texttiktok">/ Like</div>
              </div>
              <div className="div-pricing-bulletstiktok">
                <div className="div-bulletstiktok">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-smtiktok">
                    Up to 10,000 likes per Tweet
                  </p>
                </div>
                <div className="div-bulletstiktok">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-smtiktok">Instant Delivery</p>
                </div>
                <div className="div-bulletstiktok">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-smtiktok">
                    Order start within 10-20 minutes
                  </p>
                </div>
                <div className="div-bulletstiktok">
                  <img
                    src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/628fdb670c2e9e80264b9f41_Coinboosts-check-green.svg"
                    loading="lazy"
                    alt="Checkmark green icon"
                    className="img-checkmark"
                  />
                  <p className="p-bullets-smtiktok">
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

export default Liketwitter;
