import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getAllUserAccounts } from "../services/userAccountService";

import "../Styles/Nav.css";
import "../Styles/passport.css";

////////////////////////////////////////////////
////////////////////////////////////////////////

const Passport = () => {
  // If any changes to userAccounts at all, app will call this function inside of useEffect
  const [userAccounts, setUserAccounts] = useState(null);

  // get UserAccounts data from server
  useEffect(() => {
    async function getUserAccounts() {
      if (!userAccounts) {
        const response = await getAllUserAccounts();
        setUserAccounts(response);
      }
    }

    getUserAccounts();
  }, [userAccounts]);

  // Display userAccount in a certain way
  const renderUserAccount = (userAccount) => {
    return (
      <li key={userAccount._id}>
        <h2>{`
          Hey ${userAccount.username} 👋🏽)
        `}</h2>

        <h3>{`
          name = ${userAccount.name}, email = ${userAccount.email}, password = ${userAccount.password}, country = ${userAccount.country}, bucketlist = ${userAccount.bucketList}
        `}</h3>
      </li>
    );
  };

  return (
    <>
      <NavBar />
      <div className="passport-underlay">
        <ul>
          {userAccounts && userAccounts.length > 0 ? (
            userAccounts.map((userAccount) => renderUserAccount(userAccount))
          ) : (
            <p>There aren't any user accounts 😭</p>
          )}
        </ul>

        <div className="passport-page">
          <div className="passport-login-area">
            <form className="passport-login-form">
              <label htmlFor="passportLoginUsername" className="passport-label">
                Username
                <input
                  id="passport-name"
                  type="text"
                  className="passport-login-input"
                  placeholder="Your username..."
                ></input>
              </label>

              <label htmlFor="passportLoginEmail" className="passport-label">
                Email
                <input
                  id="passport-email"
                  type="text"
                  className="passport-login-input"
                  placeholder="Your email address..."
                ></input>
              </label>

              <label htmlFor="passportLoginPassword" className="passport-label">
                Password
                <input
                  id="passport-password"
                  type="password"
                  className="passport-login-input"
                  placeholder="Create your password"
                ></input>
              </label>

              <label htmlFor="passportLoginUsername" className="passport-label">
                <input
                  type="submit"
                  className="submit-btn"
                  value="Let's go!"
                ></input>
              </label>

              <label htmlFor="passportLoginCountry" className="passport-label">
                Country
                <input
                  id="passport-country"
                  type="text"
                  className="passport-login-input"
                  placeholder="Add your country"
                ></input>
              </label>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// Will change, need links to load primarily

export default Passport;

// return (
//   <>
//   <NavBar />
//   <input placeholder={props.placeholder}></input>

//   </>
// )
