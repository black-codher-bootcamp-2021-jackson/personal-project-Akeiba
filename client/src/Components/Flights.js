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
function Flights({
  setChosenCity,
  departureAirport,
  setDepartureAirport,
  arrivalAirport,
  setArrivalAirport,
}) {
  // Flights state change
  const [flights, setFlights] = useState(null);

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

  // Store value of selected departure dropdown item
  const handleDeparture = (e) => {
    console.log("from =", e.target.value);
    setDepartureAirport(e.target.value);
  };

  // Store value of selected arrival dropdown item
  const handleArrival = (e) => {
    const pickAirport = e.target.value;
    let pickCity = "";

    // Find corresponding city to arrival airport
    for (let i = 0; i < allArrivalDestinations.length; i++) {
      // Will need to consider regex at a later stage for accented letters
      if (allArrivalDestinations[i].name === pickAirport) {
        pickCity = allArrivalDestinations[i].city;
        break;
      }
    }

    console.log("pick city =", pickCity);
    setChosenCity(pickCity);
    setArrivalAirport(e.target.value);
  };

  ///////////
  // DEPARTURES
  // Get all possible departure flights
  const allDepartureDestinations = (flights || []).reduce((venues, flight) => {
    return [...venues, flight.airport_name];
  }, []);

  // Filter through, ensure no repeats, and sort into alphabetical order
  const allDepartureDestinationsList = allDepartureDestinations
    .map((desti) => desti)
    .reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    )
    .sort();

  // Map through and provide dropdown option for each arrival destination
  let departureOptions = allDepartureDestinationsList.map((item) => (
    <option key={item}>{item}</option>
  ));

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
              <select onChange={handleDeparture}>{departureOptions}</select>

              <label>Flying to:</label>
              <select onChange={handleArrival}>{arrivalOptions}</select>
            </form>

            <TravelCalendar />
            <p>
              You're flying from {departureAirport} Airport, to {arrivalAirport}
              Airport!
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

// //
// going away from {flyDate[0]} to {flyDate[1]}, and
//               travelling from

// const flyDate = ["20th January 2022", "15th June 2022"];
