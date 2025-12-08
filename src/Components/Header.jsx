import React, { useContext, useState, useEffect } from "react";
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
import justlogo from "../Images/jansmmlogo.png";
const Header = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart } = useCart(); // Use context for cartItems
  const [showSidebar, setShowSidebar] = useState(false); // State for sidebar visibility
  const [isImageOne, setIsImageOne] = useState(true);

  const [showCartPopup, setShowCartPopup] = React.useState(false);
  const [showMultipleBoxesModal, setShowMultipleBoxesModal] =
    React.useState(false);

  const [activeDropdown, setActiveDropdown] = useState(null); // State to track the active dropdown

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
  const handleNavigation = (path) => {
    navigate(path);
    setShowSidebar(false); // Close sidebar on navigation
  };
  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null); // Close dropdown if it's already active
    } else {
      setActiveDropdown(dropdown); // Open the clicked dropdown
    }
  };
  const toggleSidebar = () => {
    console.log("Sidebar toggle button clicked"); // Debugging line
    setShowSidebar(!showSidebar);
  };
  const toggleImage = () => {
    // setIsImageOne(!isImageOne); // Toggle between the two images
    toggleSidebar();
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
            {showSidebar && (
              <nav className="bigger-1">
                <ul className="sidebar123">
                  <li className="xbutton" onClick={() => setShowSidebar(false)}>
                    <button
                      style={{
                        backgroundColor: "#0d884f",
                        border: "none",
                        padding: "10px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%", // makes it a circle
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18M6 6l12 12"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </li>

                  {/* Instagram Dropdown */}
                  <li className="header-nav-list-item2">
                    Instagram{" "}
                    <span className="dropdown-arrow2">expand_more</span>
                    <div className="dropdown-menu2">
                      <div className="dropdown-grid2">
                        <div className="grid-section2">
                          <a
                            href="/followerinstagram"
                            className="dropdown-item2"
                          >
                            <span className="spanokok">
                              <img
                                src={instagram}
                                alt="Instagram Followers"
                                className="dropdown-image2"
                              />

                              <p>Instagram Followers</p>
                            </span>
                          </a>

                          <a href="/likesinsta" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={instagram}
                                alt="Instagram Likes"
                                className="dropdown-image2"
                              />
                              <p>Instagram Likes</p>
                            </span>
                          </a>
                        </div>
                        <div className="grid-section2">
                          <a href="/commentsinsta" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={instagram}
                                alt="Instagram Comments"
                                className="dropdown-image2"
                              />
                              <p>Instagram Comments</p>
                            </span>
                          </a>
                          <a href="/Viewsinsta" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={instagram}
                                alt="Instagram Views"
                                className="dropdown-image2"
                              />
                              <p>Instagram Views</p>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* Twitter Dropdown */}
                  <li className="header-nav-list-item2">
                    Twitter <span className="dropdown-arrow2">expand_more</span>
                    <div className="dropdown-menu2">
                      <div className="dropdown-grid2">
                        <div className="grid-section2">
                          <a href="/followertwitter" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={twitter}
                                alt="Twitter Followers"
                                className="dropdown-image2"
                              />
                              <p>Twitter Followers</p>
                            </span>
                          </a>
                          <a href="/liketwitter" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={twitter}
                                alt="Twitter Likes"
                                className="dropdown-image2"
                              />
                              <p>Twitter Likes</p>
                            </span>
                          </a>
                        </div>
                        <div className="grid-section2">
                          <a href="/Commentstwitter" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={twitter}
                                alt="Twitter Comments"
                                className="dropdown-image2"
                              />
                              <p>Twitter Comments</p>
                            </span>
                          </a>
                          <a href="/viewstwitter" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={twitter}
                                alt="Twitter Views"
                                className="dropdown-image"
                              />
                              <p>Twitter Views</p>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  {/* TikTok Dropdown */}
                  <li className="header-nav-list-item2">
                    Tiktok <span className="dropdown-arrow2">expand_more</span>
                    <div className="dropdown-menu2">
                      <div className="dropdown-grid2">
                        <div className="grid-section2">
                          <a href="/followertiktok" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={tiktok}
                                alt="Tiktok Followers"
                                className="dropdown-image2"
                              />
                              <p>Tiktok Followers</p>
                            </span>
                          </a>
                          <a href="/liketiktok" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={tiktok}
                                alt="Tiktok Likes"
                                className="dropdown-image2"
                              />
                              <p>Tiktok Likes</p>
                            </span>
                          </a>
                        </div>
                        <div className="grid-section2">
                          <a href="/commentstiktok" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={tiktok}
                                alt="Tiktok Comments"
                                className="dropdown-image2"
                              />
                              <p>Tiktok Comments</p>
                            </span>
                          </a>
                          <a href="/viewtiktok" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={tiktok}
                                alt="Tiktok Views"
                                className="dropdown-image2"
                              />
                              <p>Tiktok Views</p>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* Twitch Dropdown */}
                  <li className="header-nav-list-item2">
                    Twitch <span className="dropdown-arrow2">expand_more</span>
                    <div className="dropdown-menu2">
                      <div className="dropdown-grid2">
                        <div className="grid-section2">
                          <a href="/followertwitch" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={twitch}
                                alt="Twitch Followers"
                                className="dropdown-image2"
                              />
                              <p>Twitch Followers</p>
                            </span>
                          </a>
                          <a href="/viewtwitch" className="dropdown-item2">
                            <span className="spanokok">
                              <img
                                src={twitch}
                                alt="Twitch Views"
                                className="dropdown-image2"
                              />
                              <p>Twitch Views</p>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li className="header-nav-list-item2 zab-2">
                    <a
                      href="/abouttrial"
                      onClick={() => handleNavigation("/abouttrial")}
                    >
                      About Us
                    </a>
                  </li>
                  <li className="header-nav-list-item2 zab-2">
                    <a
                      href="/contactus"
                      onClick={() => handleNavigation("/contactus")}
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            )}

            <nav className=" header-nav-menu-wrapper">
              <ul className="header-nav-menu-list">
                <img
                  // src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/643f0d770b2aae1624f2453d_Socialplug-logo-black.svg"
                  src={justlogo}
                  className="social-logo"
                  onClick={handleAllService}
                  alt="Socialplug Logo"
                />
                <li className="hideOnMobile header-nav-list-item">
                  Instagram <span className="dropdown-arrow">expand_more</span>
                  <div className="dropdown-menu">
                    <div className="dropdown-grid2">
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
                <li className="hideOnMobile header-nav-list-item">
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
                <li className="hideOnMobile header-nav-list-item">
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
                <li className="hideOnMobile header-nav-list-item">
                  Twitch <span className="dropdown-arrow">expand_more</span>
                  <div className="dropdown-menu">
                    <div className="dropdown-grid">
                      <div className="grid-section">
                        <h3>Twitch1</h3>
                        <a href="/followertwitch" className="dropdown-item">
                          <img
                            src={twitch}
                            alt="Twitch Followers"
                            className="dropdown-image"
                          />
                          <p>Twitch Followers</p>
                        </a>
                        <a href="/viewtwitch" className="dropdown-item">
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
                <li className="menu-button" onClick={toggleImage}>
                  <a href="#">
                    {isImageOne ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="26"
                        viewBox="0 96 960 960"
                        width="26"
                      >
                        <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="26"
                        viewBox="0 96 960 960"
                        width="26"
                      >
                        <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231-231 231Z" />
                      </svg>
                    )}
                  </a>
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
