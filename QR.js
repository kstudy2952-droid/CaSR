const mongoose = require("mongoose");

const qrSchema = new mongoose.Schema({
  shortId: String,
  originalUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("QR", qrSchema);
