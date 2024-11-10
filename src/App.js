import React from "react";
import "./App.css";
import IntroPage from "./components/IntroPage";
import OfferPage from "./components/OfferPage";
import WhyPage from "./components/WhyPage";
import Videos from "./components/VideoPage";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import SipCalculator from "./components/sip_calc/SipCalculator";

function App() {
  return (
    <>
      <Navbar />
      <SipCalculator />
      <IntroPage />
      <Questions />
      <OfferPage />
      <WhyPage />
      <Videos />
    </>
  );
}

export default App;
