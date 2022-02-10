import React from "react";
import "../Styles/Nav.css";
import NavBar from "./NavBar";

// Will change, need links to load primarily
const Hotels = () => {
  return (
    <>
      <NavBar />
      <div className="hotels-page">
        <h1 className="hotels-header">Hotels</h1>
      </div>
    </>
  );
};

export default Hotels;
