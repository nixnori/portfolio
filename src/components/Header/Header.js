import React from "react";
import "./Header.scss";
import Nav from "../Nav/Nav";

const Header = () => {
  return (
    <header className="header">
      <a href="#home" className="header__link">
        <h1 className="header__logo">NIKKI NORIEGA</h1>
      </a>
      <Nav />
    </header>
  );
};

export default Header;
