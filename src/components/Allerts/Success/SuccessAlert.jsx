import React, { useEffect } from "react";
import ReactDom from "react-dom";

const SuccessAlert = ({ open, onClose }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      onClose();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!open) return null;
  return ReactDom.createPortal(
    <div className="successAlert">
      <div className="successAlert__item">
        <div>
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <div>
          <p>Payment Successful</p>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default SuccessAlert;
