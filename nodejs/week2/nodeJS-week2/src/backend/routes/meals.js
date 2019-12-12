const express = require('express');
const mealRouter = express.Router();
const fs = require('fs');
const mealFile = JSON.parse(fs.readFileSync(__dirname + '/../data/meals.json', 'utf-8'));

mealRouter.get('/', (req, res) => {
	res.json(mealFile);
});

mealRouter.get('/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const mealsdetails = mealFile.filter(meal => meal.id === id);
	mealsdetails.length > 0 && typeof id === 'number'
		? res.send(mealsdetails)
		: res.send('Bad request!, check if you are searching for correct mealId and its a number');
});

mealRouter.get('/api/meals', (req, res) => {
	const maxPrice = parseInt(req.query.maxPrice);
	const getMealSmallerThanMaxPrice = mealFile.filter(meal => meal.price < maxPrice);
	!maxPrice 
	   ? res.send('Bad Request!! check the query parameter') 
	   : res.send(getMealSmallerThanMaxPrice);
});

mealRouter.get('/api/meals-title', (req, res) => {
	const title = (req.query.title);
	const getTitleMatch = mealFile.filter(meal => meal.title.includes(title));
	!title 
	  ? res.send('Bad request!! check the query parameter') 
	  : res.send(getTitleMatch);
});

mealRouter.get('/api/meals-createdAfter', (req, res) => {
	const createdAfter = new Date(req.query.createdAfter).valueOf();
	const mealCreatedAfter = mealFile.filter(meal => new Date(meal.createdAt).valueOf() > createdAfter);
	!createdAfter 
	  ? res.send('Bad request!! check the query parameter') 
	  : res.send(mealCreatedAfter);
});

mealRouter.get('/api/meals-limit', (req, res) => {
	const limit = parseInt(req.query.limit);
	const meal = mealFile.slice(0, limit);
	!limit 
	  ? res.send('Bad request!! check the query parameter') 
	  : res.send(meal);
});

module.exports = mealRouter;
