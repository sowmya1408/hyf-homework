const express = require('express');
const reviewsRouter = express.Router();
const dotenv = require('dotenv');
const mysql = require('mysql');
dotenv.config();
const bodyParser = require('body-parser');
reviewsRouter.use(bodyParser.json());

const { MYSQL_URL } = process.env;
const connection = mysql.createConnection(MYSQL_URL);

reviewsRouter.get('/', (req, res) => {
	connection.query('select * from review', (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});
});

reviewsRouter.post('/', (req, res) => {
	const review = req.body;

	connection.query('INSERT into review SET ?', review, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});
});

reviewsRouter.get('/:id', (req, res) => {
	const id = parseInt(req.params.id);

	connection.query(`select * from review WHERE id=${id}`, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});
});

reviewsRouter.put('/:id', (req, res) => {
	const review = req.body;
	const id = parseInt(req.params.id);

	connection.query(` UPDATE meal SET ? WHERE id=${id}`, review, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});
});

reviewsRouter.delete('/:id', (req, res) => {
	const id = parseInt(req.params.id);

	connection.query(` DELETE from meal WHERE id=${id}`, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});
});

module.exports = reviewsRouter;
