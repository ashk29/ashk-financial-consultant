import React from "react";
import './Questions.css';

export default function Questions() {
  return (
    <>
      <hr className="page-line"></hr>
      <h2 className="page-heading"> Have Questions ?</h2>
      <div className="questions-page-container">
        <div className="question">
          <img src="images/how-much-sip.png" className="question-img"></img>
          <button className="question-btn">SIP Calculator</button>
        </div>
        <div className="question">
          <img src="images/are-you-protected.png" className="question-img"></img>
          <button className="question-btn"> Check Protection Score</button>
        </div>
      </div>
    </>
  );
}
