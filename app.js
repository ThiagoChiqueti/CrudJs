require('dotenv').config;
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();

const api = process.env.API_URL

app.use(bodyParser.json());

app.use(`${api}/users`, userRoutes);


module.exports = app;
