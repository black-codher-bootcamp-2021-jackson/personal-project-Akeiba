import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Styles/Calendar.css";

////////////////////////////////////////////////
////////////////////////////////////////////////

function TravelCalendar() {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    console.log("date1 = ", date[0]);
    console.log("date 2 = ", date[1]);
    setDate(date);
  };

  return (
    <div className="travel-calendar-section">
      <div className="calendar-container">
        <Calendar onChange={onChange} value={date} selectRange={true} />
      </div>
      {date.length > 0 ? (
        <p className="text-center">
          <span className="bold">Start:</span> {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className="bold">End:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center"></p>
      )}
    </div>
  );
}

export default TravelCalendar;

// ORIGINAL CODE
// import React from "react";
// import { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// function TravelCalendar() {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className="calendar">
//       <h1 className="calendar-title">Travel Calendar</h1>

//       <div>
//         <Calendar onChange={setDate} value={date} />
//       </div>
//     </div>
//   );
// }

// export default TravelCalendar;

// const [value, onChange] = useState(new Date());

// return (
//   <div>
//     <Calendar onChange={onChange} value={value} />
//   </div>
// );

// function TravelCalendar() {
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className="calendar">
//       <h1 className="calendar-title">Travel Calendar</h1>
//       <div className="calendar-container">
//         <Calendar onChange={setDate} value={date} />
//       </div>
//       <p className="result-text">
//         <span className="bold">Selected Date:</span> {date.toDateString()}
//       </p>
//     </div>
//   );
// }

// Extended broken code
// return (
//   <div className="travel-calendar-section">
//     <h1 className="text-center">React Calendar with Range</h1>
//     <div className="calendar-container">
//       <Calendar onChange={onChange} value={date} selectRange={true} />
//     </div>
//     {date.length > 0 ? (
//       <p className="text-center">
//         <span className="bold">Start:</span> {date[0].toDateString()}
//         &nbsp;|&nbsp;
//         <span className="bold">End:</span> {date[1].toDateString()}
//       </p>
//     ) : (
//       <p className="text-center">
//         <span className="bold">Default selected date:</span>
//         {date.toDateString()}
//       </p>
//     )}
//   </div>
// );

// import React, { useState } from 'react';
// import Calendar from 'react-calendar';

// const CalendarView = () => {
//   const [date, setDate] = useState(new Date());
//   const onChange = date => setDate(date)

//   return (
//   <>
//   <div>
//     <Calendar onChange={onChange} value={date} />
//     <p>{date.toLocaleDateString()}</p> </div> </> );

// };

// export default CalendarView;
