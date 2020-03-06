const express = require('express');
const app = express();
const mealsRouter = require('./api/meals');
const reservationsRouter = require('./api/reservations.js');
const reviewsRouter = require('./api/review.js');

const mysql = require('mysql');

const dotenv = require('dotenv');

dotenv.config();

//const port = process.env.PORT || 5000;
const { PORT } = process.env;
//const connection = mysql.createConnection(MYSQL_URL);
const { MYSQL_URL } = process.env;
const connection = mysql.createConnection(MYSQL_URL);

app.get((req, res, next) => {
	console.log(`${req.method} ${req.path}`);
	next();
});

// For week4 no need to look into this!
/* const path = require("path"); */
/* // Serve the built client html
const buildPath = path.join(__dirname, "../../dist");
app.use(express.static(buildPath)); */

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());


// For week4 no need to look into this!
/* // Ensures that the client router works on reload aswell.
// Sends all requests back to index.html where the routing lib takes over
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./../../dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
}); */

app.use('/api/meals', mealsRouter);
app.use('/api/reservations', reservationsRouter);
app.use('/api/reviews', reviewsRouter);

// app.use('/api/reservations', (req, res) => {
//   connection.query("select * from reservation", (err, results, fields) => {
//       if(err) {
//           return res.send(err);
//       }
//       res.json(results);
//   })
// })

app.listen(PORT, () => {
	console.log(`server started at ${PORT}`);
	connection.connect(err => {
		if (err) {
			console.log(`Error connect: ${err}`);
		} else {
			console.log(`Connection successful`);
		}
	});
});

//app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
