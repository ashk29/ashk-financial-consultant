import React from "react";
import "./Navbar.css";
import useDeviceType from "../hooks/useDeviceType";

export default function Navbar() {
  const NavIcons = [
    "icons/black/whatsapp.png",
    "icons/black/phone-call.png",
    "icons/black/mail.png",
    "icons/black/google-forms.png",
  ];
  const NavTexts = ["Whatsapp", "Call", "E-Mail", "Form"];
  const NavLinks = [
    "https://wa.me/+918819080000?text=Hi",
    "tel:+91 8819080000",
    "mailto:ashish.khandelwal29@gmail.com",
    "https://docs.google.com/forms/d/1xTTU3xv4y0BPYgRKYiHnY8__aJvGsPQO13UKEZ9of8k/edit",
  ];
  const isMobile = useDeviceType();

  return (
    <div className="header">
      <div className="header-container">
        <a href="/">
          <img src="icons/icon.png" alt="Logo" className="logo"></img>
        </a>
        <div className={isMobile ? "sub-container-mob" : "sub-container"}>
          <a href="/" className="brand">
            KHANDELWAL
            <div className="sub-brand">Consultancy</div>
          </a>
          <div className={isMobile ? "navs-mob" : "navs"}>
            {NavIcons.map((navIcon, idx) => (
              <div className="nav-item" key={"navItem-" + idx}>
                {isMobile ? (
                  <a href={NavLinks[idx]}>
                    <img
                      src={navIcon}
                      alt="phone"
                      className="icons"
                      key={"navLink-" + idx}
                    />
                  </a>
                ) : (
                  <>
                    <img
                      src={navIcon}
                      alt="phone"
                      className="icons"
                      key={"navIcon-" + idx}
                    />
                    <a
                      href={NavLinks[idx]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-text"
                      key={"navLink-" + idx}
                    >
                      {NavTexts[idx]}
                    </a>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
