const mongoose = require('mongoose');
const CONFIG = require('./config');

// Conexion a DB
module.exports = {
	connection: null,
	connect: function(){
		if (this.connection) {
			return this.connection;
		}
		else {
			return mongoose.connect(CONFIG.DB,{ useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(connection => {
				this.connection = connection;
				console.log('******* Conexión a DB Exitosa *******');
			}).catch(error => console.log(error));
		}
	}
}