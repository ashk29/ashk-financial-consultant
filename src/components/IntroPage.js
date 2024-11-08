import React from "react";
import "./IntroPage.css";
import useDeviceType from "../hooks/useDeviceType";

export default function IntroPage() {
  const isMobile = useDeviceType();
  return (
    <div className="intro-container">
      <div className="txt-container">
        <h1>ASHISH KHANDELWAL</h1>
        <p>
          Hey, I am Ashish Khandelwal, a certified Financial Advisor.
          <br />
          I provide with all kinds of financial advise from insurance to
          <br />
          investment and live share market tips. Contact me for more details.
          <br />
          I can help you plan for retirement, insurance, child future and much
          more.
          <br />
          I have over 20+ years of experience as financial consultant <br />
          and have worked with ICICI and SBI for over 10 years.
        </p>
        <a
          href="https://wa.me/+918819080000?text=Hi"
          style={{ width: "fit-content" }}
        >
          <button type="button" class="chat-btn">
            Let's Chat
            <img src="icons/green/whatsapp.png" className="btn-whatsapp"></img>
          </button>
        </a>
      </div>
      <img src="images/Ashish.jpeg" className="profile-image"></img>
    </div>
  );
}
