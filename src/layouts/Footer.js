import React from "react";
import Copyright from "../components/Copyright";
import SocialDetails from "../components/SocialDetails";
import SocialMedia from "../components/SocialMedia";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social">
        <SocialDetails />
        <SocialMedia />
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
