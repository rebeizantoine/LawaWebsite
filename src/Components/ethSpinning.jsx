import React from "react";
import "../Styles/coinspinningetherium.css";

const EtheriumSpinning = ({ fontSize = "50px" }) => {
  return (
    <div className="coin123" style={{ fontSize }}>
      <div className="side123 heads">
        {/* Front Side123 - Ethereum Logo */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 256 417"
          fill="none"
        >
          <g>
            <polygon
              fill="#343434"
              points="127.9,0 125.5,8.6 125.5,279.9 127.9,282.3 255.8,209.1 "
            />
            <polygon
              fill="#8C8C8C"
              points="127.9,0 0,209.1 127.9,282.3 127.9,150.5 "
            />
            <polygon
              fill="#3C3C3B"
              points="127.9,307.2 126.5,308.9 126.5,416.6 127.9,420.8 256,233.6 "
            />
            <polygon fill="#8C8C8C" points="127.9,420.8 127.9,307.2 0,233.6 " />
            <polygon
              fill="#141414"
              points="127.9,282.3 255.8,209.1 127.9,150.5 "
            />
            <polygon fill="#393939" points="0,209.1 127.9,282.3 127.9,150.5 " />
          </g>
        </svg>
      </div>

      <div className="side123 tails123">
        {/* Back Side123 - Ethereum Logo (Inverted or repeated) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 256 417"
          fill="none"
        >
          <g>
            <polygon
              fill="#343434"
              points="127.9,0 125.5,8.6 125.5,279.9 127.9,282.3 255.8,209.1 "
            />
            <polygon
              fill="#8C8C8C"
              points="127.9,0 0,209.1 127.9,282.3 127.9,150.5 "
            />
            <polygon
              fill="#3C3C3B"
              points="127.9,307.2 126.5,308.9 126.5,416.6 127.9,420.8 256,233.6 "
            />
            <polygon fill="#8C8C8C" points="127.9,420.8 127.9,307.2 0,233.6 " />
            <polygon
              fill="#141414"
              points="127.9,282.3 255.8,209.1 127.9,150.5 "
            />
            <polygon fill="#393939" points="0,209.1 127.9,282.3 127.9,150.5 " />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default EtheriumSpinning;
