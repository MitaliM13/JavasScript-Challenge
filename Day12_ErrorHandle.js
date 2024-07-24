//Activity 1: Basic Error Handling with Try-Catch

const { json } = require("react-router");

/*Task 1: Write a function that intentionally throws an 
error and use a try-catch block to handle 
the error and log the appropriate message to the console*/


function unknown(str) {
    // throw new Error(`String is not defined`)
    console.log(str);
}

try {
    unknown()   
}catch(error){
    console.error(error.message);
}

//Task 2: Create a function that divides two numbers and throws an error if the denominator is zero

// function divide(num1, num2) {
//     if(num2 === 0){
//         throw new Error(`Denominator cannot be zero`)
//     }
//     let div = num1/num2
//     console.log(div);
// }

// try {
//     divide(24,2)
//     divide(21,0)
// } catch (error) {
//     console.error(error.message);
// }

//Activity 2: Finally Block

/*Task 3: Write a script that includes a try-catch block and a finally block.
Log messages in the try, catch and finally block to observe the execution flow*/

// function community(age) {
//     if(age < 18){
//         throw new Error(`Cannot join the community`)
//     } else if(age > 18 && age < 30){
//         console.log(`Can join community`);
//     } else{
//         console.log(`Too old to join`);
//     }
// }

// try {
//     console.log("Attempting to join the community....");
//     // community(20)
//     // community(12)
//     community(34)
//     console.log("Successfully processed the community Function");
// } catch (error) {
//     console.error("Error Caught:",error.message);
// }finally{
//     console.log(`Thankyou for being interested`);
// }

//Activity 3: Custom error Objects
//Task 4: Create a custom error class that extends the built-in Error class.
//Throw an instance of this custom error in a function and handle it using a try- catch

//Custom error class

// class NewError extends Error{
//     constructor(message) {
//         super(message) // Call the parent class constructor
//         this.name = "NewError" // Set the error name to the custom class name
//     }
// }

// function checkNumber(num) {
//    if(num % 2 !== 0){
//         throw new NewError(`Not Even`)
//    } else {
//     console.log(`Even`);
//    }
// }

// try{
//     // checkNumber(2)
//     checkNumber(3)
// } catch(error){
//     console.log(error.name);
//     console.log(error.message);
// }

//Task 5: Write a function that validates user Input(empty string) and throws a custom error if the validation fails.
// Handle using try-catch

// class EmptyStringError extends Error{
//     constructor(message) {
//         super(message)
//         this.name = "EmptyStringError"
//     }
// }

// function isEmptyString(str) {
//     if(!str){
//         throw new EmptyStringError(`The String is empty, Please enter something`)
//     } else {
//         console.log(`Valid String:`, str);
//     }
// }

// try {
//     isEmptyString("Hello")
//     isEmptyString()
// }catch(error){
//     console.log(error.name);
//     console.log(error.message);
// }

//Activity 4: Error Handling in Promises
//Task 6: Create a promise that randomly resolves or rejects.
//Use .catch() to handle the rejection and log an appropriate message to the console


// const promise = new Promise((resolve, reject) => {
//     let city = "Mumbai"
//     if(city === "Delhi"){
//         let message = "Welcome to my city"
//         resolve(message)
//     } else {
//         let message = "Opps! Wrong city"
//         reject(new Error(message))
//     }
// })

// promise
//     .then((message) => {
//     console.log("Promise resolved", message);
//     })
//     .catch((error) => {
//     console.log("Promise rejected",error.message);
//     })


//Task 7: Use try-catch within async function to handle errors from a promise that randomly resolves or rejects, and log the error message

function asyncErrorHandling(num){
    return new Promise((res, rej) => {
       if(num> 15){
        res(`Valid number`)
       } else {
        rej(new Error("Invalid"))
       }
    })
}

async function callingAsync () {
   try {
    const response = await asyncErrorHandling(12)
    console.log(response);
   } catch (error) {
        console.log(error.message);
   }
}

callingAsync()
