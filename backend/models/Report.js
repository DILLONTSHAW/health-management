// backend/models/Report.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  content: { type: String, required: true },
  // Add more fields as needed
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report; 
