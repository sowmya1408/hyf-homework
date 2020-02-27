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
	const checkForMealData = mealsdetails.length > 0 && typeof id === 'number'
	checkForMealData ? 
	    res.send(mealsdetails)
		: res.send('Bad request!, check if you are searching for correct mealId and its a number');
});

mealRouter.get('/api/meals', (req, res) => {
	const maxPrice = parseInt(req.query.maxPrice);
	const mealSmallerThanMaxPrice = mealFile.filter(meal => meal.price < maxPrice);
	maxPrice 
	   ? res.send(mealSmallerThanMaxPrice)
	   : res.send('Bad Request!! check the query parameter')
	   
});

mealRouter.get('/api/meals-title', (req, res) => {
	const title = (req.query.title);
	const mealsWithATitleMatch = mealFile.filter(meal => meal.title.includes(title));
	title 
	  ? res.send(mealsWithATitleMatch)
	  : res.send('Bad Request!! check the query parameter')
});

mealRouter.get('/api/meals-createdAfter', (req, res) => {
	const createdAfter = new Date(req.query.createdAfter).valueOf();
	const mealsCreatedAfter = mealFile.filter(meal => new Date(meal.createdAt).valueOf() > createdAfter);
	createdAfter 
	  ?  res.send(mealsCreatedAfter)
	  : res.send('Bad Request!! check the query parameter')
});

mealRouter.get('/api/meals-limit', (req, res) => {
	const limit = parseInt(req.query.limit);
	const mealsLimit = mealFile.slice(0, limit);
	limit 
	  ? res.send(mealsLimit)
	  : res.send('Bad Request!! check the query parameter')
});

module.exports = mealRouter;
