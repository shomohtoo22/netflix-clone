import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src={require("./images/netflixlogo.png")}
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src={require("./images/user.png")}
        alt="User Logo"
      />
    </div>
  );
}

export default Nav;
