let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const doubleOddNumbers = numbers
	.filter(number => (number % 2 !== 0 ? true : false))
	.map(number => {
		const newNumber = number * 2;
		return newNumber;
	});

console.log(`The doubled numbers are ${doubleOddNumbers}`);
