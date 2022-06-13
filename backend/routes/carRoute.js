const express = require("express");
const router = express.Router();
const carController = require("../SQL/controllers/carController");

router.route("/").post(carController.getCar);

module.exports = router;
