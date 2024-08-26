import React, { useEffect, useCallback, useState } from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "./Cartcontext"; // Import the useCart hook
import "../Styles/multipleboxesmodal.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import question from "../Images/question-mark.png";

const allBoxes = [
  { id: 1, label: "50", value: 10 },
  { id: 2, label: "100", value: 20 },
  { id: 3, label: "300", value: 30 },
  { id: 4, label: "500", value: 40 },
  { id: 5, label: "1000", value: 50 },
  { id: 6, label: "2500", value: 60 },
  { id: 7, label: "5000", value: 70 },
  { id: 8, label: "10000", value: 80 },
  { id: 9, label: "20000", value: 90 },
  { id: 10, label: "40000", value: 100 },
  { id: 11, label: "50000", value: 110 },
  { id: 12, label: "100000", value: 120 },
  { id: 13, label: "200000", value: 130 },
  { id: 14, label: "400000", value: 140 },
];

const limitedBoxes = allBoxes.slice(0, 4);

const MultipleBoxesModal = ({ onClose }) => {
  const location = useLocation();
  const { addToCart } = useCart();
  const [boxes, setBoxes] = useState(allBoxes);
  const [selectedValue, setSelectedValue] = useState(allBoxes[0].value);
  const [selectedLabel, setSelectedLabel] = useState(allBoxes[0].label);
  const [selectedButton, setSelectedButton] = useState("highQuality");

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  const getDynamicText = () => {
    if (
      location.pathname.includes("insta") &&
      location.pathname.includes("like")
    ) {
      return "Instagram Likes";
    } else if (
      location.pathname.includes("insta") &&
      location.pathname.includes("follower")
    ) {
      return "Instagram Followers";
    } else if (
      location.pathname.includes("insta") &&
      location.pathname.includes("Comment")
    ) {
      return "Instagram Comments";
    } else if (
      location.pathname.includes("insta") &&
      location.pathname.includes("View")
    ) {
      return "Instagram Views";
    } else if (
      location.pathname.includes("tiktok") &&
      location.pathname.includes("like")
    ) {
      return "TikTok Likes";
    } else if (
      location.pathname.includes("tiktok") &&
      location.pathname.includes("follower")
    ) {
      return "TikTok Followers";
    } else if (
      location.pathname.includes("tiktok") &&
      location.pathname.includes("Comment")
    ) {
      return "TikTok Comments";
    } else if (
      location.pathname.includes("tiktok") &&
      location.pathname.includes("View")
    ) {
      return "TikTok Views";
    } else if (
      location.pathname.includes("twitter") &&
      location.pathname.includes("like")
    ) {
      return "Twitter Likes";
    } else if (
      location.pathname.includes("twitter") &&
      location.pathname.includes("follower")
    ) {
      return "Twitter Followers";
    } else if (
      location.pathname.includes("twitter") &&
      location.pathname.includes("Comment")
    ) {
      return "Twitter Comments";
    } else if (
      location.pathname.includes("twitter") &&
      location.pathname.includes("View")
    ) {
      return "Twitter Views";
    }

    return "";
  };

  const dynamicText = getDynamicText();

  const handleBoxClick = useCallback((value, label) => {
    setSelectedValue(value);
    setSelectedLabel(label);
  }, []);

  const handleHighQualityClick = useCallback(() => {
    setBoxes(allBoxes);
    setSelectedValue(allBoxes[0].value);
    setSelectedLabel(allBoxes[0].label);
    setSelectedButton("highQuality");
  }, []);

  const handleLimitedSelectionClick = useCallback(() => {
    setBoxes(limitedBoxes);
    setSelectedValue(limitedBoxes[0].value);
    setSelectedLabel(limitedBoxes[0].label);
    setSelectedButton("limitedSelection");
  }, []);
  const handleOrderNowClick = () => {
    if (selectedValue) {
      const orderData = {
        service: dynamicText || "Default Service",
        quantity: selectedLabel,
        price: selectedValue,
      };
      addToCart(orderData); // Add the selected item to the cart
      toast.success("Package added to cart!"); // Show the toast notification
    } else {
      // Handle case where no value is selected
      console.log("Please select an option");
    }
  };

  return (
    <div
      className="modal-overlay"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDesc"
    >
      <div className="modal-container123">
        <div className="div-close">
          <button
            className="modal-close123456"
            onClick={onClose}
            aria-label="Close Modal"
          >
            X
          </button>
        </div>
        <div className="modal-box123">
          <div className="button-group123">
            <button
              className={`modal-button123 ${
                selectedButton === "highQuality" ? "selected-button123" : ""
              }`}
              onClick={handleHighQualityClick}
            >
              High Quality Followers
            </button>
            <button
              className={`modal-button123 ${
                selectedButton === "limitedSelection"
                  ? "selected-button123"
                  : ""
              }`}
              onClick={handleLimitedSelectionClick}
            >
              Active Followers
              <span className="spanito">
                <img src={question} alt="Info about active followers" />
              </span>
            </button>
          </div>
          <div className="boxes-grid123">
            {boxes.map((box) => (
              <div
                key={box.id}
                className={`mini-box123 ${
                  selectedValue === box.value ? "selected123" : ""
                }`}
                onClick={() => handleBoxClick(box.value, box.label)}
              >
                {box.label}
                <p className="small-p">{dynamicText}</p>
              </div>
            ))}
          </div>
          <div className="price-display123">
            <div className="flex-price123">
              <p className="flexy-1">$</p>
              <p className="flexy-2">{selectedValue}</p>
            </div>
            <button className="order-button123" onClick={handleOrderNowClick}>
              Add to Cart
            </button>
          </div>
          <div className="features-block">
            <div className="features-item">
              <div className="feature-title">High-Quality Followers</div>
              <ul className="features list-unstyled leading-loose">
                <li>
                  <i className="fe fe-check text-icon" aria-hidden="true"></i>{" "}
                  High Quality
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "underline" }}>
                    What's the difference?
                  </a>
                </li>
                <li>
                  <i className="fe fe-check text-icon" aria-hidden="true"></i>{" "}
                  <strong>Instant Delivery</strong> Guaranteed
                </li>
                <li>
                  <i className="fe fe-check text-icon" aria-hidden="true"></i>{" "}
                  <strong>No Password</strong> Needed
                </li>
                <li>
                  <i className="fe fe-check text-icon" aria-hidden="true"></i>{" "}
                  <strong>24/7</strong> Support
                </li>
              </ul>
            </div>
            <div className="features-item">
              <div className="feature-title2">
                Active Followers
                <i
                  className="fa fa-question-circle"
                  aria-hidden="true"
                  style={{ fontSize: "20px", marginLeft: "20px" }}
                ></i>
              </div>
              <ul className="features list-unstyled leading-loose">
                <li>
                  <i className="fe fe-check text-icon" aria-hidden="true"></i>{" "}
                  High Quality
                </li>
                <li>
                  <a href="#" style={{ textDecoration: "underline" }}>
                    What's the difference?
                  </a>
                </li>
                <li>
                  <i className="fe fe-check text-icon" aria-hidden="true"></i>{" "}
                  <strong>Instant Delivery</strong> Guaranteed
                </li>
                <li>
                  <i className="fe fe-check text-icon" aria-hidden="true"></i>{" "}
                  <strong>No Password</strong> Needed
                </li>
                <li>
                  <i className="fe fe-check text-icon" aria-hidden="true"></i>{" "}
                  <strong>24/7</strong> Support
                </li>
              </ul>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default MultipleBoxesModal;
