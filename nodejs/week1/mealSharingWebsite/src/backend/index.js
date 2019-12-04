const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("method " + req.method);
    next();
});
app.use((req, res, next) => {
    console.log("date " + Date.now());
    next();
});

app.use("/", (req, res) => res.send("Error no page found"));


const mealRouter = require("./routes/meals.js");
app.use("/meals", mealRouter);

const cheapMealRouter = require("./routes/cheapMeals.js");
app.use("/cheap-meals", cheapMealRouter);

const largeMealRouter = require("./routes/largeMeals.js");
app.use("/large-meals", largeMealRouter);

const randomMealRouter = require("./routes/meal.js");
app.use("/meal", randomMealRouter);

const reservationsRouter = require("./routes/reservations.js");
app.use("/reservations", reservationsRouter);

const randomReservationsRouter = require("./routes/reservation.js");
app.use("/reservation", randomReservationsRouter);

app.listen(3000, () => console.log("server started"));


