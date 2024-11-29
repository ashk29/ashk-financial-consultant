import React, { useState, useEffect, useRef } from "react";
import WhyBanner from "./child_components/WhyBanner";
import "./OfferPage.css";
import "./WhyPage.css";
import useDeviceType from "../hooks/useDeviceType";

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
  "To Secure your child's future",
];

export default function WhyPage() {
  
  const isMobile = useDeviceType();

  // Function to determine the number of images to show per slide
  const imagesPerSlide = () => {
    return isMobile ? 1 : 2;
  };

  const [index, setIndex] = useState(0);
  const delay = 5000;
  const timeout = useRef(null);
  const [animationState, setAnimationState] = useState("slide-in");

  function resetTimeout() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
  }

  function setIndexValue() {
    setAnimationState("slide-out"); // Start slide out
    setTimeout(() => {
      setIndex((prevIndex) =>
        prevIndex === BannerImage.length - imagesPerSlide()
          ? 0
          : prevIndex + imagesPerSlide()
      );
      setAnimationState("slide-in"); // After slide-out, start slide in
    }, 1000); // Slide-out duration matches the CSS animation duration
  }

  useEffect(() => {
    resetTimeout();
    timeout.current = setTimeout(() => setIndexValue(), delay);
    console.log("Inde value:" + index);
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <hr className="page-line"></hr>
      <h2 className="page-heading"> Why You Need Planning</h2>
      <div className="why-page-container">
        <button className="carousel-arrow left-arrow" onClick={setIndexValue}>
          &#8249;
        </button>
        <div className="carousel-images">
          <div
            className={`slider ${
              animationState === "slide-in" ? "slide-in" : "slide-out"
            }`}
          >
            {BannerImage.slice(index, index + imagesPerSlide()).map(
              (image, idx) => (
                <WhyBanner img_path={image} img_txt={BannerText[index + idx]} />
              )
            )}
          </div>
        </div>

        <button className="carousel-arrow right-arrow" onClick={setIndexValue}>
          &#8250;
        </button>
      </div>
    </>
  );
}
