import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar-area">
        <div className="nav-title-area">
          <h1 className="nav-title">J A U N T</h1>
        </div>

        <div className="nav-links-area">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/Menu" className="nav-link">
            Menu
          </Link>

          <Link to="/Passport" className="nav-link">
            Passport
          </Link>

          <Link to="/Suitcase" className="nav-link">
            Suitcase
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
