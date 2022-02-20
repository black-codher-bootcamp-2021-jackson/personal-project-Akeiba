import React, { useEffect, useState } from "react";
import { getAllFlights } from "../services/flightService";
// import { getAllUserAccounts } from "../services/userAccountService";

// import Calendar from "react-calendar";
import TravelCalendar from "./TravelCalendar";
import NavBar from "./NavBar";
import "../Styles/Flights.css";

////////////////////////////////////////////////
////////////////////////////////////////////////

// Function
function Flights({ setFlightAirport, setFlightDates }) {
  // Flights state change
  const [flights, setFlights] = useState(null);
  // const [startDate, setStartDate] = useState(null);
  // const [endDate, setEndDate] = useState(null);
  const [departureAirport, setDepartureAirport] = useState(null);
  const [arrivalAirport, setArrivalAirport] = useState(null);
  // const [chosenCity, setChosenCity] = useState(null);

  /////

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

  const handleDeparture = (e) => {
    console.log("from =", e.target.value);
    setDepartureAirport(e.target.value);
  };

  const handleArrival = (e) => {
    console.log("to =", e.target.value);
    setArrivalAirport(e.target.value);
  };

  const flyDate = ["20th January 2022", "15th June 2022"];

  ///////////
  // ARRIVALS
  // Get all possible destination flights
  const allArrivalDestinations = (flights || []).reduce((dests, flight) => {
    return [...dests, ...flight.airport_destinations];
  }, []);

  // Filter through, ensure no repeats, and sort into alphabetical order
  const allArrivalDestinationsList = allArrivalDestinations
    .map((desti) => desti.name)
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    )
    .sort();

  // Map through and provide dropdown option for each arrival destination
  let arrivalOptions = allArrivalDestinationsList.map((item) => (
    <option key={item}>{item}</option>
  ));

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
              <select onChange={handleDeparture}>{arrivalOptions}</select>

              <label>Flying to:</label>
              <select onChange={handleArrival}>{arrivalOptions}</select>
            </form>

            <TravelCalendar />
            <p>
              You're going away from {flyDate[0]} to {flyDate[1]}, and
              travelling from
              {departureAirport} Airport to {arrivalAirport} airport
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
//           I fly to ${flight.airport_arrivalDestinations.map((item) => item.name)};
//           `}</h3>
//     </li>
//   );
// };

///// ?
// const onButtonClick = (airport, date) => {
//   console.log("airport = ", airport);
//   console.log("date = ", date);

//   setFlightAirport(airport);
//   setFlightDates(date);
// };

/////////
// DEPARTURES
// Get all origin airport names
// let depFlightList = [];
// const allDepartureDestinations = (flights || []).reduce((dests, flight) => {
//   // depFlightList.push(flight.airport_name);
//   return [...dests, ...flight.airport_name];
// }, []);

///////

// console.log("obj =", Object.values(flights));
// const originFlights = Object.values(flights);
// // const mapOrig = originFlights.reduce()
// console.log("orig = ", typeof originFlights);

// const originFlights = Object.values(flights);
// console.log(originFlights.map((val) => val.airport_name));

//////

// const allDepartureDestinations = (flights || []).reduce((dests, flight) => {
//   depFlightList.push(flight.airport_name);
//   return [...dests, ...flight.airport_name];
// }, []);

// console.log("allDep =", allDepartureDestinationsList);
// console.log("dep =", depFlightList);

// Filter through, ensure no repeats, and sort into alphabetical order
// const allDepartureDestinationsList = depFlightList
//   .map((desti) => desti.name)
//   .reduce(
//     (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
//     []
//   )
//   .sort();

// // Map through and provide dropdown option for each arrival destination
// let departureOptions = allDepartureDestinationsList.map((item) => (
//   <option key={item}>{item}</option>
// ));
// console.log("departure options = ", departureOptions);
/////////

/* <p>
You're going away from {flyDate[0]} to {flyDate[1]}, and
travelling to
{arrivalOptions[Math.floor(Math.random() * 8)]}
Airport
</p> */

///////////
