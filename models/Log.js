const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
  promptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prompt' },
  output: String,
  notes: String,
  modelUsed: String,
  score: Number,
}, { timestamps: true });

module.exports = mongoose.model('Log', logSchema);