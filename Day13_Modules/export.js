//Activity 1: Creating and exploring modules

//Task 1: Create a module that exports a function to add to number. Import and use this module in another script

// const sum = (num1, num2) => {
//     console.log("Addition of 2 number is:",num1 + num2);
// }


//Task 2: Create a module that exports an object representing a person with properties and methods. 

// const person = {
//     name: "Mitali",
//     age: 22,
//     Address: "Kalwa",
//     Job: "Web Developer",
//     getName: function(){
//         return `Name of the person is: ${this.name}`
//     },
//     getAge: function(){
//         return `Age of the person is: ${this.age}`
//     }
// }

// module.exports = {sum, person}

//Activity 2: Named and default exports

//Task 3: Create a module that exports multiple functions using named exports. 

// function add(num1, num2) {
//     console.log(num1 + num2);
// }

// function name(str) {
//     console.log(`Name of the person is`, str);
// }

// // module.exports = {add, name}

// //Task 4: Create a module that exports a single function using default export. 

// const sayMyName = (myName) => {
//     console.log("My name is:", myName);
// }

// export default sayMyName

//Activity 3: Importing entire module
//Task 5: Create a module that exports multiple constants and functions.
//Import entire module as an object in another script and use its properties

const number1 = 5
const number2 = 2394
const string  = "This is going to be very random"

function random(str1,str2){
    console.log(`Let's Combine 2 strings, string1: ${str1} and string 2: ${str2}`, str1 + "" + str2);
}

function random2(num1, num2) {
    let multiplication = num1*num2
    console.log(`Multiplication of ${num1} and ${num2} gives:`, multiplication);
}

module.exports = {number1, number2, string , random, random2}

//Activity 4: Using third-party modules 
//Task 6: Install a third-party module (eg lodash) using npm. Import and use a function from this module in a script
const _ = require("lodash")

// const array = [1, 2, 3, 4, 5];
// const shuffledArray = _.shuffle(array);

// console.log('Original Array:', array);           // Output: Original Array: [1, 2, 3, 4, 5]
// console.log('Shuffled Array:', shuffledArray)

// let learn = _.after(3, function(){
//     console.log(`Learning lodash`);
// })

// learn() //Print nothing
// learn() //Print nothing
// learn() //Prints

// let array = [1,2,3,4,5]
// console.log(_.chunk(array, 1)); //divides arrays into chucks of given size

// let arr = ['', 0, false , 1, 43, "Hello"]
// console.log(arr);
// console.log(_.compact(arr)); //Removes false value from array

//Task 7: Install a third-party module (eg axios) using npm. Import and use this module to make a network request in a script

const ax = require("axios")

ax.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        // Handle success
        console.log('Data:', response.data);
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
    });