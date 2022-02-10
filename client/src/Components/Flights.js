import React, { useEffect, useState } from "react";
import { getAllFlights } from "../services/flightService";
import NavBar from "./NavBar";

function Flights() {
  // If any changes to flights at all, call this function inside of useEffect

  const [flights, setFlights] = useState(null);

  useEffect(() => {
    async function getFlights() {
      if (!flights) {
        const response = await getAllFlights();
        setFlights(response);
      }
    }

    getFlights();
  }, [flights]);

  const renderFlight = (flight) => {
    return (
      <li key={flight._id}>
        <h2>{`
               ${flight.airport_name} (${flight.airport_code})
            `}</h2>
        <h3>{`
            I fly to ${flight.airport_destinations}
            `}</h3>
      </li>
    );
  };

  return (
    <>
      <NavBar />

      <ul>
        {flights && flights.length > 0 ? (
          flights.map((flight) => renderFlight(flight))
        ) : (
          <p>There aren't any flights</p>
        )}
      </ul>
    </>
  );
}

export default Flights;
