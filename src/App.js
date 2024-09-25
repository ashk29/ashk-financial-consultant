import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import IntroPage from './components/IntroPage';
import OfferPage from './components/OfferPage';
import WhyPage from './components/WhyPage';

function App() {
  return (
    <>
    <Navbar />
      <IntroPage />
      <OfferPage />
      <WhyPage/>
      
      </>
  );
}

export default App;
