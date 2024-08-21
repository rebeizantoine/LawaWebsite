import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "../Styles/package.css"; // Add your own CSS for styling

const Package = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);

  return (
    <section
      className="how-it-works text-center"
      data-aos="fade-up"
      data-aos-easing="ease"
      data-aos-duration="700"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <div className="header-top">
              <p className="gradient-text-block">
                <span className="gradient-text">Timeline</span>
              </p>
              <div className="title">How to Buy a Package?</div>
              <span>
                Buying social media packages from Us is simple and fast. Just
                follow these steps
              </span>
            </div>
            <div className="col-xl-10 offset-xl-1 col-lg-12 col-md-12">
              <div className="row step-lists" data-aos="fade-up">
                <div className="col-lg-4 col-md-4 step text-center">
                  <div className="header-name">
                    <h3>Choose Package</h3>
                    <div className="progress-line">
                      <div className="line-inner"></div>
                    </div>
                    <div className="progress-dot">
                      <div className="dot-level">
                        <div className="dot-inner"></div>
                      </div>
                    </div>
                    <p className="desc">
                      It's easy to get started with us. Choose from our wide
                      range of Instagram marketing packages that cater to your
                      requirements
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 step text-center">
                  <div className="header-name">
                    <h3>Enter Your Instagram Username</h3>
                    <div className="progress-line">
                      <div className="line-inner"></div>
                    </div>
                    <div className="progress-dot">
                      <div className="dot-level">
                        <div className="dot-inner"></div>
                      </div>
                    </div>
                    <p className="desc">
                      In the order form simply enter your Instagram username.
                      Our system will automatically fetch your public info. We
                      DON’T require your password
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 step text-center">
                  <div className="header-name">
                    <h3>Wait for results</h3>
                    <div className="progress-line">
                      <div className="line-inner"></div>
                    </div>
                    <div className="progress-dot">
                      <div className="dot-level">
                        <div className="dot-inner"></div>
                      </div>
                    </div>
                    <p className="desc">
                      You can pay via any bank card. We will proceed with the
                      order and inform you once it's done via email. You can
                      also track your order status from the client area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
