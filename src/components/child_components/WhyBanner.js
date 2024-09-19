import React from "react";

const WhyBanner = ({ img_path, img_txt, isVisible }) => {
  return (
    // <div className="scroll-item">
      <div className="why-banner-container">
        <img src={img_path} className="why-image"></img>
        <h3>{img_txt}</h3>
      </div>
  );
};
export default WhyBanner;
