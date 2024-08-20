import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/header.css";
import instagram from "../Images/icons8-instagram-48.png";
import tiktok from "../Images/icons8-tiktok-50.png";
import twitch from "../Images/icons8-twitch-48.png";
import twitter from "../Images/icons8-twitter-48.png";

const Header = () => {
  const navigate = useNavigate();
  const handleallservice = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="banner">
        <section className="section-notification">
          <div className="notification-bar">
            <div className="notification">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/6625576b94bb460b0ced2680_support-icon-notification2.svg"
                alt=""
              />
              <p className="p-notification-bar">24/7 Customer Support</p>
            </div>
            <div className="notification">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/6625576bd06cde381996da78_flash-icon.svg"
                alt=""
              />
              <p className="p-notification-bar">Instant Delivery</p>
            </div>
            <div className="notification">
              <img
                src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/6625576baa7a5e9b41f90e3a_star-icon.svg"
                alt=""
              />
              <p className="p-notification-bar">Trusted by 100k+ Customers</p>
            </div>
          </div>
        </section>
        <div className="container-default-2">
          <div className="header-content-wrapper">
            <a href="">
              <img src="" alt="" />
            </a>
          </div>
          <div className="header-middle">
            <nav className="header-nav-menu-wrapper">
              <ul className="header-nav-menu-list">
                <img
                  src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/643f0d770b2aae1624f2453d_Socialplug-logo-black.svg"
                  className="social-logo"
                  onClick={handleallservice}
                  alt=""
                />
                <li className="header-nav-list-item">
                  Instagram <span className="dropdown-arrow">expand_more</span>
                  <div className="dropdown-menu">
                    <div className="dropdown-grid">
                      <div className="grid-section">
                        <h3>Instagram1</h3>
                        <a href="#" className="dropdown-item">
                          <img
                            src={instagram}
                            alt="NFT Twitter Content"
                            className="dropdown-image"
                          />
                          <p>NFT Twitter Item 1</p>
                        </a>
                        <a href="#" className="dropdown-item">
                          <img
                            src={instagram}
                            alt="NFT Twitter Content"
                            className="dropdown-image"
                          />
                          <p>NFT Twitter Item 2</p>
                        </a>
                      </div>
                      <div className="grid-section">
                        <h3>Instagram2</h3>
                        <a href="#" className="dropdown-item">
                          <img
                            src={instagram}
                            alt="Twitter Free Content"
                            className="dropdown-image"
                          />
                          <p>Twitter Free Item 1</p>
                        </a>
                        <a href="#" className="dropdown-item">
                          <img
                            src={instagram}
                            alt="Twitter Free Content"
                            className="dropdown-image"
                          />
                          <p>Twitter Free Item 2</p>
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
                        <a href="#" className="dropdown-item">
                          <img
                            src={twitter}
                            alt="NFT Twitter Content"
                            className="dropdown-image"
                          />
                          <p>NFT Twitter Item 1</p>
                        </a>
                        <a href="#" className="dropdown-item">
                          <img
                            src={twitter}
                            alt="NFT Twitter Content"
                            className="dropdown-image"
                          />
                          <p>NFT Twitter Item 2</p>
                        </a>
                      </div>
                      <div className="grid-section">
                        <h3>Twitter2</h3>
                        <a href="#" className="dropdown-item">
                          <img
                            src={twitter}
                            alt="Twitter Free Content"
                            className="dropdown-image"
                          />
                          <p>Twitter Free Item 1</p>
                        </a>
                        <a href="#" className="dropdown-item">
                          <img
                            src={twitter}
                            alt="Twitter Free Content"
                            className="dropdown-image"
                          />
                          <p>Twitter Free Item 2</p>
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
                        <a href="#" className="dropdown-item">
                          <img
                            src={tiktok}
                            alt="NFT Twitter Content"
                            className="dropdown-image"
                          />
                          <p>NFT Twitter Item 1</p>
                        </a>
                        <a href="#" className="dropdown-item">
                          <img
                            src={tiktok}
                            alt="NFT Twitter Content"
                            className="dropdown-image"
                          />
                          <p>NFT Twitter Item 2</p>
                        </a>
                      </div>
                      <div className="grid-section">
                        <h3>Tiktok2</h3>
                        <a href="#" className="dropdown-item">
                          <img
                            src={tiktok}
                            alt="Twitter Free Content"
                            className="dropdown-image"
                          />
                          <p>Twitter Free Item 1</p>
                        </a>
                        <a href="#" className="dropdown-item">
                          <img
                            src={tiktok}
                            alt="Twitter Free Content"
                            className="dropdown-image"
                          />
                          <p>Twitter Free Item 2</p>
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
                        <h3>Tiktok1</h3>
                        <a href="#" className="dropdown-item">
                          <img
                            src={twitch}
                            alt="NFT Twitter Content"
                            className="dropdown-image"
                          />
                          <p>NFT Twitter Item 1</p>
                        </a>
                        <a href="#" className="dropdown-item">
                          <img
                            src={twitch}
                            alt="NFT Twitter Content"
                            className="dropdown-image"
                          />
                          <p>NFT Twitter Item 2</p>
                        </a>
                      </div>
                      <div className="grid-section">
                        <h3>Tiktok2</h3>
                        <a href="#" className="dropdown-item">
                          <img
                            src={twitch}
                            alt="Twitter Free Content"
                            className="dropdown-image"
                          />
                          <p>Twitter Free Item 1</p>
                        </a>
                        <a href="#" className="dropdown-item">
                          <img
                            src={twitch}
                            alt="Twitter Free Content"
                            className="dropdown-image"
                          />
                          <p>Twitter Free Item 2</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <button className="all-services" onClick={handleallservice}>
                  All Services
                </button>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
