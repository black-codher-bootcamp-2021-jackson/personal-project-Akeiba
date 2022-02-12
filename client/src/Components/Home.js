import React from "react";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

import "../Styles/Nav.css";
import "../Styles/Home.css";

// React Icons
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

// Will change, need links to load primarily
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-underlay">
        <div className="home-page">
          <h1 className="home-header">Home</h1>

          <div className="home-icons-area">
            <NavLink to="/Flights" className="home-nav-link-path">
              <a href="/Flights" className="home-nav-link">
                <FaPlaneDeparture />
              </a>
            </NavLink>

            <NavLink to="/Hotels" className="home-nav-link-path">
              <a href="" className="home-nav-link">
                <FaBed />
              </a>
            </NavLink>

            <NavLink to="/Parking" className="home-nav-link-path">
              <a href="" className="home-nav-link">
                <FaCar />
              </a>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
