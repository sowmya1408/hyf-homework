const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Calculator using params
app.get('/calculator/:param', (req, res) => {
	const { param } = req.params;
	const { firstParam } = req.query;
	const { secondParam } = req.query;
	const allNumbers = [];
	function calculateAccordingToParam() {
		if (param === 'addition') {
			const valueOfAddition = allNumbers.reduce((acc, value) => (acc += value));
			return `Answer of addition: ${valueOfAddition}`;
		} else if (param === 'subtraction') {
			const valueOfSubstraction = allNumbers.reduce((acc, value) => (acc -= value));
			return `Answer of substraction: ${valueOfSubstraction}`;
		} else if (param === 'multiplication') {
			const valueOfMultiplication = allNumbers.reduce((acc, value) => (acc *= value));
			return `Answer of multiplication: ${valueOfMultiplication}`;
		} else if (param === 'division') {
			const valueOfDivision = allNumbers.reduce((acc, value) => (acc /= value));
			return `Answer of Division: ${valueOfDivision}`;
		}
	}
	
	if (typeof firstParam === 'object' && typeof secondParam === 'object') {
		firstParam.forEach(nums1 => allNumbers.push(parseInt(nums1)));
		secondParam.forEach(nums2 => allNumbers.push(parseInt(nums2)));
		return res.send(calculateAccordingToParam());
	} else if (typeof firstParam === 'string' && typeof secondParam === 'object') {
		allNumbers.push(firstParam);
		secondParam.forEach(nums2 => allNumbers.push(parseInt(nums2)));
		return res.send(calculateAccordingToParam());
	} else if (typeof firstParam === 'object' && typeof secondParam === 'string') {
		firstParam.forEach(nums1 => allNumbers.push(parseInt(nums1)));
		allNumbers.push(secondParam);
		return res.send(calculateAccordingToParam());
	} else if (typeof firstParam === 'string' && typeof secondParam === 'string') {
		allNumbers.push(parseInt(firstParam));
		allNumbers.push(parseInt(secondParam));
		return res.send(calculateAccordingToParam());
	}
	res.send('No Calculation param found');

	
});

// Calculator using req.body

app.get('/calculator', (req, res) => {
	const { method } = req.body;
	const { firstParam } = req.query;
	const { secondParam } = req.query;
	const allNumbers = [];
	function calculateAccordingToParam() {
		if (method === 'addition') {
			const valueOfAddition = allNumbers.reduce((acc, value) => (acc += value));
			return `Answer of addition: ${valueOfAddition}`;
		} else if (method === 'subtraction') {
			const valueOfSubstraction = allNumbers.reduce((acc, value) => (acc -= value));
			return `Answer of substraction: ${valueOfSubstraction}`;
		} else if (method === 'multiplication') {
			const valueOfMultiplication = allNumbers.reduce((acc, value) => (acc *= value));
			return `Answer of multiplication: ${valueOfMultiplication}`;
		} else if (method === 'division') {
			const valueOfDivision = allNumbers.reduce((acc, value) => (acc /= value));
			return `Answer of Division: ${valueOfDivision}`;
		}
	}

	if (typeof firstParam === 'object' && typeof secondParam === 'object') {
		firstParam.forEach(nums1 => allNumbers.push(parseInt(nums1)));
		secondParam.forEach(nums2 => allNumbers.push(parseInt(nums2)));
		return res.send(calculateAccordingToParam());
	} else if (typeof firstParam === 'string' && typeof secondParam === 'object') {
		allNumbers.push(firstParam);
		secondParam.forEach(nums2 => allNumbers.push(parseInt(nums2)));
		return res.send(calculateAccordingToParam());
	} else if (typeof firstParam === 'object' && typeof secondParam === 'string') {
		firstParam.forEach(nums1 => allNumbers.push(parseInt(nums1)));
		allNumbers.push(secondParam);
		return res.send(calculateAccordingToParam());
	} else if (typeof firstParam === 'string' && typeof secondParam === 'string') {
		allNumbers.push(parseInt(firstParam));
		allNumbers.push(parseInt(secondParam));
		return res.send(calculateAccordingToParam());
	}
	res.send('No Calculation param found');
});

app.listen(port, () => console.log(`Server started at ${port}`));
