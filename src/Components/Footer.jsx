import React from "react";
import "../Styles/footer.css";
import justlogo from "../Images/jansmmlogo.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="w-layout-grid footer-grid">
        <div className="footer-block">
          <a
            href="/"
            aria-current="page"
            className="a-footer-logo w-inline-block w--current"
          >
            <img src={justlogo} alt="SocialPlug logo" className="footer-logo" />
          </a>
          <div className="p-footer">
            JUST ANOTHER SMM is a top-tier social media shop offering a wide
            range of services across various social media platforms.
          </div>
        </div>

        <div className="footer-block">
          <div className="footer-title">Company</div>
          <div className="p-footer">
            JUST ANOTHER SMM Beirut, Lebanon Open 24/7 Mon - Sun
          </div>
          <div className="p-footer p-footer-margin-bottom">
            Open 24/7 Mon - Sun
          </div>
        </div>

        <div className="footer-block">
          <div className="footer-title">Services</div>
          <a href="/services" className="paragraph-basic _40-bottom-padding">
            All Services
          </a>
          <a
            href="/followerinstagram"
            className="paragraph-basic _40-bottom-padding"
          >
            Buy Instagram Followers
          </a>
          <a href="/Viewsinsta" className="paragraph-basic _40-bottom-padding">
            Buy Instagram Views
          </a>
          <a href="/likesinsta" className="paragraph-basic _40-bottom-padding">
            Buy Instagram Likes
          </a>
          <a href="/liketwitter" className="paragraph-basic _40-bottom-padding">
            Buy Twitter Likes
          </a>
          <a href="/liketwitter" className="paragraph-basic _40-bottom-padding">
            Buy Twitter Followers
          </a>
          <a href="/viewtwitch" className="paragraph-basic _40-bottom-padding">
            Buy Twitter Views
          </a>
          <a
            href="/followertwitch"
            className="paragraph-basic _40-bottom-padding"
          >
            Buy Twitch Followers
          </a>
          <a href="/viewtwitch" className="paragraph-basic _40-bottom-padding">
            Buy Twitch Viewers
          </a>
        </div>

        <div className="footer-block">
          <div className="footer-title">Quick Links</div>
          <a href="/contactform" className="paragraph-basic _40-bottom-padding">
            Contact Us
          </a>
          {/* <a
            href="/affiliate-program"
            className="paragraph-basic _40-bottom-padding"
          >
            Affiliate Program
          </a> */}
          {/* <a
            href="/free-tools/instagram-username-checker"
            className="paragraph-basic _40-bottom-padding"
          >
            Instagram Username Checker{" "}
            <span className="menu-item-notif">FREE</span>
          </a>
          <a
            href="/free-tools/twitter-username-checker"
            className="paragraph-basic _40-bottom-padding"
          >
            Twitter Username Checker{" "}
            <span className="menu-item-notif">FREE</span>
          </a> */}
          {/* <a href="/blog" className="paragraph-basic _40-bottom-padding">
            Blog
          </a>
          <a href="/about-us" className="paragraph-basic _40-bottom-padding">
            About Us
          </a> */}
          <a
            href="/terms-of-services-privacy-policy"
            className="paragraph-basic _40-bottom-padding"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-services-privacy-policy"
            className="paragraph-basic _40-bottom-padding"
          >
            Terms & Conditions
          </a>
        </div>

        <div className="footer-block">
          <div className="footer-title">Follow Us</div>
          <div className="footer-socials-container">
            <a
              href="https://www.youtube.com/@socialplug"
              target="_blank"
              rel="noopener noreferrer"
              className="a-social-footer w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/64145ddcc0cd054616518450_Youtube-social-logo.svg"
                loading="lazy"
                alt="Youtube social thumbnail"
              />
            </a>
            <a
              href="https://twitter.com/socialplugio"
              target="_blank"
              rel="noopener noreferrer"
              className="a-social-footer w-inline-block"
            >
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/64145dd8956c569f7e6f84c0_Twitter-social-logo.svg"
                loading="lazy"
                alt="Twitter social thumbnail"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar w-container">
        <div className="container-footer-bottom">
          <div className="p-footer-bottom">© JustAnotherSmm 2024</div>
          <img
            src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/66292d46e99717b0f56ae2a2_payment-icons-24.svg"
            loading="lazy"
            alt="payment icons"
            className="img-payment-icons"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
