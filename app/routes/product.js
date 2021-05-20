const express = require('express');
const ProductController = require('../controllers/ProductController');

const Router = express.Router();

Router.get('/',ProductController.index)
			.post('/',ProductController.store)
			.get('/:key/:value',ProductController.find,ProductController.show)
			.put('/:key/:value',ProductController.find,ProductController.update)
			.delete('/:key/:value',ProductController.find,ProductController.destroy);
module.exports = Router;