// //Activity 1: Template Literals (For string interpolation and multi-line strings)
// //Task 1: Person's name and age

// const name = "Mitali Maurya"
// const age = 22

// // console.log(`My Name is: ${name} and im ${age} years old!`);

// //Task 2: Multi-line string

// // console.log(
// // `This is line 1
// // This is line 2`);

// //Activity 2: Destructuring (Unpack values from arrays and properties from object into distict variables)
// //Arrays destructuring(Extract 1st and 2nd element)

// // const numbers = [1,2,3,4,5,6,7]
// // const [a,b,...rest] = numbers
// // console.log(a);
// // console.log(b);
// // console.log(rest);//logs array
// // console.log(...rest);//logs array elements

// //Task 4: Object Destructuring (Extract title and author)

// const book = {
//     title: "Dairy of a young girl",
//     author: "Anne Frank",
//     year: 1947
// }

// const { title, author } = book
// console.log(title);
// console.log(author);

// //Activity 3: Spread and rest operators
// /* Spread operators : Allows iterables (Arrays and strings) 
// to be expanded in places where zero or more arguements are expected */

// //Task 5: Spread operators to create a new array that includes elements of existing array along with additional elements

// const cities = ["Mumbai","Delhi","Chennai"]

// const newCities = [...cities, "Navi Mumbai", "New Delhi"]

// console.log(newCities);

// //Task6: Rest Operator in a function to accept an arbritary number of arguements and sum their product

// function sum(a,b,c,d) {
//     return a + b + c + d
// }
// function multiply(a,b,c,d) {
//     return a * b * c * d
// }

// const num = [23,34,56,43]

// console.log(sum(...num));
// console.log(multiply(...num));

// //Activity 4: Default Parameters
// //Task 7: function with two parameters, one have default value 
// const product = (...args) => {
//     const [a, b  = 1] = args
//     return  a*b
// }

// const resultwithboth = product(3)
// console.log(resultwithboth);
// const resultwithoutboth = product(3,4)
// console.log(resultwithoutboth);

//Activity 5: Enhanced object literals
/*Easy to quickly create objects with the 
properties inside curly braces
ES6 makes the declaring of object literals concise and thus easier. Three major ways it does this are :

It provides a shorthand syntax for initializing properties from variables.
It provides a shorthand syntax for defining function methods.
It enables the ability to have computed property names in an object literal definition.
*/

//Task 8 create object with methods and properties

// const date = 14
// const month = "july"
// const year = 2002

// const birthday = {
//     date,
//     month,
//     year,
//     getBirthday(){
//       return  `${this.date} ${this.month} ${this.year}`
//     },
//     updateDate(date){
//         this.date = date
//     }
// }

// console.log(birthday);
// console.log(birthday.getBirthday());
// birthday.updateDate(5)
// console.log(birthday.getBirthday());

//Task 9: create an object with computed property names based on variables 

const property1 = "First Name"
const property2 = "Last Name"

const fullName = {
    [property1] : "Mitali",
    [property2] : "Maurya" 
}

console.log(fullName["First Name"]);