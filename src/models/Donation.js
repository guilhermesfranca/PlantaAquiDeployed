const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donorName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  ongName: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: '',
  },
  email: {
    type: String,
    default: '',
  },
  status: {
    type: String,
    enum: ['pending', 'completed'],
    default: 'completed',
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Donation', donationSchema);