/*eslint-env node */
/*globals */

var ordersDb = [];

/* add an order to the database */
exports.create = function(req, res) {
	ordersDb.push(req.body, function(err/*, body, header*/) {
		if (err){
			res.status(500).send({msg: 'Error on insert, maybe the item already exists: ' + err});
		} else {
			res.status(201).send({msg: 'Successfully created item'});
		}
	});
};
    

/* find an order by id */
exports.find = function(req, res) {
	var id = req.params.id;
    ordersDb.find(id, { revs_info: false }, function(err, body) {
        if (!err) {
            res.send(body);
        } else {
            res.send({msg:'Error: could not find item: ' + id});
        }
    });	
};

/* list all orders */
exports.list = function(req, res) {
	res.send(ordersDb.toString());
};
