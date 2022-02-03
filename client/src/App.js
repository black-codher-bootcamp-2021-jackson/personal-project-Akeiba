// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/Nav.css";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Passport from "./Components/Passport";
import Suitcase from "./Components/Suitcase";

// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>

        <Route
          exact
          path="/Menu"
          element={
            <>
              <Menu />
            </>
          }
        ></Route>

        <Route
          exact
          path="/Passport"
          element={
            <>
              <Passport />
            </>
          }
        ></Route>

        <Route
          exact
          path="/Suitcase"
          element={
            <>
              <Suitcase />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
