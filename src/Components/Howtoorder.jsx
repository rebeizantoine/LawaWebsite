import React from "react";
import "../Styles/howtoorder.css";

const Howtoorder = () => {
  return (
    <div>
      <div className="content-section1">
        <div className="flex-container">
          <h2 className="h2-center">
            "How to" <span className="span-text-17">order?</span>
          </h2>
          <p className="standard-paragraph center">
            Here's a quick rundown of how you can place an order for our social
            media services.
          </p>
          <div className="w-layout-grid how-it-works-grid">
            <div className="div-how-container">
              <div className="div-how-nr">
                <p className="p-how-it-works-nr">1</p>
              </div>
              <p className="p-how-heading">Pick the service</p>
              <p className="standard-paragraph center p-sm">
                Choose the social media platform &amp; service required.
              </p>
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
              <p className="p-how-heading">Set the target</p>
              <p className="standard-paragraph center p-sm">
                Choose your desired amount of services, for example, 100
                followers.
              </p>
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
              <p className="p-how-heading">Get the results</p>
              <p className="standard-paragraph center p-sm">
                Checkout &amp; done! Our team will deliver your order within the
                same day.
              </p>
            </div>
          </div>
          <div className="green-line-how-it-works"></div>
        </div>
      </div>
    </div>
  );
};

export default Howtoorder;
