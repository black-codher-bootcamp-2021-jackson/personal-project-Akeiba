import React from "react";
import "../Styles/Nav.css";
import NavBar from "./NavBar";

// Will change, need links to load primarily
const Suitcase = () => {
  return (
    <>
      <NavBar />
      <div className="suitcase-page">
        <h1 className="suitcase-header">Suitcase</h1>
      </div>
    </>
  );
};

export default Suitcase;
