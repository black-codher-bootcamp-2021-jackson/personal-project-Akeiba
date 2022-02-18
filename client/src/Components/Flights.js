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
function Flights({ setFlightAirport }, { setFlightDates }) {
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

  // const onButtonClick = (airport, date) => {
  //   console.log("airport = ", airport);
  //   console.log("date = ", date);

  //   setFlightAirport(airport);
  //   setFlightDates(date);
  // };

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

  const flyDate = ["20th January 2022", "15th June 2022"];
  console.log("flights = ", flights);
  const beforeFlights = flights.map((flight) => flight.airport_destinations);
  console.log("Before = ", beforeFlights);
  const getAirports = beforeFlights.map((val) => val[0].name);
  console.log("get = ", getAirports);
  const noRepeatAirports = getAirports.reduce(
    (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
    []
  );
  console.log("no rep = ", noRepeatAirports);

  // Calendar state changes
  // const [date, setDate] = useState(new Date());
  // const onChange = (date) => setDate(date);

  return (
    <>
      <NavBar />
      <div className="flight-underlay">
        <div className="flight-page">
          <TravelCalendar />
          <p>
            You'll be flying from {flyDate[0]} to {flyDate[1]}
          </p>
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

/* <div>
  <p>{renderUserAccount(userAccount)}</p>
</div>;


  ////////////////////////
  // User Account state change
  const [userAccount, setUserAccount] = useState(null);

  // If any changes to flights at all, app will call this function inside of useEffect
  // Get flights data from server
  useEffect(() => {
    async function getUserAccounts() {
      if (!userAccount) {
        const response = await getAllUserAccounts();
        setUserAccount(response);
      }
    }

    getUserAccounts();
  }, [userAccount]);

  const renderUserAccount = (userAccount) => {
    return (
      <li key={userAccount._id}>
        <h2>{`
               ${userAccount.username} (${userAccount.email})
            `}</h2>
        {/* <h3>{`
             ${userAccount.map((user) => user.bucketList)};
            `}</h3> */
//     </li>
//   );
// }; */}

////////////////////////

/* <div className="flights-calendar">
            <Calendar onChange={onChange} value={date} />
          </div> */
