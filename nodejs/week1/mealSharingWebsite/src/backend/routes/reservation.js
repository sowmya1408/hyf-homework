const express = require('express');
const app = express();
const fs = require('fs');
const reservationFile = fs.readFileSync(__dirname + '/../data/reservations.json', 'utf-8');
const reservationParsedFile = JSON.parse(reservationFile);
app.get('/', (req, res) => {
	res.json(reservationParsedFile[Math.floor(Math.random() * reservationParsedFile.length)]);
});

module.exports = app;
