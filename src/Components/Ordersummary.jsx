import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import "../Styles/ordersummary.css";
import { useNavigate } from "react-router-dom";

import bitcoin from "../Images/bitcoin.png";
import tether from "../Images/tether-usdt-logo.png";
import etherium from "../Images/ethereum-eth-logo.png";
import solana from "../Images/solana-sol-logo.png";
import bnb from "../Images/bnb-bnb-logo.png";
import visa from "../Images/visa_PNG391.png";
import paypal from "../Images/paypal-logo-2.png";

function Ordersummary() {
  const location = useLocation();
  const { cartItems, totalAmount } = location.state || {}; // Fetch cart data from location state

  const [selectedMethod, setSelectedMethod] = React.useState("");

  const handleMethodChange = (method) => {
    setSelectedMethod(method);
  };
  const navigate = useNavigate();
  return (
    <div className="order12-upvote-downvote-info">
      <div className="lefto">
        <img
          src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/643f0d770b2aae1624f2453d_Socialplug-logo-black.svg"
          alt=""
          className="pictua"
        />
        <div className="intro">
          <h2 className="order12-section-title">
            <strong>Limits & Delivery Speed Information</strong>
          </h2>
          <ul className="order12-info-list">
            <li className="order12-info-item">
              Minimum 20 votes & maximum 500 votes per post or comment
            </li>
            <li className="order12-info-item">
              Order processing time less than 30 minutes
            </li>
          </ul>

          <h2 className="order12-section-title">
            <strong>How Many Upvotes Should I Send?</strong>
          </h2>
          <p className="order12-info-text">
            If the post you are looking to outrank has 100 upvotes, you should
            aim at 110-115 upvotes, which is 10-15% more.
          </p>

          <h2 className="order12-section-title">
            <strong>What Delivery Speed Should I Choose?</strong>
          </h2>
          <p className="order12-info-text">
            If the post you are trying to outrank has 100 upvotes in 2 hours
            (120 minutes), you can calculate delivery speed by dividing upvotes
            by post age in minutes: 100 / 120 = 1.2 upvotes per minute.
          </p>
          <p className="order12-info-text">
            The safest option is to use a similar upvotes speed or the next
            possible option that is faster. Following our example, either 1
            upvote per minute or 5 upvotes per minute.
          </p>

          <h2 className="order12-section-title">
            <strong>Note When Using Our Downvote Service</strong>
          </h2>
          <ul className="order12-info-list">
            <li className="order12-info-item">
              A newly published post can have its number of votes and percentage
              of upvotes reduced.
            </li>
            <li className="order12-info-item">
              For posts that were published more than 2-3 hours, the number of
              votes would not be decreased, but the percentage of upvotes would
              get affected.
            </li>
            <li className="order12-info-item">
              Even if the vote count doesn't decrease, it will still affect the
              ranking due to the changed upvote/downvote ratio.
            </li>
            <li className="order12-info-item">
              Downvotes may not be counted for very old posts or due to Reddit
              server issues.
            </li>
            <li className="order12-info-item">
              Purchasing the downvote service does not guarantee a refund if the
              post/comment vote numbers are not decreased.
            </li>
          </ul>

          <p className="order12-help-text">
            Need help?{" "}
            <a
              className="order12-help-link"
              href="/contactform"
              target="_blank"
              rel="noreferrer noopener"
            >
              Contact our support team
            </a>
          </p>
          {/* <div
              class="order12-form-group order12-form-group-lg"
              data-field="219"
            >
              <label for="email" class="order12-form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="order12-form-control"
                placeholder=""
                value=""
                autocomplete="email"
                required
              />
              <div class="order12-help-block">
                Already have an account?{" "}
                <a
                  href="https://panel.socialplug.io/login"
                  class="order12-help-link"
                >
                  Sign in here
                </a>
                .
              </div>
            </div> */}
        </div>
      </div>
      <div className="rightooo">
        <div class="sticky-order123">
          <div class="invoice-items-order123" id="preview">
            <h2 class="mb-4-order123">Order Summary</h2>
            <div class="p-3 flex flex-column gap-2 rounded">
              {cartItems && cartItems.length > 0 ? (
                cartItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-row justify-between w-full"
                  >
                    <div>
                      <div className="text-500">Service</div>
                    </div>
                    <div>{item.service}</div>
                  </div>
                ))
              ) : (
                <p>No items in the cart.</p>
              )}
              <div className="flex flex-row justify-between w-full">
                <div className="text-500">Quantity</div>
                <div>{cartItems.reduce((acc, item) => item.quantity, 0)}</div>
              </div>
              <div className="flex flex-row justify-between w-full">
                <span className="text-500">Total</span>
                <div className="text-right-order123">
                  <h2 className="margin-0-order123">
                    ${totalAmount.toFixed(2)}
                  </h2>
                </div>
              </div>
            </div>

            <div class="flex-order123 flex-column-order123 whats-included-container-order123">
              <h3 class="mb-2-order123">What's included?</h3>
              <div class="whats-included-items-wrapper-order123">
                <div class="whats-included-item-order123">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.9981 0H2.49984C1.11922 0 0 1.11929 0 2.5V29.5C0 30.8807 1.11922 32 2.49984 32H29.9981C31.3787 32 32.4979 30.8807 32.4979 29.5V2.5C32.4979 1.11929 31.3787 0 29.9981 0Z"
                      fill="#00c573"
                    ></path>
                    <path
                      d="M12.6249 20.2599L9.91406 22.3899V11.1319C9.91406 10.9706 9.97817 10.8158 10.0923 10.7017C10.2064 10.5875 10.3611 10.5234 10.5225 10.5234H21.4753C21.5552 10.5234 21.6343 10.5392 21.7082 10.5698C21.782 10.6003 21.8491 10.6452 21.9056 10.7017C21.9621 10.7582 22.0069 10.8252 22.0375 10.8991C22.068 10.9729 22.0838 11.052 22.0838 11.1319V19.6514C22.0838 19.8128 22.0197 19.9676 21.9056 20.0817C21.7915 20.1958 21.6367 20.2599 21.4753 20.2599H12.6249ZM12.2039 19.0429H20.8669V11.7404H11.131V19.8859L12.2039 19.0429ZM12.9569 14.7829H14.1738C14.1849 15.2596 14.3821 15.7129 14.7231 16.0461C15.0641 16.3792 15.5219 16.5657 15.9987 16.5657C16.4754 16.5657 16.9332 16.3792 17.2742 16.0461C17.6152 15.7129 17.8124 15.2596 17.8236 14.7829H19.0405C19.0405 15.5899 18.7199 16.3639 18.1493 16.9345C17.5787 17.5051 16.8049 17.8257 15.9979 17.8257C15.191 17.8257 14.4171 17.5051 13.8465 16.9345C13.2759 16.3639 12.9554 15.5899 12.9554 14.7829H12.9569Z"
                      fill="white"
                    ></path>
                  </svg>
                  <div class="flex-order123 flex-column-order123">
                    <div class="whats-included-item-title-order123 text-title-order123">
                      24/7 Customer Support
                    </div>
                    <div class="whats-included-item-description-order123 text-order123">
                      The fastest response time in the industry - just 5
                      minutes. All from 100% real humans, no AI here.
                    </div>
                  </div>
                </div>
                <div class="whats-included-item-order123">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32" height="32" rx="4" fill="#00c573"></rect>
                    <path
                      d="M20 14L15.5 23V18H11.5L15.5 9V14H20Z"
                      fill="white"
                    ></path>
                  </svg>
                  <div class="flex-order123 flex-column-order123">
                    <div class="whats-included-item-title-order123 text-title-order123">
                      100% Account Safety
                    </div>
                    <div class="whats-included-item-description-order123 text-order123">
                      The fastest response time in the industry - just 5
                      minutes. All from 100% real humans, no AI here.
                    </div>
                  </div>
                </div>
                <div class="whats-included-item-order123">
                  <svg
                    width="33"
                    height="32"
                    viewBox="0 0 33 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M29.9981 0H2.49984C1.11922 0 0 1.11929 0 2.5V29.5C0 30.8807 1.11922 32 2.49984 32H29.9981C31.3787 32 32.4979 30.8807 32.4979 29.5V2.5C32.4979 1.11929 31.3787 0 29.9981 0Z"
                      fill="#00c573"
                    ></path>
                    <path
                      d="M12.25 22.0625C11.9062 22.0625 11.6121 21.9402 11.3675 21.6956C11.1229 21.451 11.0004 21.1567 11 20.8125V14.5625C11 14.2187 11.1225 13.9246 11.3675 13.68C11.6125 13.4354 11.9067 13.3129 12.25 13.3125H12.875V12.0625C12.875 11.1979 13.1798 10.461 13.7894 9.85187C14.399 9.24271 15.1358 8.93792 16 8.9375C16.8646 8.9375 17.6017 9.24229 18.2112 9.85187C18.8208 10.4615 19.1254 11.1983 19.125 12.0625V13.3125H19.75C20.0937 13.3125 20.3881 13.435 20.6331 13.68C20.8781 13.925 21.0004 14.2192 21 14.5625V20.8125C21.0004 21.1567 20.878 21.451 20.6331 21.6956C20.3881 21.9402 20.0937 22.0625 19.75 22.0625H12.25ZM16 10.6875C15.2837 10.6875 14.5838 10.9671 14.0231 11.5279C13.4624 12.0887 13.1835 12.7882 13.1835 13.5625V14.5625H18.8165V13.5625C18.8165 12.788 18.5376 12.0887 17.9769 11.5279C17.4162 10.9671 16.7163 10.6875 16 10.6875Z"
                      fill="white"
                    ></path>
                  </svg>
                  <div class="flex-order123 flex-column-order123">
                    <div class="whats-included-item-title-order123 text-title-order123">
                      100% Money-Back Guarantee
                    </div>
                    <div class="whats-included-item-description-order123 text-order123">
                      In case you’re not satisfied, we offer a 100% refund
                      guarantee.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="payment-method-container-order123">
              <div
                className={`payment-box-order123 ${
                  selectedMethod === "crypto" ? "selected-order123" : ""
                }`}
                onClick={() => handleMethodChange("crypto")}
              >
                <div className="box-content-order123">
                  <div className="box-title-order123">Crypto</div>
                  <div className="box-image-order123">
                    <div className="crypto-logos">
                      <nav>
                        <img src={bitcoin} alt="" />
                        <img src={tether} alt="" />
                        <img src={etherium} alt="" />
                        <img src={bnb} alt="" />
                        <img src={solana} alt="" />
                      </nav>
                    </div>
                  </div>
                  <div
                    className={`circle-order123 ${
                      selectedMethod === "crypto"
                        ? "selected-circle-order123"
                        : ""
                    }`}
                  ></div>
                </div>
                {selectedMethod === "crypto" && (
                  <div className="payment-details-order123">
                    <div className="payment-form-order123">
                      <label>First Name</label>
                      <input type="text" name="firstName" />
                      <label>Last Name</label>
                      <input type="text" name="lastName" />
                      <label>Email</label>
                      <input type="email" name="email" />
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`payment-box-order123 ${
                  selectedMethod === "creditVisa" ? "selected-order123" : ""
                }`}
                onClick={() => handleMethodChange("creditVisa")}
              >
                <div className="box-content-order123">
                  <div className="box-title-order123">Credit/Visa</div>
                  <div className="box-image-order123">
                    <div className="visaaa">
                      <img src={visa} alt="" />
                    </div>
                  </div>
                  <div
                    className={`circle-order123 ${
                      selectedMethod === "creditVisa"
                        ? "selected-circle-order123"
                        : ""
                    }`}
                  ></div>
                </div>
                {selectedMethod === "creditVisa" && (
                  <div className="payment-details-order123">
                    <div className="payment-form-order123">
                      <label>First Name</label>
                      <input type="text" name="firstName" />
                      <label>Last Name</label>
                      <input type="text" name="lastName" />
                      <label>Email</label>
                      <input type="email" name="email" />
                    </div>
                  </div>
                )}
              </div>
              <div
                className={`payment-box-order123 ${
                  selectedMethod === "PayPal" ? "selected-order123" : ""
                }`}
                onClick={() => handleMethodChange("PayPal")}
              >
                <div className="box-content-order123">
                  <div className="box-title-order123">Paypal</div>
                  <div className="box-image-order123">
                    <div className="paypal">
                      <img src={paypal} alt="" />
                    </div>
                  </div>
                  <div
                    className={`circle-order123 ${
                      selectedMethod === "PayPal"
                        ? "selected-circle-order123"
                        : ""
                    }`}
                  ></div>
                </div>
                {selectedMethod === "PayPal" && (
                  <div className="payment-details-order123">
                    <div className="payment-form-order123">
                      <label>First Name</label>
                      <input type="text" name="firstName" />
                      <label>Last Name</label>
                      <input type="text" name="lastName" />
                      <label>Email</label>
                      <input type="email" name="email" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ordersummary;
