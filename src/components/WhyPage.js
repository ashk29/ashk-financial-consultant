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
  "To Secure your child’s future",
];

export default function WhyPage() {
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [slideDirection, setSlideDirection] = useState("next");
  // const [animate, setAnimate] = useState(false);

  const isMobile = useDeviceType();

  // const handleNext = () => {
  //   console.log(imagesPerSlide())
  //   setSlideDirection("next");
  //   setAnimate(false);
  //   setTimeout(() => {
  //     setAnimate(true);
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex >= BannerImage.length - imagesPerSlide()
  //         ? 0
  //         : prevIndex + imagesPerSlide()
  //     );
  //   }, 50);
  // };

  // const handlePrev = () => {
  //   console.log(imagesPerSlide())
  //   setSlideDirection("prev");
  //   setAnimate(false);
  //   setTimeout(() => {
  //     setAnimate(true);
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === 0
  //         ? BannerImage.length - imagesPerSlide()
  //         : prevIndex - imagesPerSlide()
  //     );
  //   }, 50);
  // };

  // Function to determine the number of images to show per slide
  const imagesPerSlide = () => {
    // return isMobile ? 1 : 2;
    return 1;
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     handleNext();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [currentIndex]);

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
    setIndex((prevIndex) =>
      prevIndex === BannerImage.length - 1 ? 0 : prevIndex + imagesPerSlide()
    );
  }

  useEffect(() => {
    resetTimeout();
    timeout.current = setTimeout(() => setIndexValue(), delay);
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
        <div
          className="carousel-images"
          style={{ transform: `translate3d(0%, 0, 0)` }}
        >
          {
            <WhyBanner
              img_path={BannerImage[index]}
              img_txt={BannerText[index]}
            />
          }
        </div>

        <button className="carousel-arrow right-arrow" onClick={setIndexValue}>
          &#8250;
        </button>
      </div>
    </>
  );
}
