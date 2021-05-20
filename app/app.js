const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const Product = require('./routes/product');


// Permite manejo de peticiones en formato JSON
app.use(bodyParser.json());
// Permite el envio de datos directos (no formularios)
app.use(bodyParser.urlencoded({extended: false}));

app.use('/product',Product);

module.exports = app;