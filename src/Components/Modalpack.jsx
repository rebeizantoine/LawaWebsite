// Modal.js
import React, { useState } from "react";
import "../Styles/modalpack.css"; // Import the CSS file

const Modalpack = ({ isOpen, onClose }) => {
  return (
    <div className={`modal-overlay ${isOpen ? "show" : ""}`} onClick={onClose}>
      <div className="modal">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 560 280"
          preserveAspectRatio="true"
        >
          <line
            id="svg_3"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            x1="2.0"
            y1="2.0"
            x2="558"
            y2="2.0"
          />
          <line
            id="svg_4"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            x1="558"
            y1="278"
            x2="558"
            y2="2.0"
          />
          <line
            id="svg_2"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            x1="2.0"
            y1="278"
            x2="558"
            y2="278"
          />
          <line
            id="svg_5"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            x1="2.0"
            y1="2.0"
            x2="2.0"
            y2="278"
          />
        </svg>
        <div className="modal-inner">
          <button className="modal-close" onClick={onClose}>
            X
          </button>
          <div className="accordion1">
            {[...Array(4)].map((_, index) => (
              <AccordionItem key={index} index={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AccordionItem = ({ index }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`accordion1-item123 ${isActive ? "active" : ""}`}>
      <div
        className="accordion1-header123"
        onClick={() => setIsActive(!isActive)}
      >
        {`Package ${index}`}
        <span className="accordion1-icon">{isActive ? "-" : "+"}</span>
      </div>
      <div className="accordion1-body">
        Instagram Followers [REAL & ORGANIC] [Refill: 20D] [Max: 300K] [Start
        Time: 0-3 Hrs] [Speed: 10K/D] 💧⛔ ${1.88 * index}
      </div>
    </div>
  );
};

export default Modalpack;
