//Activity 1: Understanding Promises
//Task 1: Create a promise that resolves with the message after a 2 second timeout and log the message to the console

const { data } = require("autoprefixer")

// const promise = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         const message = "Promise Resolved"
//         console.log(message);
//         resolve(message)
//     },2000)
// }) 

// promise.then((message) => {
//     console.log(`The promise has been resolved ${message}`);
// })

//Task 2: Create a promise that rejects an error message after a 2sec timeout and handle the error using .catch()

// const rejected = new Promise((resolve, reject) => {
//     const day = "thursday"
//    setTimeout(() => {
//     if(day == "tuesday"){
//         resolve(`You got the day right! ${day}`)
//     } else {
//         reject(`Oops! Wrong day! ${day}`)
//     }
//    }, 2000)
// })

// rejected.then((message) => {
//     console.log("Promise resolved", message);
// }).catch((message) => {
//     console.log(`Promise Rejected ${message}`);
// })


//Activity 2: Chaining Promises
/*Task 3: Create a sequence of promises that simulate fetching of data from a server. 
Chain the promises to the log message in a specific order*/

// const user = {
//     name: "Mitali",
//     email: "mitali@gmail.com",
//     age: 22,
//     city: "Mumbai"
// }

// const checkUserName = () => {
//     return new Promise((resolve, reject) => {
//         let username = user.name;
//         setTimeout(() => {
//             if (user.name === username) {
//                 resolve(`The user name is correct! ${username}`);
//             } else {
//                 reject(`The user name is incorrect`);
//             }
//         }, 1000);
//     });
// };
// const checkUserAge = () => {
//     return new Promise((resolve, reject) => {
//         let userage = user.age;
//         setTimeout(() => {
//             if (user.age === userage) {
//                 resolve(`The user age is correct! ${userage}`);
//             } else {
//                 reject(`The user age is incorrect`);
//             }
//         }, 2000);
//     });
// };
// const checkUserCity = () => {
//     return new Promise((resolve, reject) => {
//         let usercity = user.city;
//         setTimeout(() => {
//             if(user.city !== usercity){
//                 resolve(`The use city is correct! ${usercity}`)
//             } else {
//                 reject(`The user city is incorrect`)
//             }
//         }, 3000)
//     })
// }

// checkUserName()
// .then((message) => {
//     console.log(`Promise 1 resolved: ${message}`);
//     return checkUserAge()
// })
// .then((message) => {
//     console.log(`Promise 2 resolved: ${message}`);
//     return checkUserCity()
// })
// .then((message) => {
//     console.log(`Promise 3 resolved: ${message}`);
// })
// .catch((message) => {
//     console.log(`Promise reject ${message}`);
// })

//Activity 3:  Async/Await
//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value

// function asyncFunct(){
//     return new Promise((res) => {
//         setTimeout(() => {
//             res(`Resolved`)
//         },2000)
//     })
// }
// async function asyncCall() {
//     console.log('Calling');
//     const result = await asyncFunct()
//     console.log(result);
// }

// asyncCall()

//Task 5: Write an async function that handles a rejected promise using try-catch, log the error message

// const checkAge = (age) => {
//     return new Promise((res, reject) => {
//         if(age>18){
//             res(`Eligible to vote ${age}`)
//         } else {
//             reject(`Not eligible`)
//         }
//     })
// }

// const handleAgeCheck = async(age) => {
//     try{
//         const message = await checkAge(age)
//         console.log(`Promise resolved`);
//     } catch (error) {
//         console.log(`Promise Rejected ${error}`);
//     }
// }

// handleAgeCheck(20)
// handleAgeCheck(7)

//Activity 4: Fetching data from API
//Task 6: Use fetch API to get data from a public API and log the response data to the console using promises

// const apiUrl = 'https://api.github.com/users/hiteshchoudhary'

// function fetchData() {
//     fetch(apiUrl)
//     .then(response => {
//         if(!response.ok){
//             throw new Error(`Network response was NOT OK`)
//         }
//         return response.json()
//     })
//     .then(data => {
//        console.log(`Response Data:`,data); 
//     })
//     .catch(error => {
//         console.error(`There was a problem with the fetch operation: ${error}`);
//     })
// }

// fetchData()

//Task 7: Use fetch API to get data from a public API and log the response data to the console using async await

// const apiUrl = 'https://api.github.com/users/hiteshchoudhary'


// async function fetchData(){
//     try{
//         const data = await fetch(apiUrl)
//         if(!data.ok){
//             throw new Error(`Response not ok`)
//         }
//         const response = await data.json()

//         console.log(`Response Data`, response);
//     } catch(error){
//         console.error(`There was a problem with fetch operation`);
//     }
// }

// fetchData()

//Activity 5: Concurrent Promises
//Task 8: Use Promise.All to wait for multiple promises to resolve and then log all thier values

// const promise1 = Promise.resolve(7)
// const promise2 = 2013
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`Bangtan`)
//     },2000)
// })

// Promise.all([promise1,promise2,promise3]).then((value) => {
//     console.log(value);
// })

//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises

const promise1 = new Promise((res,rej)=>{
    setTimeout(res, 50 , 'Hello')
})
const promise2 = new Promise((res,rej)=>{
    setTimeout(res, 100 , 'Bye')
})

Promise.race([promise1,promise2]).then((value)=>{
    console.log(value);
})

