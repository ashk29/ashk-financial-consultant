import React from "react";
import "./Offerings.css";

const mf_logos = [
  "icons/logos/mf_logos/amfi_logo.png",
  "icons/logos/mf_logos/hdfc_mf_logo.png",
  "icons/logos/mf_logos/icici_logo.png",
  "icons/logos/mf_logos/Mirae_Asset_logo.webp",
  "icons/logos/mf_logos/PPFAS_MF_logo.webp",
  "icons/logos/mf_logos/sbi_logo.jpeg",
  "icons/logos/mf_logos/bandhan_mf_logo.jpeg",
  "icons/logos/mf_logos/nippon-mf.jpg",
  "icons/logos/mf_logos/motilal-mf-logo.webp",
  "icons/logos/mf_logos/aditya-birla-mf_logo.png",
];

function MFLogos() {
  var firstLine = mf_logos.slice(0, 5);
  var secondLine = mf_logos.slice(5, mf_logos.length);
  
  return (
    <>
      <div class="random-image-container">
        {firstLine.map((img, index) => (
          <img src={img} className="random-image" alt="jsx-a11y/alt-text"></img>
        ))}
      </div>
      <div class="random-image-container">
        {secondLine.map((img, index) => (
          <img src={img} className="random-image" alt="jsx-a11y/alt-text"></img>
        ))}
      </div>
    </>
  );
}

export default MFLogos;
