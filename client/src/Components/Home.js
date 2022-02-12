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
          <div className="home-page">
            <h1 className="home-header">Home</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
