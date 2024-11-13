import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import SipCalc from "./pages/SipCalc";
import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sip-calculator" element={<SipCalc />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
