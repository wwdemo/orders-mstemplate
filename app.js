/*globals cloudantService:true */
/*eslint-env node */
var express = require('express');
var bodyParser = require('body-parser');

var PORT = 80;

var ordersDb = [];

//Setup middleware.
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//REST HTTP Methods
app.post('/rest/orders', function(req, res) {
	ordersDb.push(req.body);
	res.status(201).send({msg: 'Successfully created item'});
	}
);
app.get('/rest/orders', function(req, res){
	res.status(201).send('Orders: ' + ordersDb.toString());
	}
);

app.listen(PORT)
console.log(' Application Running on port ' + PORT);
