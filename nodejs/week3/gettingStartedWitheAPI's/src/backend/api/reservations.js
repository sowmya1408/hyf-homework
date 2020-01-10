const express = require('express');
const reservationsRouter = express.Router();
const dotenv = require('dotenv');
const mysql = require('mysql');
dotenv.config();
const bodyParser = require('body-parser');
reservationsRouter.use(bodyParser.json());


const { MYSQL_URL } = process.env;
const connection = mysql.createConnection(MYSQL_URL);

reservationsRouter.get('/', (req, res) => {
	connection.query('select * from reservation', (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});
});

reservationsRouter.post('/', (req, res) => {
	const reservation = req.body;

	connection.query('INSERT into reservation SET ?', reservation, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});
});

reservationsRouter.get('/:id', (req, res) => {
	const id = parseInt(req.params.id);

	connection.query(`select * from reservation WHERE id=${id}`, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});
});

reservationsRouter.put('/:id', (req, res) => {
	const reservation = req.body;
	const id = parseInt(req.params.id);

	connection.query(` UPDATE meal SET ? WHERE id=${id}`, reservation, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});
});

reservationsRouter.delete('/:id', (req, res) => {
	const id = parseInt(req.params.id);

	connection.query(` DELETE from meal WHERE id=${id}`, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});
});

module.exports = reservationsRouter;
