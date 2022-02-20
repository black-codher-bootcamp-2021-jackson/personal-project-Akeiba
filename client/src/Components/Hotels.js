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

  console.log("hotels =", hotels);
  const allHotelOptions = (hotels || []).reduce((venues, hotel) => {
    return [...venues, hotel.hotel_name];
  }, []);

  console.log("all hotels =", allHotelOptions);
  /////////
  // const [date, setDate] = useState(new Date());
  // const onChange = (date) => setDate(date);

  const defaultCities = [
    "Stockholm",
    "Bogota",
    "Buenos Aires",
    "Munich",
    "Ljubljana",
    "Vilnius",
  ];

  const noOfNights = 6;

  return (
    <>
      <NavBar />
      <div className="hotel-underlay">
        <div className="hotel-page">
          <div className="hotels-page">
            <div className="hotel-background-box">
              <TravelCalendar />

              <form className="parking-form">
                <label>I'm visiting </label>
                <select name="parkingselectList" className="parkingSelectList">
                  <option value="option 1">{defaultCities[0]}</option>
                  <option value="option 2">{defaultCities[1]}</option>
                  <option value="option 3">{defaultCities[2]}</option>
                  <option value="option 4">{defaultCities[3]}</option>
                  <option value="option 5">{defaultCities[4]}</option>
                  <option value="option 6">{defaultCities[5]}</option>
                </select>
                <br></br>
                for {noOfNights} nights <br></br>
                <input
                  type="submit"
                  className="submit-btn"
                  value="Pack into my Suitcase!"
                  // onChange={handleSelectedAirport}
                ></input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hotels;
