import React, { useEffect, useState } from "react";
import { getAllFlights } from "../services/flightService";
import Calendar from "react-calendar";

import NavBar from "./NavBar";
import "../Styles/Flights.css";

function Flights() {
  // If any changes to flights at all, app will call this function inside of useEffect
  const [flights, setFlights] = useState(null);

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

  // Display flight in a certain way
  const renderFlight = (flight) => {
    return (
      <li key={flight._id}>
        <h2>{`
               ${flight.airport_name} (${flight.airport_code})
            `}</h2>
        <h3>{`
            I fly to ${flight.airport_destinations.map((item) => item.name)};
            `}</h3>
      </li>
    );
  };

  const [date, setDate] = useState(new Date());

  const onChange = (date) => setDate(date);

  return (
    <>
      <NavBar />
      <div className="flight-underlay">
        <div className="flight-page">
          <div className="flights-calendar">
            <Calendar onChange={onChange} value={date} />
          </div>
          <ul>
            {flights && flights.length > 0 ? (
              flights.map((flight) => renderFlight(flight))
            ) : (
              <p>There aren't any flights</p>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Flights;
