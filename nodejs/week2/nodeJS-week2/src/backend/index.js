const express = require('express');
const fs = require('fs');
const port = 3000;
const mealsRoute = require('./routes/meals.js');
const reservationRoute = require('./routes/reservation.js');
const reviewRoute = require('./routes/review.js');
const route = express();

// middleware
route.use((req, res, next) => {
	console.log(`
    method: ${req.method} 
    date & time: ${new Date(Date.now()).toLocaleString()} 
    request received path: ${req.path}
    `);
	next();
});

route.use('/meals', mealsRoute);
route.use('/reservations', reservationRoute);
route.use('/reviews', reviewRoute);

route.listen(port, () => console.log(`Server started at ${port}`));
