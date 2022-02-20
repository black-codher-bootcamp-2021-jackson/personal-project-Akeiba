import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import TravelCalendar from "./TravelCalendar";

// import DropdownBar from "./Dropdown";

import "../Styles/Nav.css";
import "../Styles/Parking.css";

////////////////////////////////////////////////
////////////////////////////////////////////////

const Parking = () => {
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
            {/* <DropdownBar /> */}
            <TravelCalendar />
            <div className="parking-dropdown">
              <form className="parking-form">
                <label>
                  You'll be parking for {parkingNoDays} days at: <br></br>
                </label>
                <select name="parkingselectList" className="parkingSelectList">
                  <option value="option 1">London Stansted</option>
                  <option value="option 2">Indira Ghandi International</option>
                  <option value="option 3">
                    José María Córdova International
                  </option>
                  <option value="option 4">Ljubljana Jože Pučnik</option>
                  <option value="option 5">Hong Kong International</option>
                  <option value="option 6">Seville</option>
                  <option value="option 7">Birmingham International</option>
                  <option value="option 8">Manchester</option>
                  <option value="option 9">Rafael Núñez International</option>
                </select>
                <br></br>
                <input
                  type="submit"
                  className="submit-btn"
                  value="Pack into my Suitcase!"
                  // onChange={handleSelectedAirport}
                ></input>
                <p>
                  You selected <span></span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parking;

// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// function TravelCalendar() {
//   const [value, onChange] = useState(new Date());

// return (
//   <div className="calendar">
//     <h1 className="calendar-title">Travel Calendar</h1>

//     <div>
//       <Calendar onChange={onChange} value={value} />
//     </div>
//   </div>
// );
// }

/* <div className="parking-dropdown">
<form className="parking-form">
  <label>
    I'll be parking at: <br></br>
  </label>
  <select name="parkingselectList" className="parkingSelectList">
    <option value="option 1">London Stansted</option>
    <option value="option 2">Indira Ghandi International</option>
    <option value="option 3">
      José María Córdova International
    </option>
    <option value="option 4">Ljubljana Jože Pučnik</option>
    <option value="option 5">Hong Kong International</option>
    <option value="option 6">Seville</option>
    <option value="option 7">Birmingham International</option>
    <option value="option 8">Manchester</option>
    <option value="option 9">Rafael Núñez International</option>
  </select>
  <br></br>
  <input
    type="submit"
    className="submit-btn"
    value="Pack into my Suitcase!"
    onChange={handleSelectedAirport}
  ></input>
  <p>
    You selected <span></span>
  </p>
</form>
</div> */
