const mongoose = require('mongoose');

const Marker = mongoose.model('Marker', {
  lat: Number,
  lng: Number,
  name: String,
  contacts: [{ name: String, phone: String, details: String }],
});

module.exports = Marker;

