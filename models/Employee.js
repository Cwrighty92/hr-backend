const mongoose = require("mongoose");
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  contactDetails: {
    type: Object,
    required: true
  },
  personalDetails: {
    type: Object,
    required: true
  },
  picture_url: {
    type: string
  }
});
