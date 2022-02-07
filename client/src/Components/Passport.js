import React from "react";
import "../Styles/Nav.css";
import "../Styles/passport.css";
import NavBar from "./NavBar";

const Passport = () => {
  return (
    <>
      <NavBar />
      <div className="passport-page">
        <h1 className="passport-header">Passport</h1>

        <div className="passport-login-area">
          <form className="passport-login-form">
            <label htmlFor="passportLogin">
              <input
                id="passport-name"
                type="text"
                className="passport-login-input"
                placeholder="Your username..."
              ></input>

              <input
                id="passport-email"
                type="text"
                className="passport-login-input"
                placeholder="Your email address..."
              ></input>

              <input
                id="passport-password"
                type="password"
                className="passport-login-input"
                placeholder="Create your password"
              ></input>

              <input
                type="submit"
                className="submit-btn"
                value="Let's go!"
              ></input>
            </label>
          </form>
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
