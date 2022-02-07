import React, { useEffect, useState } from "react";
import { getAllFlights } from "../services/flightService";

function Flights() {
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

  const renderFlights = (flight) => {
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
      <ul>
        {flights && flights.length > 0 ? (
          flights.map((flight) => renderFlights(flight))
        ) : (
          <p>There aren't any flights</p>
        )}
      </ul>
    </>
  );
}

export default Flights;
