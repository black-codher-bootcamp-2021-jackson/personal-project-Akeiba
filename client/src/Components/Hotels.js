import { React, useState, useEffect } from "react";
import { getAllHotels } from "../services/hotelService";

import NavBar from "./NavBar";
import TravelCalendar from "./TravelCalendar";

import "../Styles/Nav.css";
import "../Styles/Hotel.css";

////////////////////////////////////////////////
////////////////////////////////////////////////

const Hotels = () => {
  const [hotels, setHotels] = useState("");
  const [chosenHotel, setChosenHotel] = useState("");

  // If any changes to flights at all, app will call this function inside of useEffect
  // Get flights data from server
  useEffect(() => {
    async function getHotels() {
      if (!hotels) {
        const response = await getAllHotels();
        setHotels(response);
      }
    }

    getHotels();
  }, [hotels]);

  const allHotelOptions = (hotels || []).reduce((venues, hotel) => {
    return [...venues, hotel.hotel_name];
  }, []);

  // // Filter through, ensure no repeats, and sort into alphabetical order
  const allHotelOptionsList = allHotelOptions
    .filter((item, index) => allHotelOptions.indexOf(item) === index)
    .sort();

  // Map through and provide dropdown option for each arrival destination
  let hotelOptions = allHotelOptionsList.map((item) => (
    <option key={item}>{item}</option>
  ));

  // Store value of selected hotel dropdown item
  const handleHotel = (e) => {
    setChosenHotel(e.target.value);
  };

  /////////
  // const [date, setDate] = useState(new Date());
  // const onChange = (date) => setDate(date);

  // const noOfNights = 6;

  return (
    <>
      <NavBar />
      <div className="hotel-underlay">
        <div className="hotel-page">
          <div className="hotels-page">
            <div className="hotel-background-box">
              <TravelCalendar />

              <form className="hotels-form">
                <label>Hotels:</label>
                <select onChange={handleHotel}>{hotelOptions}</select>
                <input
                  type="submit"
                  className="submit-btn"
                  value="Pack into my Suitcase!"
                ></input>
              </form>
              <p> You've chosen to stay at {chosenHotel}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
