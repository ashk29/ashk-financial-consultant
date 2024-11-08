import React from "react";
import Contacts from "./Contacts";
import "./Offerings.css";

function LifeInsurance() {
  return (
    <>
      <div className="heading-container">
        <img
          src="icons/logos/aditya_birla_logo.webp"
          className="popup-icon"
        ></img>
        <h1 style={{ margin: 0 }}>Life Insurance</h1>
      </div>
      <p>
        Life insurance is about securing the future of your loved ones, ensuring
        they are financially protected when life takes unexpected turns. It's
        not just an investment; it's a commitment to those you care about,
        providing them with stability and peace of mind when they need it most.
        As a <strong>Certified Aditya Birla Insurance Agent</strong>, I
        specialize in a variety of life insurance plans that cater to different
        needs and budgets. Whether you want to safeguard your family's future,
        create a savings plan, or ensure your children's education, I can help
        you find the right coverage. My goal is to provide dependable and
        personalized service that helps you make informed decisions.{" "}
        <strong>
          Life is unpredictable, but with the right insurance, you can make sure
          that your loved ones are well taken care of.
        </strong>{" "}
        Let's work together to secure a better future for those you hold dear.
      </p>
      <div className="life-insurance-body-container">
        <a
          href="images/ashish_absli.jpeg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="images/ashish_absli.jpeg" className="absli-cert"></img>
        </a>
        <div>
          <p>
            <br />
            Let's Talk
          </p>
          <Contacts />
        </div>
      </div>
    </>
  );
}

export default LifeInsurance;
