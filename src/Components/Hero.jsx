import React from "react";
import "../Styles/hero.css";

const Hero = () => {
  const handleScrollToServices = (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <div className="bigger-hero">
        <div className="hero-grid-banner">
          <div className="left-hero">
            <h1 className="hero-h1">
              "Boost your "
              <span className="text-span">Social Media Presence</span>
            </h1>
            <p className="hero-paragraph">
              "We provide social media marketing services & help customers reach
              their marketing goals."
            </p>
            <a
              href="#services"
              className="button-hero"
              onClick={handleScrollToServices}
            >
              View All Services
            </a>
            <a href="" className="button-hero-white">
              Client Portal
            </a>
          </div>
          <div className="rigth-hero">
            <img
              src="https://cdn.prod.website-files.com/628d4467de238a5806753c9b/633aecdc16e4ef44e583444f_Social-plug-hero.svg"
              alt=""
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
