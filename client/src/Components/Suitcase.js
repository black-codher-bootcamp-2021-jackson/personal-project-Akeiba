import React from "react";
import NavBar from "./NavBar";
import TravelCalendar from "./TravelCalendar";

import "../Styles/Nav.css";
import "../Styles/Suitcase.css";

////////////////////////////////////////////////
////////////////////////////////////////////////

// need to import the "getters" not the "setters" to show state of selected suitcase items

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
