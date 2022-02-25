import React from "react";
import NavBar from "./NavBar";
// import { useState } from "react";
import TravelCalendar from "./TravelCalendar";

// import DropdownBar from "./Dropdown";

import "../Styles/Nav.css";
import "../Styles/Parking.css";

////////////////////////////////////////////////
////////////////////////////////////////////////

const Parking = ({ departureAirport, setChosenParking }) => {
  // This needs to to be calculated from calendar picked dates
  // const parkingNoDays = 5;

  // Store value of selected parking dropdown item
  const handleParking = (e) => {
    console.log("parking val =", e.target.value);
    setChosenParking(e.target.value);
  };

  return (
    <>
      <NavBar />
      <div className="parking-underlay">
        <div className="parking-page">
          <div className="parking-background-box">
            <p>You'll be parking at {departureAirport} Airport:</p>
            <TravelCalendar />
            <div className="parking-dropdown">
              <form className="parking-form">
                <label>Select Parking Type</label>
                <select
                  onChange={handleParking}
                  name="parkingselectList"
                  className="parkingSelectList"
                >
                  Parking Type <br></br>
                  <option value="Terminal Valet Parking Zone">
                    Terminal Valet Parking - £159.99
                  </option>
                  <option value="Mid Stay Green Zone">
                    Mid Stay Green Zone - £99.99
                  </option>
                  <option value="Mid Stay Purple Zone">
                    Mid Stay Purple Zone - £69.99
                  </option>
                  <option value="Long Stay Red Zone">
                    Long Stay Red Zone - £57.00
                  </option>
                  <option value="Short Stay Yellow Zone">
                    Short Stay Yellow Zone - £75.99
                  </option>
                </select>
                <br></br>
                <input
                  type="submit"
                  className="submit-btn"
                  value="Pack into my Suitcase!"
                  // onChange={handleSelectedAirport}
                ></input>
                <p></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parking;

/* You selected <span></span> */
