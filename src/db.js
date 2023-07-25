const mongoose = require("mongoose");
require("dotenv").config();

const dbUrl = process.env.MONGO_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "tasklist",
};

mongoose
  .connect(dbUrl, options)
  .then(() => {
    console.log("Succesfully databases conection");
  })
  .catch((error) => {
    console.error("Databases couldn't be connected", error);
  });
