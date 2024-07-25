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

function add(num1, num2) {
    console.log(num1 + num2);
}

function name(str) {
    console.log(`Name of the person is`, str);
}

module.exports = {add, name}