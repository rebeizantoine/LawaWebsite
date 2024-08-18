import React from "react";
import "../Styles/whychoose.css";

const Whychoose = () => {
  return (
    <div>
      <div className="content-section">
        <div className="content-container">
          <h2 className="h2-center">
            Why Choose <span className="span-text-17">SocialPlug?</span>
          </h2>
          <div className="service-grid">
            <a href="" className="grid-block">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/63ff4a3181b01cc5a57e2a44_Icon-development.svg"
                alt=""
                className="grid-icon"
              />
              <div className="profile-details">
                <div className="faq-title">High Quality Standards</div>
                <p className="paragraph-basic">
                  We test our services daily & always source from the best
                  suppliers available.
                </p>
              </div>
            </a>
            <a href="" className="grid-block">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/63ff4a317e73fe0b7c0b0243_Icon-person.svg"
                alt=""
                className="grid-icon"
              />
              <div className="profile-details">
                <div className="faq-title">High Quality Standards</div>
                <p className="paragraph-basic">
                  We test our services daily & always source from the best
                  suppliers available.
                </p>
              </div>
            </a>
            <a href="" className="grid-block">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/63ff4a30f41393f4603cd0c8_Icon-tweet.svg"
                alt=""
                className="grid-icon"
              />
              <div className="profile-details">
                <div className="faq-title">High Quality Standards</div>
                <p className="paragraph-basic">
                  We test our services daily & always source from the best
                  suppliers available.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
