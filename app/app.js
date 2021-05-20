const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Permite manejo de peticiones en formato JSON
app.use(bodyParser.json);
// Permite el envio de datos directos (no formularios)
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;