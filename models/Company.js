const mongoose = require("mongoose");
const { Schema } = mongoose;

const CompanySchema = new Schema({
  companyName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("companies, CompanySchema");
