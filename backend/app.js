const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/Product');

require('dotenv').config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

module.exports = app;
