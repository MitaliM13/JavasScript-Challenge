//Activity 1: Arithmetic Operators

const num1 = 23
const num2 = 65
//Task 1: Add two numbers
const Addition = num1 + num2
//Task 2: Subtract two numbers
const Substraction = num2 - num1
//Task 3: Multiply two numbers
const Multiplication = num1 * num2
//Task 4: Divide two numbers
const Division = num2 / num1
//Task 5: Remainder of two numbers
const Remainder = num2 % num1

console.log("The of Addition 2 numbers is: " +Addition);
console.log("The of Subtraction 2 numbers is: " +Substraction);
console.log("The of Multiplication 2 numbers is: " +Multiplication);
console.log("The of Division 2 numbers is: " +Division);
console.log("The of Remainder 2 numbers is: " +Remainder);

//Activity 2: Assignment Operators

let number = 32
console.log("Original Number: " +number);
//Task 6
number += 23
console.log("Incremented Number: " +number);
//Task 7
number -= 12
console.log("Decremented Number: " +number);

//Activity 3: Comparision Operator

let number1 = 99
let number2 = 100

//Task 8
const comparision1 = number1 > number2 
console.log(comparision1);

const comparision2 = number1 < number2 
console.log(comparision2);

//Task 9
const comparision3 = number1 >= number2 
console.log(comparision3);

const comparision4 = number1 <= number2 
console.log(comparision4);

//Task 10
const comparision5 = number1 == number2 
console.log(comparision5);

const comparision6 = number1 === number2 
console.log(comparision6);


//Activity 4: Logical Operators

let first = 34
let second = 45

//Task 11
let AND = first&&second
//Task 12
let OR = first||second
//Task 13
let NOT = first!=second
console.log(AND);
console.log(OR);
console.log(NOT);

//Activity 5: Ternary Operator
//Task 14

let a = 5

const pos = a>0?"Positive":"Negitive"
console.log(pos);