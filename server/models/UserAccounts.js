const mongoose = require("mongoose");
const { Schema } = mongoose;

const userAccountSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  country: String,
  bucketList: [Object],
});

mongoose.model("userAccounts", userAccountSchema);
