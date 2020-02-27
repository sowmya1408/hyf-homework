const express = require('express');
const reviewsRouter = express.Router();
const dotenv = require('dotenv');
const mysql = require('mysql');
dotenv.config();
const bodyParser = require('body-parser');
reviewsRouter.use(bodyParser.json());

const { MYSQL_URL } = process.env;
const connection = mysql.createConnection(MYSQL_URL);

const reviewsAddOrDelete = (queryType, queryParameter) => {
	connection.query(queryType,queryParameter, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	});


}

const reviewsData = (queryType) => {
	connection.query(queryType, (err, results, fields) => {
		if (err) {
			return res.send(err);
		}
		res.json(results);
	})
}

reviewsRouter.get('/', (req, res) => {
	reviewsData('select * from review')
});

reviewsRouter.post('/', (req, res) => {
	const review = req.body;
	reviewsAddOrDelete('INSERT into review SET ?', review)
});

reviewsRouter.get('/:id', (req, res) => {
	const id = parseInt(req.params.id);
	reviewsData(`select * from review WHERE id=${id}`)
});

reviewsRouter.put('/:id', (req, res) => {
	const review = req.body;
	const id = parseInt(req.params.id);
	reviewsAddOrDelete(` UPDATE meal SET ? WHERE id=${id}`, review)
});

reviewsRouter.delete('/:id', (req, res) => {
	const id = parseInt(req.params.id);
	reviewsAddOrDelete(`DELETE from meal WHERE id=${id}`, review)

});

module.exports = reviewsRouter;
