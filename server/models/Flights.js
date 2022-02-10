const mongoose = require("mongoose");
const { Schema } = mongoose;

const flightSchema = new Schema({
  airport_name: String,
  airport_code: String,
  city: String,
  country: String,
  airport_destinations: [String],
  airport_price_range: String,
});

mongoose.model("flights", flightSchema);
