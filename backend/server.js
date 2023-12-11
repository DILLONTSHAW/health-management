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

// Admitting a Patient
app.post('/api/admitPatient', async (req, res) => {
  try {
    const { name, condition } = req.body;
    const patient = new Patient({ name, condition });
    await patient.save();
    res.json({ success: true, message: 'Patient admitted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Booking a Bed
app.post('/api/bookBed', async (req, res) => {
  try {
    const { bedNumber } = req.body;
    const bed = await Bed.findOne({ bedNumber });

    if (!bed) {
      return res.status(404).json({ success: false, message: 'Bed not found' });
    }

    if (bed.occupied) {
      return res.status(400).json({ success: false, message: 'Bed already occupied' });
    }

    bed.occupied = true;
    await bed.save();

    res.json({ success: true, message: `Bed ${bedNumber} booked successfully` });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ... (additional routes and server setup)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
