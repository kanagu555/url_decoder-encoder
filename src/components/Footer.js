import React from "react";
import "./Design.css";

const Footer = () => {
  return (
    <div className="footer-flex">
      {new Date().getFullYear()} - Made with &nbsp;{" "}
      <i class="bi bi-heart-half" /> &nbsp; by Kanagaraj K
    </div>
  );
};

export default Footer;
