// const {person, sum, add, name, sayMyName} = require("./export") //Destructing common js modules

//Activity 1
//Task 1

// sum(23, 4)

//Task 2

// console.log(person.getAge());
// console.log(person.getName());
// console.log(person.name,`is working as`,person.Job);

//Activity 2:
//Task 3

// add(54,34)
// name("Jimin")

// //Task 4

// import sayMyName from './export'
// sayMyName("Mitali")

//Task 5

// const {number1 , number2, string, random, random2} = require('./export')
// Import the entire module as an object
const myModule = require('./export');

console.log(myModule.number1);
console.log(myModule.number2);
console.log(myModule.string);
console.log((myModule.random("Park","Jimin")));
console.log(myModule.random2(2, 4));

