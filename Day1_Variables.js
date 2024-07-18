//Activity 1: Variable Declaration

//Task 1:  var declaration (Not used anymore due to scope issues)

var num = 22
console.log("var Declaration",num);

//Task 2: let declaration with string value
let str = "Mitali"
console.log("let Declaration",str);

//Activity 2: Constant Declaration
//Task 3: const with boolean value
const bool = true
console.log("const Declaration",bool);

//Activity 3: Data Types
//Task 4: Create Variable of different Data types, log using typeof

let number = 11
console.log("Data Type 5",typeof(number));

let string = "JavaScript"
console.log("Data Type 2",typeof(string));

let boolean = true
console.log("Data Type 3",typeof(boolean));

let obj = {
    username: "Mitali Maurya",
    age: 22
}
console.log("Data Type 4",typeof(obj));

let array = [1,"B"]
console.log("Data Type 5",typeof(array));

//Activity 4: Reassigning Variables
//Task 5: let and var can be reassigned

let user = 1
console.log("Initial User", user);
user = 2
console.log("New User",user);

//Activity 5: Understanding const
//Task 6: Cannot be reassigned

const name = "Mitali"
console.log("My name",name)

// name = "mitali" //Throws TypeError: Asssignment to constant
// console.log(name);