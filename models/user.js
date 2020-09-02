const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const userSchema = new Schema({
  First_name: {
    type: String,
    required: true,
  },
  Last_name: {
    type: String,
    required: true,
  },
  Sex: {
    type: String,
    required: true,
  },
  Birth_Day: {
    type: String,
    required: true,
  },
  ID_card: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Username: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Tell_number: {
    type: String,
    required: true,
  },
  Tell_number2: {
    type: String,
    required: true,
  },
  Facebook: {
    type: String,
    required: true,
  },
  Line: { 
    type: String,
    required: true,
  },
  stock_holdings: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stock",
    },
  ],
  Own_farm: [
    {
      type: Schema.Types.ObjectId,
      ref: "Farm",
    },
  ],Own_Share: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stock",
    },
  ],Own_Wage: [
    {
      type: Schema.Types.ObjectId,
      ref: "Stock",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
