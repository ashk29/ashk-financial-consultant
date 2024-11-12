import React, { useState, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('next'); // State to track the slide direction
  const [animate, setAnimate] = useState(false); // State to trigger animation re-render

  const isMobile = useDeviceType();

  const handleNext = () => {
    setSlideDirection('next');
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
      setCurrentIndex((prevIndex) =>
        prevIndex >= BannerImage.length - imagesPerSlide() ? 0 : prevIndex + imagesPerSlide()
      );
    }, 50);
  };

  // Function to go to the previous slide
  const handlePrev = () => {
    setSlideDirection('prev');
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? BannerImage.length - imagesPerSlide() : prevIndex - imagesPerSlide()
      );
    }, 50);
  };

  // Function to determine the number of images to show per slide
  const imagesPerSlide = () => {
    return isMobile ? 1 : 2;
  };

  // useEffect to automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // 5-second interval

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <hr className="page-line"></hr>
      <h2 className="page-heading"> Why You Need Planning</h2>
      {/* <div className="why-page-container">
        {BannerImage.map((image, index) => (
          <WhyBanner img_path={image} img_txt={BannerText[index]} />
        ))}
      </div> */}
      <div className="carousel-container">
      <button className="carousel-arrow left-arrow" onClick={handlePrev}>
        &#8249;
      </button>

      <div
        className={`carousel-images ${
          animate ? (slideDirection === 'next' ? 'slide-next' : 'slide-prev') : ''
        }`}
      >
        {BannerImage.slice(currentIndex, currentIndex + 2).map((image, index) => (
          <div className="why-banner" key={index}>
            <WhyBanner img_path={image} img_txt={BannerText[currentIndex + index]} />
          </div>
        ))}
      </div>

      <button className="carousel-arrow right-arrow" onClick={handleNext}>
        &#8250;
      </button>
    </div>
    </>
  );
}
