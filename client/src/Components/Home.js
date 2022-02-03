import React from "react";
import "../Styles/Nav.css";
import NavBar from "./NavBar";

// Will change, need links to load primarily
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="home-page">
        <h1 className="home-header">Home</h1>
      </div>
    </>
  );
};

export default Home;
