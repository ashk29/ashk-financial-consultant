import React from "react";
import "./Offerings.css";

const NavIcons = [
  "icons/green/whatsapp.png",
  "icons/green/phone-call.png",
  "icons/green/mail.png",
  // "icons/green/google-forms.png",
];
const NavLinks = [
  "https://wa.me/+918819080000?text=Hi",
  "tel:+91 8819080000",
  "mailto:ashish.khandelwal29@gmail.com",
  "https://docs.google.com/forms/d/1xTTU3xv4y0BPYgRKYiHnY8__aJvGsPQO13UKEZ9of8k/edit",
];
function Contacts() {
  return (
    <div className="contact-container">
      {NavIcons.map((navItem, index) => (
        <a href={NavLinks[index]}>
          <img
            className="contact-icons"
            src={navItem}
            key={"navItem-" + index}
            alt="jsx-a11y/alt-text"
          />
        </a>
      ))}
    </div>
  );
}

export default Contacts;
