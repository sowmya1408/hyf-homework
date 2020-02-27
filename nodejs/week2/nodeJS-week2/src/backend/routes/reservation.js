const express = require('express');
const reservationsRouter = express.Router();
const fs = require('fs');
const reservationFile = JSON.parse(fs.readFileSync(__dirname + '/../data/reservations.json', 'utf-8'));
reservationsRouter.get('/', (req, res) => {
	res.json(reservationFile);
});

reservationsRouter.get('/:id', (req, res) => {
	const { id } = req.params;
	const reservationDetails = reservationFile.filter(reservation => reservation.id === parseInt(id));
	res.send(reservationDetails);
});

module.exports = reservationsRouter;
