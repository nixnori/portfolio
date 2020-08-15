import React, { useState } from "react";
import "./Nav.scss";

const Nav = () => {
  const [links, setLinks] = useState(["about", "projects"]);

  return (
    <nav className="nav">
      {links.map((link) => {
        return (
          <a href={`#${link}`} className="nav__links">
            {link}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
