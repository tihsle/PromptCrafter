const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/prompts', require('./routes/promptRoutes'));
app.use('/logs', require('./routes/logRoutes'));
app.use('/search', require('./routes/searchRoutes'));

mongoose.connect(process.env.MONGODB_URI);
module.exports = app;