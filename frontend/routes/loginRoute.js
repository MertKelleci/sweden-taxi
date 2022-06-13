const express = require("express");
const router = express.Router();
const loginController = require("../api/controllers/loginController");

router.route("/signup").post(loginController.signup);
router.route("/login").post(loginController.login);
router.route("/logout").post(loginController.logout);

module.exports = router;
