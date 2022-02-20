import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../Styles/Calendar.css";

////////////////////////////////////////////////
////////////////////////////////////////////////

function TravelCalendar() {
  const [date] = useState(new Date());
  // const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    console.log("date1 = ", date[0]);
    console.log("date 2 = ", date[1]);
    // , setDate(date);
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

// ////////////////////////////
// ////////////////////////////
// ////////////////////////////
// function TravelCalendar() {
//   const [date, setDate] = useState(new Date());
//   const [startDate, setStartDate] = useState("");
//   const [endDate, setEndDate] = useState("");

//   const onChange = (date) => {
//     console.log("date1 = ", date[0]);
//     console.log("date 2 = ", date[1]);
//     setStartDate(date[0]);
//     setEndDate(date[1]);
//   };

//   return (
//     <div className="travel-calendar-section">
//       <div className="calendar-container">
//         <Calendar onChange={onChange} value={date} selectRange={true} />
//       </div>
//       {startDate.length > 0 && endDate.length > 0 ? (
//         <p className="text-center">
//           <span className="bold">Start:</span> {startDate.toDateString()}
//           &nbsp;|&nbsp;
//           <span className="bold">End:</span> {endDate.toDateString()}
//         </p>
//       ) : (
//         <p className="text-center"></p>
//       )}
//     </div>
//   );
// }

// export default TravelCalendar;
