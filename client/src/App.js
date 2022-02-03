// import React, { useState, useEffect } from "react";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./Styles/Nav.css";

import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";
import Passport from "./Components/Passport";
import Suitcase from "./Components/Suitcase";

// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

function App() {
  // const [profiles, setProfiles] = useState(null);

  // useEffect(() => {
  //   async function getProfiles() {
  //     if (!profiles) {
  //       const response = await getAllProfiles();
  //       setProfiles(response);
  //     }
  //   }

  //   getProfiles();
  // }, [profiles]);

  // const renderProfile = (user) => {
  //   return (
  //     <li key={user._id}>
  //       <h3>
  //         {`${user.first_name}
  //         ${user.last_name}`}
  //       </h3>
  //       <p>{user.location}</p>
  //     </li>
  //   );
  // };

  return <NavBar />;
}

export default App;

// Starter code
// {
//   /* <div>
// <ul>
//   {profiles && profiles.length > 0 ? (
//     profiles.map((profile) => renderProfile(profile))
//   ) : (
//     <p>No profiles found</p>
//   )}
// </ul>
// </div> */
// }

//// Nav not working
{
  /* <BrowserRouter>
<Route
  exact
  path="/"
  render={() => (
    <>
      <NavBar />
    </>
  )}
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
</BrowserRouter> */
}
