import React from "react";

const WhyBanner = ({ img_path, img_txt }) => {
  return (
    // <div className="scroll-item">
      <div className="why-banner-container">
        <img src={img_path} className="why-image" alt="jsx-a11y/alt-text"></img>
        <h3 className="banner-txt">{img_txt}</h3>
      </div>
  );
};
export default WhyBanner;
