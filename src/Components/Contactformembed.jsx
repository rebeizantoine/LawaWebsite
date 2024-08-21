import React, { useEffect } from "react";
import "../App.css"; // Assuming you have a global CSS file

const ContactFormEmbed = () => {
  useEffect(() => {
    // Function to load the Tally script if it's not already present
    const loadTallyScript = () => {
      if (
        !document.querySelector(
          'script[src="https://tally.so/widgets/embed.js"]'
        )
      ) {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.head.appendChild(script);
      }
    };

    // Load the Tally script
    loadTallyScript();

    // Load all embeds on the page once the script is loaded
    const handleLoadEmbeds = () => {
      if (window.Tally) {
        window.Tally.loadEmbeds();
      }
    };

    // Add event listener to call Tally.loadEmbeds() once the script is loaded
    document.addEventListener("DOMContentLoaded", handleLoadEmbeds);

    // Clean up event listener
    return () => {
      document.removeEventListener("DOMContentLoaded", handleLoadEmbeds);
    };
  }, []);

  return (
    <div className="page-container">
      <div className="content-wrap">
        <div
          style={{
            position: "relative",
            height: "calc(90vh - 20px)", // Reduced height slightly to avoid cutting off
            padding: "20px 150px", // Added padding
          }}
        >
          <iframe
            data-tally-src="https://tally.so/embed/31M60b?transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Contact Form"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              border: "0",
            }}
          ></iframe>
        </div>
      </div>
      <footer className="footer">{/* Footer content goes here */}</footer>
    </div>
  );
};

export default ContactFormEmbed;
