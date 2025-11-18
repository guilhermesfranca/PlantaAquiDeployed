const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  imageUrl: {
    type: String,
    default: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
  },
  participants: { type: Number, default: 0 },
  maxParticipants: { type: Number, default: 50 },
  organizerName: { type: String, default: 'Enzo Valentino' },
  icon: { type: String, default: '🌿' },
  liked: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);