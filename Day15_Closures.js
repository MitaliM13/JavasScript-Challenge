//Activity 1: Understanding Closures
//Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer functions scope. 
//Call the inner function and log the result.

function Outer(num) {
    return function inner(inNum) {
        let total = inNum + num
        return `Sum of the Outer Num: ${num} + Inner Num: ${inNum} is = ${total}`
    }
}
const innerFunction = Outer(67)
// console.log(innerFunction(23));

//Task 2: Create a closure that maintains a private counter. Implement function to increment and get the current value of the counter

function Counter(){
    let count = 0

    return{
        increment: function(){
            count++;
            return `The Count is: ${count}`
        },
        getCount: function(){
            return `Current Count is: ${count}`
        }
    }
}

const myCounter = Counter()
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.increment());
// console.log(myCounter.getCount());

//Activity 2: Practical Closure
//Task 3: Write a function that generates unique IDs. Use a closure to keep the track of the last generated ID and increament it with each Call

function uniqueID(){
    let ID = Math.round(Math.random()*100+1)

    return{
        generatedId: function(){
            ID ++
            return `The last Generated ID is: ${ID}`
        }
    }
}

const generateId = uniqueID()
console.log(generateId.generatedId());
console.log(generateId.generatedId());
console.log(generateId.generatedId());

//Task 4: Create a closure that captures a user's name and returns a function that greets the user by name

function user(userName){
    return function callUser() {
        return `Welcome, ${userName}`
    }
}

const greetings = user("Mitali")
console.log(greetings());

//Activity 3: Closures in Loops
//Task 5: Write a loop that creates an array of functions. Each function should call its index when called.
//Use a closure to ensure each function logs the correct index

function createFunction(){
    let funct = []

    for(let i = 0; i< 5; i++){
        funct.push((function(index){
            return function(){
                console.log(index);
            }
        })(i))
    }
    return funct
}

const functionsArray = createFunction()
// functionsArray[0]()
// functionsArray[1]()
// functionsArray[2]()
// functionsArray[3]()
// functionsArray[4]()

//Activity 4: Module Pattern 
//Task 6: Use closure to create a simple module for managing a collection of items.Implement methods to add, remove, and list items

const itemManage = (function(){
    let items = []

    return{
        addItem: function(item){
            items.push(item)
            console.log(`${item} added.`);
        },
        removeItem: function(item){
            const index = items.indexOf(item)
            if(index > -1){
                items.splice(index,1)
                console.log(`${item} removed`);
            } else {
                console.log(`${item} not found`);
            }
        },
        listItem: function(){
            console.log(`Items: ${items.join(', ')}`);
        }
    }
})()

// itemManage.addItem(`Apple`)
// itemManage.addItem(`Mango`)
// itemManage.addItem(`Pear`)
// itemManage.listItem()
// itemManage.removeItem(`Pear`)
// itemManage.removeItem(`Banana`)
// itemManage.listItem()


//Activity 5: Memoization
//Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

// function memoize(fn){
//     let cache = {}

//     return function(...args){
//         const key = JSON.stringify(args)
//         if(cache[key]){
//             return cache[key]
//         } else {
//             const result = fn(...args)
//             cache[key] = result
//             return result
//         }
//     }
// }

// function slowFunction(num){
//     for(let i = 0; i< 1e6; i++){}
//         return num*2
// }

// const memoFunction = memoize(slowFunction)
// console.log(memoFunction(4));
// console.log(memoFunction(4));

//Task 8: Create a memoized version of a function that calculates the factorial of a number 

function memoize(fn){
    let cache = {}

    return function(...args){
        const key = JSON.stringify(args)
        if(cache[key]){
            return cache[key]
        } else {
            const result = fn(...args)
            cache[key] = result
            return result
        }
    }
}

function factorial(n){
    if(n<=1) return 1
    return n * factorial(n-1)
}

const memofunct = memoize(factorial)
console.log(memofunct(5)); 
console.log(memofunct(5)); 
console.log(memofunct(6)); 