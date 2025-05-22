const Log = require('../models/Log');

exports.createLog = async (req, res) => {
  const log = await Log.create(req.body);
  res.status(201).json(log);
};

exports.getLogs = async (req, res) => {
  const logs = await Log.find({ promptId: req.query.promptId });
  res.json(logs);
};

exports.deleteLog = async (req, res) => {
  await Log.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
};