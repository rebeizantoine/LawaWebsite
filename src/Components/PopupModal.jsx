// components/PopupModal.js
import React from "react";
import "../Styles/popupmodal.css"; // Style it as you want

const PopupModal = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <div>{children}</div>
        <div className="modal-actions">
          <button onClick={onConfirm} className="btn-confirm">
            Proceed
          </button>
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
