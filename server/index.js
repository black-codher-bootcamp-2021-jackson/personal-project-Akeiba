//////////////////////////////////////////////
// IMPORT ENVIRONMENT VARIABLES
require("dotenv").config();

//////////////////////////////////////////////
// IMPORT DEPENDENCIES
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//////////////////////////////////////////////
// IMPORT YOUR SCHEMAS HERE
// require("./models/Profiles"); //This is just an example. Don't forget to delete this
require("./models/Flights");
require("./models/UserAccounts");

//////////////////////////////////////////////
// GLOBAL VARIABLES
const app = express();
// This is where your API is making its initial connection to the database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
  useNewUrlParser: true,
});

//////////////////////////////////////////////
// THINGS THE APP WILL DO
app.use(bodyParser.json());

//////////////////////////////////////////////
// IMPORT YOUR API ROUTES HERE
// Below is just an example. Don't forget to delete it.
// It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
// require("./routes/profilesRoutes")(app);
require("./routes/flightsRoutes")(app);
require("./routes/userAccountsRoutes")(app);

//////////////////////////////////////////////
// MAKE APPLICATION AVAILABLE AND LISTENING FOR RESPONSES
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
