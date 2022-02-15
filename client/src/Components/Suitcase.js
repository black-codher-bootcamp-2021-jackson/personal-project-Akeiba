import React from "react";
import NavBar from "./NavBar";
import TravelCalendar from "./TravelCalendar";

import "../Styles/Nav.css";
import "../Styles/Suitcase.css";

// Will change, need links to load primarily
const Suitcase = () => {
  return (
    <>
      <NavBar />
      <div className="suitcase-underlay">
        <div className="suitcase-page">
          <div className="suitcase-page">
            <h1 className="suitcase-header">Suitcase</h1>
            <div>
              <TravelCalendar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suitcase;
