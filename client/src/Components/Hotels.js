import React from "react";
import NavBar from "./NavBar";
import { useState } from "react";
import Calendar from "react-calendar";

import "../Styles/Nav.css";
import "../Styles/Hotel.css";

// Will change, need links to load primarily
const Hotels = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => setDate(date);

  return (
    <>
      <NavBar />
      <div className="hotel-underlay">
        <div className="hotel-page">
          <div className="hotels-page">
            <div className="hotels-calendar">
              <Calendar onChange={onChange} value={date} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
