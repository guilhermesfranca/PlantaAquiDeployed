const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
  species: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  imageUrl: {
    type: String,
    default: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc',
  },
  planterName: {
    type: String,
    default: 'Anônimo',
  },
  status: {
    type: String,
    enum: ['plantada', 'crescendo', 'adulta'],
    default: 'plantada',
  },
  impact: {
    co2: {
      type: Number,
      default: 0,
    },
    oxygen: {
      type: Number,
      default: 0,
    },
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Tree', treeSchema);