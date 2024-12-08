import React from "react";
import "./Questions.css";
import { useNavigate } from "react-router-dom";

export default function Questions() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/sip-calculator");
  };
  return (
    <>
      <hr className="page-line"></hr>
      <h2 className="page-heading"> Have Questions ?</h2>
      <div className="questions-page-container">
        <div className="question">
          <img src="images/how-much-sip.png" className="question-img" alt="jsx-a11y/alt-text"></img>
          <button className="question-btn" onClick={handleNavigate}>
            SIP Calculator
          </button>
        </div>
        <div className="question">
          <img
            src="images/are-you-protected.png"
            className="question-img" alt="jsx-a11y/alt-text"
          ></img>
          <a
            href="https://lisalesbuddy.adityabirlacapital.com/abslitools/financialprotectiontool/financialprotection.html?advisor_code=1624464133686&need_id=1624526620665&link_code=1725711361937"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="question-btn"> Check Protection Score</button>
          </a>
        </div>
      </div>
    </>
  );
}
