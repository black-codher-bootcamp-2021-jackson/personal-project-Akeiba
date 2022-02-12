import React from "react";
import NavBar from "./NavBar";

import "../Styles/Nav.css";
import "../Styles/Parking.css";

// Will change, need links to load primarily
const Parking = () => {
  return (
    <>
      <NavBar />
      <div className="parking-underlay">
        <div className="parking-page">
          <div className="parking-page">
            <h1 className="parking-header">Parking</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parking;
