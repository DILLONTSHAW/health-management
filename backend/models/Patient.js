// backend/models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  condition: { type: String, required: true },
  // Add more fields as needed
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
