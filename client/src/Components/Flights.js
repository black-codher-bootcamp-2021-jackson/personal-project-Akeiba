import React, { useEffect, useState } from "react";
import { getAllFlights } from "../services/flightService";
// import { getAllUserAccounts } from "../services/userAccountService";

// import Calendar from "react-calendar";
import TravelCalendar from "./TravelCalendar";
import NavBar from "./NavBar";
import "../Styles/Flights.css";

////////////////////////////////////////////////
////////////////////////////////////////////////
////////////////////////////////////////////////

// Function
function Flights({ setFlightAirport, setFlightDates }) {
  // Flights state change
  const [flights, setFlights] = useState(null);

  // If any changes to flights at all, app will call this function inside of useEffect
  // Get flights data from server
  useEffect(() => {
    async function getFlights() {
      if (!flights) {
        const response = await getAllFlights();
        setFlights(response);
      }
    }

    getFlights();
  }, [flights]);

  ///// ?
  // const onButtonClick = (airport, date) => {
  //   console.log("airport = ", airport);
  //   console.log("date = ", date);

  //   setFlightAirport(airport);
  //   setFlightDates(date);
  // };

  const flyDate = ["20th January 2022", "15th June 2022"];

  // const destinations = flights.map((flight) => ({
  //   desti: flight.airport_destinations.map((val) => val.name),
  // }));
  // console.log("res =", destinations);

  const defaultDestinations = [
    "London Stansted",
    "Berlin Brandenburg",
    "Indira Ghandi International",
    "Munich International",
    "Goa International",
    "Ezeiza International",
    "El Calafate",
    "Ljubljana Jože Pučnik",
  ];

  const destinations = (flights || []).reduce((dests, flight) => {
    // console.log("dest =", dests);
    // console.log("flight =", flight);
    return [...dests, ...flight.airport_destinations];
  }, []);
  console.log("destinations =", destinations);
  console.log("flights =", flights);

  const destinationNames = destinations.map((desti) => desti.name);
  console.log("destinationNames =", destinationNames);

  const filteredDestinationNames = destinationNames
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    )
    .sort();

  console.log("Dfilt = ", filteredDestinationNames);

  /////////////////////////
  // Calendar state changes
  // const [date, setDate] = useState(new Date());
  // const onChange = (date) => setDate(date);

  return (
    <>
      <NavBar />
      <div className="flight-underlay">
        <div className="flight-page">
          <div className="flight-background-box">
            <form className="parking-form">
              <label>Flying from:</label>
              <select name="parkingselectList" className="parkingSelectList">
                <option value="option 1">Vienna</option>
                <option value="option 2">Malaga</option>
                <option value="option 3">
                  José María Córdova International
                </option>
                <option value="option 4">Stockholm Arlanda</option>
                <option value="option 5">Hong Kong International</option>
                <option value="option 6">Seville</option>
                <option value="option 7">Birmingham International</option>
                <option value="option 8">Manchester</option>
                <option value="option 9">Rafael Núñez International</option>
              </select>

              <label>Flying to:</label>
              <select name="parkingselectList" className="parkingSelectList">
                <option value="option 1">{defaultDestinations[0]}</option>
                <option value="option 2">{defaultDestinations[1]}</option>
                <option value="option 3">{defaultDestinations[2]}</option>
                <option value="option 4">{defaultDestinations[3]}</option>
                <option value="option 5">{defaultDestinations[4]}</option>
                <option value="option 6">{defaultDestinations[5]}</option>
                <option value="option 7">{defaultDestinations[6]}</option>
                <option value="option 8">{defaultDestinations[7]}</option>
              </select>
            </form>

            <TravelCalendar />
            <p>
              You're going away from {flyDate[0]} to {flyDate[1]}, and
              travelling to {defaultDestinations[Math.floor(Math.random() * 8)]}
              Airport
            </p>
            <input
              type="submit"
              className="submit-btn"
              value="Pack into my Suitcase!"
              // onChange={handleSelectedAirport}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default Flights;

//////// Previous Flights display
// Get flights from back end
/* <ul>
{flights && flights.length > 0 ? (
  flights.map((flight) => renderFlight(flight))
) : (
  <p>There aren't any flights</p>
)}
</ul> */

// // Display flight in a certain way
// const renderFlight = (flight) => {
//   return (
//     <li key={flight._id}>
//       <h2>{`
//              ${flight.airport_name} (${flight.airport_code})
//           `}</h2>
//       <h3>{`
//           I fly to ${flight.airport_destinations.map((item) => item.name)};
//           `}</h3>
//     </li>
//   );
// };

////////////
