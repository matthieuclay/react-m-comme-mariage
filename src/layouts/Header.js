import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
