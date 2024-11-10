import React from "react";
import Contacts from "./Contacts";
import "./Offerings.css";
import useDeviceType from "../../hooks/useDeviceType";

function RetirementPlanning() {
  const isMobile = useDeviceType();
  return (
    <>
      <div className="heading-container">
        <img
          src="icons/logos/retired_man_pencil.png"
          className="popup-image"
        ></img>
        {isMobile ? <h3>Retirement Planning</h3> : <h1>Retirement Planning</h1>}
      </div>
      <p>
        Retirement planning is essential to ensure you can enjoy your golden
        years without financial worries. It's about creating a secure future
        where you can pursue your dreams and live comfortably, free from
        money-related stress. Starting early allows you to take advantage of
        compounding growth, giving you greater financial stability when it's
        time to retire.
        <strong>
          As a well-versed retirement planner with over 20 years of experience,
          I offer personalized investment solutions tailored to your unique
          goals and needs.
        </strong>
        Whether you're looking to build wealth, protect your savings, or
        generate a steady post-retirement income, I can guide you every step of
        the way. With my expertise and commitment, I help you make informed
        decisions that lead to financial freedom. Don't leave your future to
        chance—let's work together to create a retirement plan that ensures you
        can live the life you've always dreamed of.
      </p>
      <p>
        <br />
        Contact Me to Explore Plans
      </p>
      <Contacts />
    </>
  );
}

export default RetirementPlanning;
