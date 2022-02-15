import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import Calendar from "react-calendar";

// import "react-calendar/dist/Calendar.css";
import "../Styles/Nav.css";
import "../Styles/Parking.css";
// import TravelCalendar from "./TravelCalendar";

// Will change, need links to load primarily
const Parking = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => setDate(date);

  return (
    <>
      <NavBar />
      <div className="parking-underlay">
        <div className="parking-page">
          <div>
            <Calendar onChange={onChange} value={date} />
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
