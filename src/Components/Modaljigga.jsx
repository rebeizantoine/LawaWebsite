import React from "react";
import "../Styles/modaljigga.css";

const Modaljigga = ({ onClose }) => {
  return (
    <div className="modal-overlayjigga show">
      <div className="modal-contentjigga">
        <button className="modal-closejigga" onClick={onClose}>
          X
        </button>
        <svg
          className="modal-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 560 280"
          preserveAspectRatio="true"
        >
          <line
            className="modal-svg-line"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            x1="2.0"
            y1="2.0"
            x2="558"
            y2="2.0"
          />
          <line
            className="modal-svg-line"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            x1="558"
            y1="278"
            x2="558"
            y2="2.0"
          />
          <line
            className="modal-svg-line"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            x1="2.0"
            y1="278"
            x2="558"
            y2="278"
          />
          <line
            className="modal-svg-line"
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
          <div className="accordion1">
            <div className="accordion1-itemjigga">
              <div className="accordion1-headerjigga">
                Package 1<span className="accordion1-iconjigga">+</span>
              </div>
              <div className="accordion1-bodyjigga">
                Instagram Followers [REAL & ORGANIC] [Refill: 20D] [Max: 300K]
                [Start Time: 0-3 Hrs] [Speed: 10K/D] 💧⛔ $1.88
              </div>
            </div>
            <div className="accordion1-itemjigga">
              <div className="accordion1-headerjigga">
                Package 2<span className="accordion1-iconjigga">+</span>
              </div>
              <div className="accordion1-bodyjigga">
                Instagram Followers [REAL & ORGANIC] [Refill: 20D] [Max: 300K]
                [Start Time: 0-3 Hrs] [Speed: 10K/D] 💧⛔ $2.00
              </div>
            </div>
            <div className="accordion1-itemjigga">
              <div className="accordion1-headerjigga">
                Package 3<span className="accordion1-iconjigga">+</span>
              </div>
              <div className="accordion1-bodyjigga">
                Instagram Followers [REAL & ORGANIC] [Refill: 20D] [Max: 300K]
                [Start Time: 0-3 Hrs] [Speed: 10K/D] 💧⛔ $2.50
              </div>
            </div>
            <div className="accordion1-itemjigga">
              <div className="accordion1-headerjigga">
                Package 4<span className="accordion1-iconjigga">+</span>
              </div>
              <div className="accordion1-bodyjigga">
                Instagram Followers [REAL & ORGANIC] [Refill: 20D] [Max: 300K]
                [Start Time: 0-3 Hrs] [Speed: 10K/D] 💧⛔ $3.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modaljigga;
