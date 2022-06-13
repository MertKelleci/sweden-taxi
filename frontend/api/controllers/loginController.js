const express = require("express");
const app = express();
const api = require("../axios");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

exports.login = async (req, res) => {
  await api
    .post("/users/login", req.body)
    .then((response) => {
      if (response.status == 200) {
        res.render("main");
      } else {
        res.render("login", { error: true });
      }
    })
    .catch((e) => {
      res.render("login", { error: true });
    });
};

exports.logout = async (req, res) => {
  await api
    .post("/users/logout", req.body)
    .then((response) => {
      if (response.status == 200) {
        res.render("login", { error: false });
      } else {
        res.render("login", { error: true });
      }
    })
    .catch((e) => {
      res.status(400).json(response.data);
    });
};

exports.signup = async (req, res) => {
  await api
    .post("/users/signup", req.body)
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json(response.data);
    });
};
