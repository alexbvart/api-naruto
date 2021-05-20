const Product = require('../models/Product');

function index(request,response) {

	Product.find({}).then(products => {
		if (products.length) {
			return response.status(200).send({products})
		}
		else {
			return response.status(204).send({message: 'no content'});
		}
	}).catch(error => response.status(500).send({error}));
}

function store(request,response) {
	let product = new Product(request.body);
	product.save().then(product => response.status(201).send({product})).catch(error => response.status(500).send({error}));
}

function show(request,response) {
	if (request.body.error) return response.status(500).send({error});
	if (request.body.products) {
		let products = request.body.products;
		return response.status(200).send({products});
	}
	else{
		return response.status(404).send({message:'not found'});
	}
}

function update(request,response) {
	if (request.body.error) return response.status(500).send({error});
	if (request.body.products) {
		let product = request.body.products[0];
		product = Object.assign(product,request.body);
		product.save().then(product => response.status(200).send({message:'updated',product})).catch(error => response.status(500).send({error}));
	}
	else{
		return response.status(404).send({message:'not found'});
	}
}

function destroy(request,response){
	if (request.body.error) return response.status(500).send({error});
	if (request.body.products) {
		let product = request.body.products[0];
		product.remove().then(product => response.status(200).send({message:'deleted'})).catch(error => response.status(500).send({error}));
	}
	else{
		return response.status(404).send({message:'not found'});
	}
}

function find(request,response,next) {
	let data = {};
	data[request.params.key] = request.params.value;
	Product.find(data).then(products => {
		if (products.length) {
			request.body.products = products;
			return next();
		}
		else{
			return next();
		}
	}).catch(error =>{
		request.body.error = error
		return next();
	});
}

module.exports = {index,show,store,update,destroy,find};