import React from "react";
import WhyBanner from "./child_components/WhyBanner";
import "./OfferPage.css";
import "./WhyPage.css";
import { useEffect, useRef, useState } from "react";

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
  // const [startIndex, setStartIndex] = useState(0);
  // const delay = 5000;
  // const [visibleItems, setVisibleItems] = useState(BannerImage.slice(0, 2));
  // const [visibleText, setVisibleText] = useState(BannerText.slice(0, 2));

  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const nextIndex = (startIndex + 2) % BannerImage.length;
  //     setStartIndex(nextIndex);
  //     setVisibleItems(BannerImage.slice(nextIndex, nextIndex + 2));
  //     setVisibleText(BannerText.slice(nextIndex, nextIndex + 2));
  //     setIsVisible(!isVisible);
  //   }, delay);
  //   return () => clearInterval(interval);
  // }, [startIndex, BannerImage]);

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
