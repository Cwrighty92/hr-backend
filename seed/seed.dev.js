const data = require("./devData/index.js");
const mongoose = require("mongoose");
const { DB_URL } = require("../config");
const seedDB = require("./seed");

mongoose
  .connect(
    DB_URL,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log(`Begining Seed to ${DB_URL}`);
  })
  .then(() =>
    seedDB(data.companies, data.departments, data.employees, data.teams)
  )
  .then(() => {
    console.log("Seed Completed");
    mongoose.disconnect();
  });
