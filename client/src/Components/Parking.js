import React from "react";
import NavBar from "./NavBar";
// import { useState } from "react";
import TravelCalendar from "./TravelCalendar";

// import DropdownBar from "./Dropdown";

import "../Styles/Nav.css";
import "../Styles/Parking.css";

////////////////////////////////////////////////
////////////////////////////////////////////////

const Parking = ({ departureAirport }) => {
  // const [startDate] = useState("");
  // const [endDate] = useState("");
  // const [departureAirport] = useState("");
  // const [chosenParking, setChosenParking] = useState("");

  /////////////////
  // // Dropdown parking state
  // const [selectedAirport, setSelectedAirport] = useState("");
  // const handleSelectedAirport = (e) => {
  //   e.preventdefault();
  //   console.log("you've chosen =", e.target.value);
  //   setSelectedAirport(e.target.value);
  // };

  // This needs to to be calculated from calendar picked dates
  const parkingNoDays = 5;

  return (
    <>
      <NavBar />
      <div className="parking-underlay">
        <div className="parking-page">
          <div className="parking-background-box">
            <TravelCalendar />
            <div className="parking-dropdown">
              <form className="parking-form">
                <p>
                  You'll be parking at {departureAirport} Airport for
                  {parkingNoDays} days:
                </p>
                <label>Select Parking Type</label>
                <select name="parkingselectList" className="parkingSelectList">
                  Parking Type
                  <option value="option 1">
                    Terminal Valet Parking - £159.99
                  </option>
                  <option value="option 2">Mid Stay Green Zone - £99.99</option>
                  <option value="option 3">
                    Mid Stay Purple Zone - £69.99
                  </option>
                  <option value="option 4">Long Stay Red Zone - £57.00</option>
                  <option value="option 5">
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
