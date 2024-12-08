import React from "react";
import "../components/Footer.css";

export default function Footer() {
  return (
    <>
      <hr />
      <div className="footer-container">
        <span className="footer-txt">
          Copyright © 2024 KHANDELWAL CONSULTANCY All rights reserved.
          <br />
          <br />
        </span>
        <div>
          <div className="footer-address">
            <span>Addess :</span>
            <span>
              Khandelwal Consultancy
              <br />
              LIG-607, Padmanabhpur, Durg
              <br />
              Chhattisgarh, 491001
            </span>
          </div>
            <div className="footer-address">Phone no : +91-8819080000</div>
        </div>
      </div>
    </>
  );
}
