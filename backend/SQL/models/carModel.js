const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  Date: String,
  Time: String,
  Latitude: String,
  Longitude: String,
  Car_ID: String,
});

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
