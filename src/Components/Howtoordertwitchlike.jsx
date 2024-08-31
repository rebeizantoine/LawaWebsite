import React from "react";
import "../Styles/howtoorder.css";

const Howtoordertwitchlike = () => {
  return (
    <div>
      <div className="content-section1">
        <div className="flex-container">
          <h2 className="h2-center">
            "How to buy"{" "}
            <span className="span-text-17">
              Twitch Followers from SocialPlug?
            </span>
          </h2>
          <p className="standard-paragraph center">
            Here's a quick rundown of how you can place an order for our TikTok
            services.
          </p>
          <div className="w-layout-grid how-it-works-grid">
            <div className="div-how-container">
              <div className="div-how-nr">
                <p className="p-how-it-works-nr">1</p>
              </div>
              <p className="p-how-heading">Choose the amount of followers</p>
              <p className="standard-paragraph center p-sm"></p>
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/6400d6caf94166be7ca4de87_6110b1396056a5e6b0bd01f9_Dot%20Wave.svg"
                loading="lazy"
                alt=""
                className="img-how-to-order-line"
              />
            </div>
            <div className="div-how-container">
              <div className="div-how-nr">
                <p className="p-how-it-works-nr">2</p>
              </div>
              <p className="p-how-heading">Enter the channel link</p>
              <p className="standard-paragraph center p-sm"></p>
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/6400d6caf94166be7ca4de87_6110b1396056a5e6b0bd01f9_Dot%20Wave.svg"
                loading="lazy"
                alt=""
                className="img-how-to-order-line"
              />
            </div>
            <div className="div-how-container">
              <div className="div-how-nr">
                <p className="p-how-it-works-nr">3</p>
              </div>
              <p className="p-how-heading">Submit your order</p>
              <p className="standard-paragraph center p-sm"></p>
            </div>
          </div>
          <div className="green-line-how-it-works"></div>
        </div>
      </div>
    </div>
  );
};

export default Howtoordertwitchlike;
