const express = require("express");
const app = express();
const loginRoute = require("./routes/loginRoute");
const mapRoute = require("./routes/mapRoute");
const ejs = require("ejs");
const path = require("path");

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "/public")));
let list = [];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(3000, (req, res) => {
  console.log("Server is listening on port 3000");
});

app.get("/", (req, res) => {
  res.render("login", { error: false });
});

app.use("/users", loginRoute);
app.use("/map", mapRoute);
