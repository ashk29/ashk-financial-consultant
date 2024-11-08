import React from "react";
import "./App.css";
import IntroPage from "./components/IntroPage";
import OfferPage from "./components/OfferPage";
import WhyPage from "./components/WhyPage";
import Videos from "./components/VideoPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <IntroPage />
      <OfferPage />
      <WhyPage />
      <Videos />
    </>
  );
}

export default App;
