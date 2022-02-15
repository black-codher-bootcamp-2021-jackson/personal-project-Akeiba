import React, { useState } from "react";
import { Calendar } from "react-calendar";

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => setDate(date);

  return (
    <>
      <div>
        <Calendar onChange={onChange} value={date} />
        <p>{date.toLocaleDateString()}</p>
      </div>
    </>
  );
};

export default CalendarView;
