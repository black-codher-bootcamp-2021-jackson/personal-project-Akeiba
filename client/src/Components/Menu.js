import React from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

import "../Styles/Nav.css";
import "../Styles/Menu.css";

// React Icons
import { FaPlaneDeparture } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

// Will change, need links to load primarily
const Menu = () => {
  return (
    <>
      <NavBar />
      <div className="menu-underlay">
        <div className="menu-page">
          <div className="menu-page">
            <h1 className="menu-header">Menu</h1>

            <div className="menu-icons-area">
              <NavLink
                id="NavLinkFlights"
                className="menu-nav-link"
                to="/Flights"
              >
                <FaPlaneDeparture />
              </NavLink>

              <NavLink id="NavLinkHotels" className="menu-nav-link" to="/">
                <FaBed />
              </NavLink>

              <NavLink id="NavLinkParking" className="menu-nav-link" to="/">
                <FaCar />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

/* <NavLink to="/Flights" className="menu-nav-link-path">
                <a href="/" className="menu-nav-link">
                  <FaPlaneDeparture />
                </a>
              </NavLink> */

/* <NavLink to="/Hotels" className="menu-nav-link-path">
                <a href="/" className="menu-nav-link">
                  <FaBed />
                </a>
              </NavLink> */

/* <NavLink to="/Parking" className="menu-nav-link-path">
                <a href="/" className="menu-nav-link">
                  <FaCar />
                </a>
              </NavLink> */
