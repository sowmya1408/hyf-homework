// Create an array with 3 items as functions

const myArrayFunctions = [function(){return 'Hi! I am the 1st functions'},function(){return 'Hi! I am the 2nd function'},function(){return 'Hi! I am the 3rd function'}]
const runAllFunctions = myArrayFunctions.forEach(func => console.log(func()));
runAllFunctions;

// Create a function as const and try creating a function normally

const myFunction = () => 'myconst function';
console.log(myFunction());

function myOtherFunction() {
    return'myother function';
}
console.log(myOtherFunction());


// Create an object that has a key whose value is function.

const myObject = {
    myfunc: () => 'This is the objects key function'
    }

console.log(myObject.myfunc());

