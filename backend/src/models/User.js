const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userInfo: {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    contactNo: String,
    password: String,
    gender: String,
    hobby: [String],
  },
  addressInfo: {
    country: String,
    state: String,
    city: String,
    address1: String,
    address2: String,
    location: String,
    zipcode: String,
  },
  educationInfo: [
    {
      educationType: String,
      passingYear: Number,
      schoolCollege: String,
      percentage: Number,
    },
  ],
});

module.exports = mongoose.model("User", UserSchema);
