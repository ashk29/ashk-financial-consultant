import React, { createElement } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import IntroPage from './components/IntroPage';
import OfferPage from './components/OfferPage';
import WhyPage from './components/WhyPage';
import Videos from './components/VideoPage';

function App() {
  return (
    <>
    <Navbar />
      <IntroPage />
      <OfferPage />
      <WhyPage />
      <Videos/>
      </>
  );
}

export default App;



