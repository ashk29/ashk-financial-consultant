import React from "react";
import "./Navbar.css";

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
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="icons/icon.png"
              className="d-inline-block align-text-top logo"
              alt="Logo"
            />
            KHANDELWAL
            <div>Consultancy</div>
          </a>
          
          <ul className="nav justify-content-end">
            {NavIcons.map((navItem, index) => (
              <li className="nav-item">
                <a className="nav-link" href={NavLinks[index]}>
                  <img
                    src={navItem}
                    className="nav-icon"
                    key={"navItem-" + index}
                  />
                  {NavTexts[index]}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                More Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    SIP Calculator
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
