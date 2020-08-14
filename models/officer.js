const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const officerSchema = new Schema({
  id : {
    type: Number,
    required: true
  },
  name_office: {
    type: String,
    required: true
  },
  lastname_office: {
    type: String,
    required: true
  },birthday_office: {
    type: String,
    required: true
  },idcard_office: {
    type: String,
    required: true
  },email_office: {
    type: String,
    required: true
  },username_office: {
    type: String,
    required: true
  },password_office: {
    type: String,
    required: true
  },tellnumber_office: {
    type: String,
    required: false
  },tellnumber_office2: {
    type: String,
    required: false
  },facebook_office: {
    type: String,
    required: false
  },line_office: {
    type: String,
    required: false
  },position: {
    type: String,
    required: true
  },type_wage: {
    type: String,
    required: true
  },bank: {
    type: String,
    required: true
  },bankId: {
    type: String,
    required: true
  },banktype: {
    type: String,
    required: true
  },wage: {
    type: Number,
    required: true
  },socialsecurity: {
    type: String,
    required: false
  },sspersen:{
    type: Number,
    required: false
  },taxnum:{
    type: String,
    required: false
  },texpersen:{
    type: Number,
    required: false
  }
});
module.exports = mongoose.model('Officer', officerSchema);