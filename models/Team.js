const mongoose = require("mongoose");
const { Schema } = mongoose;

const TeamSchema = new Schema({
  teamName: {
    type: String,
    required: true
  },
  belongs_to_department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "departments",
    required: true
  }
});

module.exports = mongoose.model("teams, TeamSchema");
