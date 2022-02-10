import React from "react";
import "../Styles/Nav.css";
import NavBar from "./NavBar";

// Will change, need links to load primarily
const Parking = () => {
  return (
    <>
      <NavBar />
      <div className="parking-page">
        <h1 className="parking-header">Parking</h1>
      </div>
    </>
  );
};

export default Parking;
