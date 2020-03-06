const express = require('express');
const reservationsRouter = express.Router();
const dotenv = require('dotenv');
const mysql = require('mysql');
dotenv.config();
const bodyParser = require('body-parser');
reservationsRouter.use(bodyParser.json());


const { MYSQL_URL } = process.env;
const connection = mysql.createConnection(MYSQL_URL);

const reservationsAdd = (queryType, queryParameter) => {
	connection.query(queryType,queryParameter, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});


}

const reservationsData = (queryType) => {
	connection.query(queryType, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	})
}

reservationsRouter.get('/', (req, res) => {
	reservationsData('select * from reservation')
});

reservationsRouter.post('/', (req, res) => {
	const reservation = req.body;
	reservationsAdd('INSERT into reservation SET ?', reservation)


});

reservationsRouter.get('/:id', (req, res) => {
	const id = parseInt(req.params.id);
	reservationsData(`select * from reservation WHERE id=${id}`)
});

reservationsRouter.put('/:id', (req, res) => {
	const reservation = req.body;
	const id = parseInt(req.params.id);
	reservationsAdd(`UPDATE meal SET ? WHERE id=${id}`, reservation)
});

reservationsRouter.delete('/:id', (req, res) => {
	const id = parseInt(req.params.id);
	reservationsData(`DELETE from meal WHERE id=${id}`)
});

module.exports = reservationsRouter;
