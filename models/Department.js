const mongoose = require("mongoose");
const { Schema } = mongoose;

const DepartmentSchema = new Schema({
  departmentName: {
    type: String,
    required: true
  },
  belongs_to_company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "companies",
    required: true
  }
});

module.exports = mongoose.model("departments, DepartmentSchema");
