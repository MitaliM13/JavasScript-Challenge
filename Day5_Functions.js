//Activity 1: Function Declaration

//Task 1: Check Whether Even or Odd
function EvenOrOdd(num) {
    if (num % 2 == 0) {
        console.log("Number is Even",num);
    } else {
        console.log("Number is Odd", num);
    }
}

// console.log(EvenOrOdd(32));

//Task 2: Calculate Square of a number

function SquareNum(Num) {
    let sqr = Num*Num
    console.log(`Square of Number ${Num} is:`, sqr);
}

// console.log(SquareNum(5));

//Activity 2: Function Expression

//Task 3: Max of 2 Numbers

const maxOfTwo = function Max(num1, num2) {
    let maxNum = Math.max(num1, num2)
    console.log(maxNum);
}
// console.log(maxOfTwo(324234,324342));

//Task 4: Concat the Strings

const strings = (str1,str2) => str1+" "+str2

// console.log(strings("Hello", "JavaScript"));

//Activity 3: Arrow Functions

//Task 5: Calculate sum and return the result

// let sum = (Num1, Num2) => Num1 + Num2

// console.log("The Sum is",sum(298423,2043));

//Task 6: String Containing a Specific Character

// let StringChars = (str, char) => str.includes(char) 

// console.log(StringChars("JAVA", "A"));
// console.log(StringChars("hello", "d"));

//Activity 4: Function Parameter and Default Values
//Task 7: Function that takes 2 parameters and returns thier product(Default value for second Parameter)

function productOfTwo(num1, num2) {
    num2 = 5 //If giving default value to num 1
    let product = num1 * num2
    console.log(product);
}

console.log(productOfTwo(43)); //while logging write undefined in place of num1 
//if not the log result will be NaN cuz num1 will be undefined

//Activity 5: Higher-Order Functions
//Task 9: A HOF that takes a function and a value, and calls the function that many times

const value = (fn, num) => {
   for (let i = 0; i < num; i++) {
    fn()
   }
}

const sayMyName = () => console.log("Mitali Maurya");

// value(sayMyName, 7)

//Task 10: A HOF that takes two functions and a value, applies the first function to the value and then applies the second function to the result

const higerOrderFunct = (fn1, fn2, radius) => {
   const srqOfRadius = fn1(radius)
   const AreafCircle = fn2(srqOfRadius)
   return AreafCircle
}

const Square = (x) => x*x
const Area = (sqRadius) => Math.PI*sqRadius

const result = higerOrderFunct(Square, Area, 3)
console.log("Area of Square is", Math.round(result));
