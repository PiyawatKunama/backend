const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const wageSchema = new Schema({
  Total_Value: {
    type: Number,
    required: true,
  },
  wage_owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Wage", wageSchema);
