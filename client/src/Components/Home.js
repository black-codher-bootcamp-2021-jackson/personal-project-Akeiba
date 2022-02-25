import React from "react";
import NavBar from "./NavBar";

import "../Styles/Nav.css";
import "../Styles/Home.css";

// Will change, need links to load primarily
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-underlay">
        <div className="home-page">
          <div className="home-background-box">
            <p className="suitcase-p">
              Looking to travel with the same effort as booking a package
              holiday, without the restrictions?
              <br></br>
              <br></br>
              You've come to the right place, let's get started...
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

/* 
return (
  <div className="home-underlay">
          <div className="home-page">
            <div className="home-section"></div>
            <p className="home-welcome-text">Are yo </p>
          </div>
        </div>
) */
