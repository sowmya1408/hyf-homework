const express = require('express');
const app = express();
const fs = require('fs');
const mealFile = fs.readFileSync(__dirname + '/../data/meals.json', 'utf-8');
const mealParsedFile = JSON.parse(mealFile);
const reviewFile = fs.readFileSync(__dirname + '/../data/review.json', 'utf-8');
const reviewParsedFile = JSON.parse(reviewFile);
const mealReview = mealParsedFile.map(meal => {
	const mealDataCopy = Object.assign({}, meal);
	mealDataCopy.review = reviewParsedFile.filter(review => review.mealId === meal.id);
	return mealDataCopy;
});

app.get('/', (req, res) => {
	res.json(mealReview[Math.floor(Math.random() * mealReview.length)]);
});

module.exports = app;
