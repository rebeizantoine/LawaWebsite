import React, { useState } from "react";
import Multipleboxesmodal from "./Multipleboxesmodal"; // Import your modal component

const ShowModalButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Function to close modal if clicked outside the modal box
  const handleOverlayClick = (e) => {
    if (e.target.className === "modal-overlay") {
      setIsModalOpen(false);
    }
  };

  return (
    <div>
      {/* Button to trigger modal */}
      <button
        onClick={handleModalToggle}
        style={{
          backgroundColor: "#00c573",
          color: "#f6f0e6",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#00b363")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#00c573")}
      >
        Show Me
      </button>

      {/* Conditionally render the modal */}
      {isModalOpen && (
        <div
          className="modal-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleOverlayClick}
        >
          <div
            className="modal-container123"
            style={{
              position: "relative",
              backgroundColor: "#fff",
              padding: "30px",
              borderRadius: "10px",
              maxWidth: "500px",
              width: "100%",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent click inside modal from closing it
          >
            {/* Close button with user-defined position */}
            <button
              onClick={handleModalToggle}
              style={{
                position: "absolute",
                top: "50px", // Set your desired top position
                right: "50px", // Set your desired right position
                zIndex: 999999999, // Close button with highest z-index
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              X
            </button>
            <Multipleboxesmodal /> {/* The modal component */}
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowModalButton;
