// Initialize an empty array 
const numbers1To100 = [];
// function for fizzbuzz to take the mutiples as parameters
function fizzBuzz(num1,num2) {
//For loop to get all the numbers from 1 - 100 & for multiple parameters
for (i = 1; i <= 100; i++) {
    if(i % num1 === 0 && i % num2 === 0)  {
        numbers1To100.push("FizzBuzz");
        // console.log(`${i} is a multiple of ${num1} & ${num2}`);
    } else if (i % num1 === 0) {
        numbers1To100.push("Fizz");
        // console.log(`${i} is a multiple of ${num1}`);
    } else if(i % num2 === 0){
        numbers1To100.push("Buzz");
        // console.log(`${i} is a multiple of ${num2}`);
     } else {
        numbers1To100.push(i);
    //   console.log(`These are not the multiples of ${num1} && ${num2}`);
    }
  } return numbers1To100;
}
console.log(fizzBuzz(4, 12));
