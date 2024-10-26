import React from "react";
import Contacts from "./Contacts";
import MFLogos from "./MFLogos";

function MutualFund() {
  return (
    <>
      <div className="heading-container">
        {/* <img src="icons/logos/old_man.png" className="popup-image" style={{height:'10rem', width:'10rem'}}></img> */}
        <img src="icons/logos/mutual_fund.webp" className="popup-image"></img>
        <h1>Mutual Funds</h1>
      </div>
      <p>
        Put your money to work with Mutual Funds and let it grow. With
        professional management and diversified portfolios, mutual funds are a
        smart way to invest. Enjoy the potential for long-term growth,
        liquidity, and flexibility. Start your investment journey today and
        watch your wealth grow effortlessly over time. Hundreds of mutual funds to choose from:
      </p>
      <MFLogos/>
      <p>Contact Me to Explore Plans</p>
      <Contacts />
    </>
  );
}

export default MutualFund;
