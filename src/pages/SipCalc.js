import React from "react";
import SipCalculator from "../components/sip_calc/SipCalculatorPage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SipCalc() {
  return (
    <>
      <Navbar />
      <SipCalculator />
      <Footer/>
    </>
  );
}

export default SipCalc;
