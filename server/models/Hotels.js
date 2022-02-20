const mongoose = require("mongoose");
const { Schema } = mongoose;

const hotelSchema = new Schema({
  city: String,
  hotel_name: String,
});

mongoose.model("hotels", hotelSchema);
