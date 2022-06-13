const Car = require("../models/carModel");

exports.getCar = async (req, res, next) => {
  const { Car_ID, Date1, Hour1, Date2, Hour2 } = req.body;
  const carList = [];

  try {
    const carData = await Car.find({ Car_ID: Car_ID });
    for (let i = 0; i < carData.length; i++) {
      let carDate = new Date(`${carData[i].Date} ${carData[i].Time}`);
      let beginDate = new Date(`${Date1} ${Hour1}`);
      let endDate = new Date(`${Date2} ${Hour2}`);

      if (carDate > beginDate && endDate > carDate) {
        carList.push(carData[i]);
      }
    }
    res.status(200).json({ status: "success", carData: carList });
  } catch (e) {
    res.status(400).json({ status: "failure", text: e });
  }
};
