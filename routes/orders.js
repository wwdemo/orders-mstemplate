/*eslint-env node */
/*globals */

var ordersDb = [];

/* add an order to the database */
exports.create = function(req, res) {
	ordersDb.push(req.body);
	res.status(201).send({msg: 'Successfully created item'});
};
    

/* find an order by id */
exports.find = function(req, res) {
	var id = req.params.id;
	if (ordersDb) {
		res.send(ordersDb.indexOf(id));
	} else {
		res.send([]);
	}
};

/* list all orders */
exports.list = function(req, res) {
	res.status(201).send(ordersDb.toString());
};
