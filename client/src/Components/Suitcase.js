import React from "react";
import NavBar from "./NavBar";

import "../Styles/Nav.css";
import "../Styles/Suitcase.css";

////////////////////////////////////////////////
////////////////////////////////////////////////

// need to import the "getters" not the "setters" to show state of selected suitcase items

// Will change, need links to load primarily
const Suitcase = ({
  // startDate,
  // endDate,
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
                Your journey starts at {departureAirport} Airport, where you'll
                be parking in the {chosenParking}
                <br></br>
                Then you'll be flying out to {arrivalAirport} Airport. Once
                you've arrive, you'll spend your days exploring {chosenCity},
                and staying at{chosenHotel}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suitcase;

// startDate={startDate}, endDate={endDate},

/* <p>
departureAirport=
{departureAirport}, arrivalAirport={arrivalAirport},
chosenHotel={chosenHotel}, chosenCity={chosenCity},
chosenParking={chosenParking},
</p> */
