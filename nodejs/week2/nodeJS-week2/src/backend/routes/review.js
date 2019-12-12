const express = require('express');
const reviewRouter = express.Router();
const fs = require('fs');
const reviewFile = JSON.parse(fs.readFileSync(__dirname + '/../data/review.json', 'utf-8'));
reviewRouter.get('/', (req, res) => {
	res.json(reviewFile);
});

reviewRouter.get('/:id',(req, res) => {
    const {id} = req.params;
    const reviewdetails = reviewFile.filter(review => review.id === parseInt(id))
    res.send(reviewdetails);

})


module.exports = reviewRouter;
