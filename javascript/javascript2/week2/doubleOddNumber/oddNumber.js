let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let newNumbers = [];

const doubleOddNumbers = numbers
  .filter(number => (number % 2 !== 0 ? true : false))
  .map(number => newNumbers.push(number * 2));

console.log("The doubled numbers are", newNumbers);
