import React from "react";
import Contacts from "./Contacts";
import "./Offerings.css";
import useDeviceType from "../../hooks/useDeviceType";

function BusinessInsurance() {
  const isMobile = useDeviceType();
  return (
    <>
      <div className="heading-container">
        <img
          src="icons/logos/aditya_birla_logo.webp"
          className="popup-icon" alt="jsx-a11y/alt-text"
        ></img>
        {isMobile ? <h3>Business Insurance</h3> : <h1>Business Insurance</h1>}
      </div>
      <p>
        Business insurance is about safeguarding the foundation of your hard
        work, ensuring your business remains secure when challenges arise. It's
        more than just a safety net; it's a strategic tool for wealth
        protection, offering tax benefits and reducing employee attrition by
        fostering confidence and stability. As a Certified Insurance Advisor, I
        specialize in a range of business insurance plans designed to meet
        diverse needs and budgets. Whether you want to protect your assets,
        enhance employee retention, or optimize tax savings, I can guide you
        toward the best solutions. My commitment is to provide personalized and
        reliable advice, empowering you to make informed decisions that protect
        your business.{" "}
        <strong>
          Uncertainty is inevitable, but with the right insurance, you can
          ensure your business stays resilient and thrives.
        </strong>{" "}
        Let's collaborate to secure the future of your enterprise.
      </p>
      <p>
        <br />
        Contact Me to Explore Plans
      </p>
      <Contacts />
    </>
  );
}

export default BusinessInsurance;
