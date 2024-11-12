import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import SipCalc from "./pages/SipCalc";
import { HashRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sip-calculator" element={<SipCalc />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
