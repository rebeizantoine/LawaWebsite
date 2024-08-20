import React, { useEffect, useRef } from "react";
import "../Styles/sketchbox.css"; // Ensure this path is correct

const SketchBox = ({ onAnimationEnd }) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const box = boxRef.current;

    const handleAnimation = () => {
      box.classList.add("animate");
      setTimeout(() => {
        box.classList.remove("animate");
        onAnimationEnd(); // Notify parent when animation ends
      }, 2000); // Adjust duration as needed
    };

    handleAnimation();
    window.addEventListener("resize", handleAnimation); // Trigger on resize as well

    return () => window.removeEventListener("resize", handleAnimation);
  }, [onAnimationEnd]);

  return (
    <div className="sketch-box" ref={boxRef}>
      <div className="sketch-content">
        {/* Content for the sketch box */}
        <h2>Welcome to Our Service!</h2>
      </div>
    </div>
  );
};

export default SketchBox;
