import React from "react";
import "./IntroPage.css";

export default function IntroPage() {
  return (
    <div className="intro-container">
      <div className="txt-container">
        <h1>ASHISH KHANDELWAL</h1>
        <p>
          Hello, I am a certified Financial Planner.
          <br />
          I provide with all kinds of financial advice from insurance to
          <br />
          investment and live share market tips. Contact me for more details.
          <br />
          I can help you plan for retirement, insurance, child future and much
          more.
          <br />
          I have over 20+ years of experience as Financial Consultant <br />
          and have worked with ICICI and SBI for over 10 years.
        </p>
        <a
          href="https://wa.me/+918819080000?text=Hi"
          style={{ width: "fit-content" }}
        >
          <button type="button" class="chat-btn">
            Let's Chat
            <img src="icons/green/whatsapp.png" className="btn-whatsapp" alt="jsx-a11y/alt-text"></img>
          </button>
        </a>
      </div>
      <img src="images/Ashish.jpeg" className="profile-image" alt="jsx-a11y/alt-text"></img>
    </div>
  );
}
