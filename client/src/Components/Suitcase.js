import React from "react";
import NavBar from "./NavBar";

import "../Styles/Nav.css";
import "../Styles/Suitcase.css";

////////////////////////////////////////////////
////////////////////////////////////////////////

// need to import the "getters" not the "setters" to show state of selected suitcase items

// Will change, need links to load primarily
const Suitcase = ({
  startDate,
  endDate,
  departureAirport,
  arrivalAirport,
  chosenHotel,
  chosenCity,
  chosenParking,
}) => {
  return (
    <>
      <NavBar />
      <div className="suitcase-underlay">
        <div className="suitcase-page">
          <div className="suitcase-page">
            <h1 className="suitcase-header">Suitcase</h1>
            <div>
              <p>
                startDate={startDate}, endDate={endDate}, departureAirport=
                {departureAirport}, arrivalAirport={arrivalAirport},
                chosenHotel={chosenHotel}, chosenCity={chosenCity},
                chosenParking={chosenParking},
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suitcase;
