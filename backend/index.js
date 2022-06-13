const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./routes/userRoute");
const carRouter = require("./routes/carRoute");

app.use(express.json());
app.listen(4000, () => console.log(`Backend Listening on port 4000`));

const connectWithRetry = () => {
  mongoose
    .connect(
      "mongodb+srv://<USERNAME:PASSWORD>@cluster0.mei0v.mongodb.net/CarsDB?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected to the Mongo Atlas Database"))
    .catch((e) => {
      console.log(e);
      setTimeout(connectWithRetry(), 5000);
    });
};
connectWithRetry();

app.use("/api/v1/users", userRouter);
app.use("/api/v1/cars", carRouter);
