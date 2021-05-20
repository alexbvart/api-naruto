const database = require('./app/config/database');
const CONFIG = require('./app/config/config');
const app = require('./app/app');

database.connect();
app.listen(CONFIG.PORT,function(error){
	error? console.log(error) : console.log(`Servidor Corriendo en el Puerto: ${CONFIG.PORT}`);
});
