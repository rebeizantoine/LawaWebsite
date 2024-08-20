import React from "react";
import Modalpack from "./Modalpack"; // Adjust the import path as necessary

const Modalpack12345 = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="wrap12345">
      <a href="#show12345" className="modal-open12345" onClick={openModal}>
        Click To Show
      </a>

      <div className={`overlay12345 ${isOpen ? "show" : ""}`} id="show12345">
        <div className="modal12345">
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
          <div className="modal-inner12345">
            <Modalpack isOpen={isOpen} onClose={closeModal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modalpack12345;
