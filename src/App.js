import React, { createElement } from 'react';
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



// Idea: use popup to display some details when clicked on what I Offer links
// e: if clikced on Life insurance - show ABSLI cert
// if clicked on dmat account, provide info like - when opened account with me, you'll get tips.
