import React from "react";
import Contacts from "./Contacts";
import "./Offerings.css";
import useDeviceType from "../../hooks/useDeviceType";

function HealthInsurance() {
  const isMobile = useDeviceType();
  return (
    <>
      <div className="heading-container">
        <img
          src="icons/logos/start_health_logo.png"
          className="popup-icon"
        ></img>
        {isMobile ? <h3>Health Insurance</h3> : <h1>Health Insurance</h1>}
      </div>
      <p>
        Health insurance is your safety net in an uncertain world. With rising
        medical costs, it ensures you and your family are protected from
        unexpected financial burdens due to illness or accidents. As a
        <strong>Certified Star Health Insurance Agent</strong>, I provide
        comprehensive coverage options tailored to meet your unique needs. From
        routine check-ups to critical health issues, I offer plans that give you
        confidence and peace of mind. Choosing the right health insurance isn't
        just about coverage—it's about ensuring your financial well-being. With
        my expertise and trusted service, you can rest easy knowing you have
        dependable and affordable protection. Don't wait for an emergency to
        think about your health security. Invest in your future today with a
        customized plan. Let's secure your peace of mind together—
        <strong>
          your health is your greatest wealth, and I'm here to help you protect
          it.
        </strong>
      </p>
      <p>
        <br />
        Contact Me to Explore Plans
      </p>
      <Contacts />
    </>
  );
}

export default HealthInsurance;
