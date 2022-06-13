const express = require("express");
const app = express();
const api = require("../axios");
const singletonArray = require("../../public/scripts/singletonArray");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

exports.getCar = async (req, res) => {
  await api
    .post("/cars/", req.body)
    .then((response) => {
      response.data.carData.forEach((element) => {
        singletonArray.push(element);
      });
      res.send(response.data.carData);
    })
    .catch((e) => {
      console.log(e);
    });
};
