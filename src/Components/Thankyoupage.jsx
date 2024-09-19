import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/thankyoupage.css"; // Ensure you import the CSS file
import logosmm from "../Images/jansmmlogo.png";

const Thankyoupage = () => {
  const navigate = useNavigate();
  function handleNavigation(path) {
    navigate(path);
  }

  return (
    <div className="thank-you-container">
      <h1 className="thank-you-message">Thank You for Your Order!</h1>
      <img
        src={logosmm}
        // src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/643f0d770b2aae1624f2453d_Socialplug-logo-black.svg"
        alt="Thank You"
        className="thank-you-image"
      />
      <p className="thank-you-details">
        We appreciate your business and are processing your order. You will
        receive a confirmation email shortly with the details of your purchase.
        If you have any questions, feel free to contact our support team.
      </p>
      <div className="porshe">
        <a href="/" className="button123" onClick={handleNavigation("/")}>
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default Thankyoupage;
