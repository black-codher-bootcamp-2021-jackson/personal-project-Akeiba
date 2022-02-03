// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/Nav.css";

import NavBar from "./Components/NavBar";
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
              <NavBar />
            </>
          }
        ></Route>

        <Route
          exact
          path="/Menu"
          render={() => (
            <>
              <NavBar />
              <Menu />
            </>
          )}
        ></Route>

        <Route
          exact
          path="/Passport"
          render={() => (
            <>
              <NavBar />
              <Passport />
            </>
          )}
        ></Route>

        <Route
          exact
          path="/Suitcase"
          render={() => (
            <>
              <NavBar />
              <Suitcase />
            </>
          )}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
