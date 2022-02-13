import React from "react";
import NavBar from "./NavBar";

import "../Styles/Nav.css";
import "../Styles/Parking.css";
import TravelCalendar from "./TravelCalendar";

// Will change, need links to load primarily
const Parking = () => {
  return (
    <>
      <NavBar />
      <div className="parking-underlay">
        <div className="parking-page">
          <div className="parking-page">
            <h1 className="parking-header">Parking</h1>
            <TravelCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Parking;
