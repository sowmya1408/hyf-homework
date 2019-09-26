// Initialize a variable with an array elements 0,1.

const fibSeqArray = [0,1];

function fib(num) {
// For loop to sum and push the sum to array.
for (let i = 2; i < num; i++) {
    const sumOfTwoNumbers = fibSeqArray[i - 1] + fibSeqArray[i - 2];
    fibSeqArray.push(sumOfTwoNumbers);
    // return the index 
} return fibSeqArray[num-1];

}
// console.log(fib(5));
// console.log(fib(8));
console.log(fib(13));