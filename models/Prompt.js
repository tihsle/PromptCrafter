const mongoose = require('mongoose');

const promptSchema = new mongoose.Schema({
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  content: String,
  model: String,
  tags: [String],
}, { timestamps: true });

promptSchema.index({ title: 'text', content: 'text', tags: 'text' });

module.exports = mongoose.model('Prompt', promptSchema);