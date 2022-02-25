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
            <div className="suitcase-background-box">
              <p className="suitcase-p">
                Your journey starts at{" "}
                <span className="selection">{departureAirport}</span> Airport,
                <br></br>
                <br></br>
                You'll be parking in their
                <span className="selection">{chosenParking}</span>.<br></br>
                <br></br>
                Next you'll be flying out to
                <span className="selection">{arrivalAirport}</span> Airport.
                <br></br>
                <br></br>
                Once you've arrived, you'll spend your days exploring
                <span className="selection">{chosenCity}</span>,<br></br>
                <br></br>
                and spending your nights at
                <span className="selection">{chosenHotel}</span>.
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
