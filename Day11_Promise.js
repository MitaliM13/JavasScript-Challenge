//Activity 1: Understanding Promises
//Task 1: Create a promise that resolves with the message after a 2 second timeout and log the message to the console

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

const checkAge = (age) => {
    return new Promise((res, reject) => {
        if(age>18){
            res(`Eligible to vote ${age}`)
        } else {
            reject(`Not eligible`)
        }
    })
}

const handleAgeCheck = async(age) => {
    try{
        const message = await checkAge(age)
        console.log(`Promise resolved`);
    } catch (error) {
        console.log(`Promise Rejected ${error}`);
    }
}

handleAgeCheck(20)
handleAgeCheck(7)