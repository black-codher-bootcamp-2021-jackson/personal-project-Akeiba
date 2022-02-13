import React from "react";
import NavBar from "./NavBar";
import TravelCalendar from "./TravelCalendar";

import "../Styles/Nav.css";
import "../Styles/Hotel.css";

// Will change, need links to load primarily
const Hotels = () => {
  return (
    <>
      <NavBar />
      <div className="hotel-underlay">
        <div className="hotel-page">
          <div className="hotels-page">
            <h1 className="hotels-header">Hotels</h1>
            <TravelCalendar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
