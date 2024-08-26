import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./Cartcontext"; // Import the useCart hook
import "../Styles/header.css";
import instagram from "../Images/icons8-instagram-48.png";
import tiktok from "../Images/icons8-tiktok-50.png";
import twitch from "../Images/icons8-twitch-48.png";
import twitter from "../Images/icons8-twitter-48.png";
import carto from "../Images/carto.svg";
import CartPopup from "./Cartpopup";
import MultipleBoxesModal from "./Multipleboxesmodal"; // Ensure the name matches your file

const Header = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCart(); // Use context for cartItems

  const [showCartPopup, setShowCartPopup] = React.useState(false);
  const [showMultipleBoxesModal, setShowMultipleBoxesModal] =
    React.useState(false);

  const handleAllService = () => {
    navigate("/");
  };

  const handleCartClick = () => {
    console.log("Cart icon clicked"); // Debugging line
    setShowCartPopup(!showCartPopup);
  };

  const handleMultipleBoxesModal = () => {
    console.log("Multiple boxes modal clicked"); // Debugging line
    setShowMultipleBoxesModal(!showMultipleBoxesModal);
  };

  return (
    <div>
      <div className="banner">
        <section className="section-notification">
          <div className="notification-bar">
            <div className="notification">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/6625576b94bb460b0ced2680_support-icon-notification2.svg"
                alt="Support Icon"
              />
              <p className="p-notification-bar">24/7 Customer Support</p>
            </div>
            <div className="notification">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/6625576bd06cde381996da78_flash-icon.svg"
                alt="Flash Icon"
              />
              <p className="p-notification-bar">Instant Delivery</p>
            </div>
            <div className="notification">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/6625576baa7a5e9b41f90e3a_star-icon.svg"
                alt="Star Icon"
              />
              <p className="p-notification-bar">Trusted by 100k+ Customers</p>
            </div>
          </div>
        </section>
        <div className="container-default-2">
          <div className="header-content-wrapper"></div>
          <div className="header-middle">
            <nav className="header-nav-menu-wrapper">
              <ul className="header-nav-menu-list">
                <img
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/643f0d770b2aae1624f2453d_Socialplug-logo-black.svg"
                  className="social-logo"
                  onClick={handleAllService}
                  alt="Socialplug Logo"
                />
                <li className="header-nav-list-item">
                  Instagram <span className="dropdown-arrow">expand_more</span>
                  <div className="dropdown-menu">
                    <div className="dropdown-grid">
                      <div className="grid-section">
                        <h3>Instagram1</h3>
                        <a href="/followerinstagram" className="dropdown-item">
                          <img
                            src={instagram}
                            alt="Instagram Followers"
                            className="dropdown-image"
                          />
                          <p>Instagram Followers</p>
                        </a>
                        <a href="/likesinsta" className="dropdown-item">
                          <img
                            src={instagram}
                            alt="Instagram Likes"
                            className="dropdown-image"
                          />
                          <p>Instagram Likes</p>
                        </a>
                      </div>
                      <div className="grid-section">
                        <h3>Instagram2</h3>
                        <a href="/commentsinsta" className="dropdown-item">
                          <img
                            src={instagram}
                            alt="Instagram Comments"
                            className="dropdown-image"
                          />
                          <p>Instagram Comments</p>
                        </a>
                        <a href="/Viewsinsta" className="dropdown-item">
                          <img
                            src={instagram}
                            alt="Instagram Views"
                            className="dropdown-image"
                          />
                          <p>Instagram Views</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-nav-list-item">
                  Twitter <span className="dropdown-arrow">expand_more</span>
                  <div className="dropdown-menu">
                    <div className="dropdown-grid">
                      <div className="grid-section">
                        <h3>Twitter1</h3>
                        <a href="/followertwitter" className="dropdown-item">
                          <img
                            src={twitter}
                            alt="Twitter Followers"
                            className="dropdown-image"
                          />
                          <p>Twitter Followers</p>
                        </a>
                        <a href="/liketwitter" className="dropdown-item">
                          <img
                            src={twitter}
                            alt="Twitter Likes"
                            className="dropdown-image"
                          />
                          <p>Twitter Likes</p>
                        </a>
                      </div>
                      <div className="grid-section">
                        <h3>Twitter2</h3>
                        <a href="/Commentstwitter" className="dropdown-item">
                          <img
                            src={twitter}
                            alt="Twitter Comments"
                            className="dropdown-image"
                          />
                          <p>Twitter Comments</p>
                        </a>
                        <a href="/viewstwitter" className="dropdown-item">
                          <img
                            src={twitter}
                            alt="Twitter Views"
                            className="dropdown-image"
                          />
                          <p>Twitter Views</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-nav-list-item">
                  Tiktok <span className="dropdown-arrow">expand_more</span>
                  <div className="dropdown-menu">
                    <div className="dropdown-grid">
                      <div className="grid-section">
                        <h3>Tiktok1</h3>
                        <a href="/followertiktok" className="dropdown-item">
                          <img
                            src={tiktok}
                            alt="Tiktok Followers"
                            className="dropdown-image"
                          />
                          <p>Tiktok Followers</p>
                        </a>
                        <a href="/liketiktok" className="dropdown-item">
                          <img
                            src={tiktok}
                            alt="Tiktok Likes"
                            className="dropdown-image"
                          />
                          <p>Tiktok Likes</p>
                        </a>
                      </div>
                      <div className="grid-section">
                        <h3>Tiktok2</h3>
                        <a href="/commentstiktok" className="dropdown-item">
                          <img
                            src={tiktok}
                            alt="Tiktok Comments"
                            className="dropdown-image"
                          />
                          <p>Tiktok Comments</p>
                        </a>
                        <a href="/viewtiktok" className="dropdown-item">
                          <img
                            src={tiktok}
                            alt="Tiktok Views"
                            className="dropdown-image"
                          />
                          <p>Tiktok Views</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="header-nav-list-item">
                  Twitch <span className="dropdown-arrow">expand_more</span>
                  <div className="dropdown-menu">
                    <div className="dropdown-grid">
                      <div className="grid-section">
                        <h3>Twitch1</h3>
                        <a href="#" className="dropdown-item">
                          <img
                            src={twitch}
                            alt="Twitch Followers"
                            className="dropdown-image"
                          />
                          <p>Twitch Followers</p>
                        </a>
                        <a href="#" className="dropdown-item">
                          <img
                            src={twitch}
                            alt="Twitch Views"
                            className="dropdown-image"
                          />
                          <p>Twitch Views</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <button className="all-services" onClick={handleAllService}>
                  All Services
                </button>
                <div className="cart-icon" onClick={handleCartClick}>
                  <img src={carto} alt="Cart" />
                  <span className="cart-counter">{cartItems.length}</span>{" "}
                  {/* Ensure cartItems is defined */}
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {showCartPopup && (
        <CartPopup items={cartItems} onClose={() => setShowCartPopup(false)} />
      )}
      {showMultipleBoxesModal && (
        <MultipleBoxesModal onClose={() => setShowMultipleBoxesModal(false)} />
      )}
    </div>
  );
};

export default Header;
