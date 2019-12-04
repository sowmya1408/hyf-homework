const express = require('express');
const app = express();
const fs = require('fs');
const mealFile = fs.readFileSync(__dirname + '/../data/meals.json', 'utf-8');
const reviewFile = fs.readFileSync(__dirname + '/../data/review.json', 'utf-8');
const reviewParsedFile = JSON.parse(reviewFile);
const mealParsedFile = JSON.parse(mealFile);
const mealReview = mealParsedFile.map(meal => {
	const mealDataCopy = Object.assign({}, meal);
	mealDataCopy.review = reviewParsedFile.filter(review => review.mealId === meal.id);
	return mealDataCopy;
});

app.get('/', (req, res) => {
	const filter = mealReview.filter(meal => meal.price >= 65);
	res.json(filter);
});

module.exports = app;
