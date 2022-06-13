const express = require("express");
const router = express.Router();
const loginController = require("../api/controllers/mapController");

router.route("/").post(loginController.getCar);

module.exports = router;
