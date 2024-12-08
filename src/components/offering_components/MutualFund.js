import React from "react";
import Contacts from "./Contacts";
import MFLogos from "./MFLogos";
import "./Offerings.css";
import useDeviceType from "../../hooks/useDeviceType";

function MutualFund() {
  const isMobile = useDeviceType();
  return (
    <>
      <div className="heading-container">
        <img src="icons/logos/mutual_fund.png" className="popup-image" alt="jsx-a11y/alt-text"></img>
        {isMobile ? <h3>Mutual Funds</h3> : <h1>Mutual Funds</h1>}
      </div>
      <p>
        Put your money to work with Mutual Funds and let it grow. With
        professional management and diversified portfolios, mutual funds are a
        smart way to invest. Enjoy the potential for long-term growth,
        liquidity, and flexibility. Start your investment journey today and
        watch your wealth grow effortlessly over time. Hundreds of mutual funds
        to choose from:
      </p>
      <MFLogos />
      <p>
        <br />
        Contact Me to Explore Plans
      </p>
      <Contacts />
    </>
  );
}

export default MutualFund;
