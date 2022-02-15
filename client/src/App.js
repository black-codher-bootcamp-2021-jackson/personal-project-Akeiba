// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/Nav.css";

// Upper nav components import
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Passport from "./Components/Passport";
import Suitcase from "./Components/Suitcase";

// Lower nav components import
import Flights from "./Components/Flights";
import Hotels from "./Components/Hotels";
import Parking from "./Components/Parking";

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

        <Route
          exact
          path="/Flights"
          element={
            <>
              <Flights />
            </>
          }
        ></Route>

        <Route
          exact
          path="/Hotels"
          element={
            <>
              <Hotels />
            </>
          }
        ></Route>

        <Route
          exact
          path="/Parking"
          element={
            <>
              <Parking />
            </>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Need to add this

// import { React, useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import NavBar from "./NavBar";
// import Menu from "./Menu";
// // import { NavLink } from "react-router-dom";

// import "../Styles/Nav.css";
// import "../Styles/Home.css";

// // Will change, need links to load primarily
// const Home = () => {
//   const [userLoggedIn, setUserLoggedIn] = useState(false);
//   const [userName, setUserName] = useState("Stranger");

//   const akeiba = {
//     name: "Laura",
//     age: "28",
//   };

//   return (
//     <>
//       <Router>
//         <NavBar
//           userLoggedIn={userLoggedIn}
//           setUserLoggedIn={setUserLoggedIn}
//           userName={userName}
//         />

//         <Switch>
//           <Route path="/Menu">
//             {userLoggedIn ? (
//               <>
//                 <Menu userName={userName} age={laura.age} />
//               </>
//             ) : (
//               <>
//                 <p>Hello {userName}, you need to be logged in to get started</p>
//               </>
//             )}
//           </Route>

//           <Route path="/">
//             <>
//               <div className="home-underlay">
//                 <div className="home-page">
//                   <div className="home-section"></div>
//                   <p className="home-welcome-text">
//                     Ready to travel without the limitations of package
//                     holidays?...{" "}
//                   </p>
//                 </div>
//               </div>
//             </>
//           </Route>
//         </Switch>
//       </Router>
//     </>
//   );
// };

// export default Home;
