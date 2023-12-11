// backend/models/Bed.js
const mongoose = require('mongoose');

const bedSchema = new mongoose.Schema({
  bedNumber: { type: Number, required: true, unique: true },
  occupied: { type: Boolean, default: false },
  // Add more fields as needed
});

const Bed = mongoose.model('Bed', bedSchema);

module.exports = Bed;
