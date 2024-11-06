import React, { createElement } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import IntroPage from './components/IntroPage';
import OfferPage from './components/OfferPage';
import WhyPage from './components/WhyPage';
import Videos from './components/VideoPage';
import Navbar1 from './components/Navbar1';

function App() {
  return (
    <>
    <Navbar1 />
      <IntroPage />
      <OfferPage />
      <WhyPage />
      <Videos/>
      </>
  );
}

export default App;



