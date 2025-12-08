import React from "react";
import "../Styles/tronspinning.css";

const TronSpinning = ({ fontSize = "50px" }) => {
  return (
    <div className="coin456" style={{ fontSize }}>
      <div className="side456 heads456">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          width="100%"
          height="100%"
        >
          <circle cx="200" cy="200" r="200" fill="#EF0027" />
          <path
            fill="#fff"
            d="M104 93l192 36-99 175L104 93zm18.5 22.6l67 105.5 74-67.7-141-37.8zm66 109.3l85.7-61.7-108.5-7.3 22.8 69z"
          />
        </svg>
      </div>
      <div className="side456 tails456">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 400"
          className="svg_back"
          width="100%"
          height="100%"
        >
          <circle cx="200" cy="200" r="200" fill="#EF0027" />
          <path
            fill="#fff"
            d="M104 93l192 36-99 175L104 93zm18.5 22.6l67 105.5 74-67.7-141-37.8zm66 109.3l85.7-61.7-108.5-7.3 22.8 69z"
          />
        </svg>
      </div>
    </div>
  );
};

export default TronSpinning;
