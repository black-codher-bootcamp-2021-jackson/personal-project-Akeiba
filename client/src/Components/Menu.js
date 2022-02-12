import React from "react";
import NavBar from "./NavBar";

import "../Styles/Nav.css";
import "../Styles/Menu.css";

// Will change, need links to load primarily
const Menu = () => {
  return (
    <>
      <NavBar />
      <div className="menu-underlay">
        <div className="menu-page">
          <div className="menu-page">
            <h1 className="menu-header">Menu</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
