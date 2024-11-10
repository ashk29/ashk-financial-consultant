import React from "react";
import "./Offerings.css";
import useDeviceType from "../../hooks/useDeviceType";

function DmatAccount() {
  const isMobile = useDeviceType();
  return (
    <>
      <div className="heading-container">
        <img src="icons/logos/dmat.png" className="popup-image"></img>
        {isMobile ? <h3>Dmat Account</h3> : <h1>Dmat Account</h1>}
      </div>
      <p>
        Open your trading account today and step into the world of investing.
        Enjoy seamless trading, quick transactions, and access to market
        insights. With a trading account, you can take control of your financial
        future and start building your wealth. Begin your trading journey with
        us now!
      </p>
      <ul className="aligned-list">
      <strong>Advantages of opening Dmat account with my link:</strong>
        <li>Free Investment Advice</li>
        <li>Timely Buy/Sell tips</li>
        <li>Handpicked Stocks advice</li>
      </ul>
      <a
        href="https://alphaekyc.adityabirlamoney.com/?utm_source=DRA&dracode=DRA626452"
        target="_blank"
        className="dmat-txt"
      >
        <br/>Let's Get Started
        <img src="icons/green/arrow.svg" class="arrow-icon"></img>
      </a>
    </>
  );
}

export default DmatAccount;
