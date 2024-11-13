import React from "react";
import Navbar from "../components/Navbar";
import IntroPage from "../components/IntroPage";
import Questions from "../components/Questions";
import OfferPage from "../components/OfferPage";
import WhyPage from "../components/WhyPage";
import Videos from "../components/VideoPage";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <IntroPage />
      <Questions />
      <OfferPage />
      <WhyPage />
      <Videos />
      <Footer/>
    </>
  );
}
