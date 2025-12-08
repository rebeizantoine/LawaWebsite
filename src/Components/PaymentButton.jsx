"use client";

import React from "react";
import "../Styles/paymentbutton.css"; // your renamed CSS file

export default function PaymentButton({ disabled, onClick }) {
  return (
    <div
      className={`container123 ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
      onClick={disabled ? null : onClick}
    >
      <div className="left-side123">
        <div className="card123">
          <div className="card-line123"></div>
          <div className="card-line123"></div>
          <div className="buttons123"></div>
        </div>
        <div className="post123">
          <div className="post-line123"></div>
          <div className="screen123"></div>
          <div className="numbers123"></div>
          <div className="numbers-line2123"></div>
        </div>
        <div className="dollar123">$</div>
      </div>
      <div className="right-side123">
        <div className="new123">Pay Now</div>
        <svg
          className="arrow123"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill="currentColor"
            d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z"
          />
        </svg>
      </div>
    </div>
  );
}
