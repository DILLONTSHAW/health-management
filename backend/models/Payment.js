// models/Payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  // Define the payment schema fields here
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  // Add more fields as needed
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
