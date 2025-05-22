const Prompt = require('../models/Prompt');

exports.createPrompt = async (req, res) => {
  const prompt = await Prompt.create({ ...req.body, ownerId: req.user._id });
  res.status(201).json(prompt);
};

exports.getPrompts = async (req, res) => {
  const prompts = await Prompt.find({ ownerId: req.user._id });
  res.json(prompts);
};

exports.getPrompt = async (req, res) => {
  const prompt = await Prompt.findOne({ _id: req.params.id, ownerId: req.user._id });
  if (!prompt) return res.sendStatus(404);
  res.json(prompt);
};

exports.updatePrompt = async (req, res) => {
  const prompt = await Prompt.findOneAndUpdate(
    { _id: req.params.id, ownerId: req.user._id },
    req.body, { new: true }
  );
  res.json(prompt);
};

exports.deletePrompt = async (req, res) => {
  await Prompt.findOneAndDelete({ _id: req.params.id, ownerId: req.user._id });
  res.sendStatus(204);
};