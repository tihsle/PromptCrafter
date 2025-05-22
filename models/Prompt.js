const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  content: String,
  model: String,
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Prompt', promptSchema);