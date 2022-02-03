import React from "react";
import "../Styles/Nav.css";
import NavBar from "./NavBar";

// Will change, need links to load primarily
const Menu = () => {
  return (
    <>
      <NavBar />
      <div className="menu-page">
        <h1 className="menu-header">Menu</h1>
      </div>
    </>
  );
};

export default Menu;
