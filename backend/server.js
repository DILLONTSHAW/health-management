// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/healthmanagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Importing models
const User = require('./models/User');
const Patient = require('./models/Patient');
const Bed = require('./models/Bed');
const Payment = require('./models/Payment');
const Report = require('./models/Report');

app.use(bodyParser.json());

// Your routes and other server setup can go here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
