// //Activity 1: Array Creation and Access
// //Task 1: Array with numbers 1-5

// let arr = [1,2,3,4,5]
// console.log("Array created",arr);

// //Task 2: Access first and last element of array

// console.log("The first element of array is",arr[0]);
// console.log("The last element of array is",arr[arr.length-1]);

// //Activity 2: Array Methods(Basic)
// //Task 3: Push Method(Adds new element at the end of array)

// arr.push(6)
// console.log("Pushed the element", arr);

// //Task 4: Pop method(Remove the last element of the array)
// arr.pop()
// console.log("Popped the last element", arr);

// //Task 5: Shift method(Remove the first element)
// arr.shift()
// console.log("shifted array", arr);

// //Task 6: Unshift method(Add a new element to the start of arary)
// arr.unshift(1)
// console.log("Unshifted array", arr);

// //Activity 3: Arrays methods(Intermediate)
// //Task 1: A new Array with each number doubled(Map method)
// const mapArray = arr.map((x) => x*x)
// console.log("Mapped Array",mapArray);

// //Task 2: A new array with only even number(Filter Method)

// const EvenOnly = arr.filter((num) => num%2==0)
// console.log("Array with only even number",EvenOnly);
// const OddOnly = arr.filter((num) => num%2!=0)
// console.log("Array with only odd number",OddOnly); //Extra just for fun

// //Task 3: Calculate sum of all(Reduce)

// const sumAll = arr.reduce((prev, acc) => prev + acc)
// console.log("Sum of All",sumAll);

// //Activity 5: Array Iteration
// //Task 10: for loop for log each element in the array

// console.log("Each element in array using for loop");
// for(let i = 1; i<arr.length+1; i++){
//     console.log(i);
// }

// //Task 11: for each to log each element

// console.log("For Each loop");
// arr.forEach(element => {
//     console.log(element);
// });

//Activity 5: Multi-Dimensional Array

//Task 12: Creation 
let matrix = [
    [1,2],
    [3,4]
]
console.log("2D Array",matrix);

//Task 13: Access specific elements

console.log("Element 1", matrix[0][0]);
console.log("Element 2", matrix[0][1]);
console.log("Element 3", matrix[1][0]);
console.log("Element 4", matrix[1][1]);