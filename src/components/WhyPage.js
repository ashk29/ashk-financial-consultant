import React from "react";
import WhyBanner from "./child_components/WhyBanner";
import "./OfferPage.css";
import "./WhyPage.css";

const BannerImage = [
  "images/family.png",
  "images/growth-chart.png",
  "images/retired-person.png",
  "images/toddler-with-father.png",
];
const BannerText = [
  "To Secure Your Family",
  "To Grow Your Wealth ",
  "To Retire Happily",
  "To Secure your child’s future",
];

export default function WhyPage() {
  return (
    <>
      <hr className="page-line"></hr>
      <h2 className="page-heading"> Why You Need Planning</h2>
      <div className="why-page-container">
        {BannerImage.map((image, index) => (
          <WhyBanner img_path={image} img_txt={BannerText[index]} />
        ))}
      </div>
    </>
  );
}
