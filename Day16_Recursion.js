//Activity 1: Basic Recursion
//Task 1: Write a recursive function to calculate the factorial of a number. Log the result for a few test Cases

const factorial = (n) => {
    if(n === 0){
        return 1
    } else {
        return n * factorial(n-1)
    }
}

// console.log(`The factorial of 3 is`, factorial(3));
// console.log(`The factorial of 4 is`, factorial(4));
// console.log(`The factorial of 5 is`, factorial(5));
// console.log(`The factorial of 6 is`, factorial(6));

//Task 2: Write a recursive function to calculate the nth Fibonacci number. Log the result for few test Cases

const Fibonacci = (n) => {
    if(n<=2){
        return 1
    } else {
        return Fibonacci(n-1) + Fibonacci (n-2)
    }
}

// console.log(`The Fibonacci upto 10 digits is:`, Fibonacci(10));
// console.log(`The Fibonacci upto 20 digits is:`, Fibonacci(20));
// console.log(`The Fibonacci upto 30 digits is:`, Fibonacci(30));
// console.log(`The Fibonacci upto 40 digits is:`, Fibonacci(40));

//Activity 2: Recursion with Arrays
//Task 3: Write a recursive function to find the sum of all elements in an array. Log the result for few test Cases



const sum = (arr) => {
    if(arr.length === 0){
        return 0
    } 
    return arr.reduce((acc, curr) => acc + curr)
}

let testArray = [1,2,3,4,5]
let testArray2 = [2,32,524,634,75]
let testArray3 = [1,3]
// console.log(`The sum of all digits in an ${testArray} array is:`, sum(testArray));
// console.log(`The sum of all digits in an ${testArray2} array is:`, sum(testArray2));
// console.log(`The sum of all digits in an ${testArray3} array is:`, sum(testArray3));

//Task 4: Write a recursive function to find the max element in an array.

const maxEle = (arr) => {
   if(arr.length === 1){
        return arr[0]
   }
   
   const maxInArray = maxEle(arr.slice(1))
   return arr[0] > maxInArray ? arr[0] : maxInArray
}

// let sample = [3,4,1,-2,532,23443,12334]
// let sample2 = [23,3243,65332,2314235]
// let sample3 = [1, 2, 3, 4, 5];
// let sample4 = [10, -2, 3, 7];

// console.log(`Max in ${sample} is: ${maxEle(sample)}`);
// console.log(`Max in ${sample2} is: ${maxEle(sample2)}`);
// console.log(`Max in ${sample3} is: ${maxEle(sample3)}`);
// console.log(`Max in ${sample4} is: ${maxEle(sample4)}`);

//Activity 3: String Manipulation 
//Task 5: Write a recursive function to reverse a string. 

const reverse = (str) => {
    if(str.length <= 1){
        return str
    }

    return reverse(str.substring(1))+str.charAt(0)
}

// console.log(reverse("YELLOW"));
// console.log(reverse("PURPLE"));
// console.log(reverse("GREEN"));

//Task 6: Write a recursive function to check if a string is palindrome

const palindrome = (str) => {
    if(str.length <= 1){
        return `The string is a palindrome`
    }

    let start = str.charAt(0)
    let end = str.charAt(str.length - 1)

    if(start === end){
        return palindrome(str.substring(1, str.length - 1))
    }

    return `The String is not a palindrome`
}

// console.log(palindrome('aaaa'));
// console.log(palindrome('aada'));
// console.log(palindrome('a'));

//Activity 4: Recursive search
//Task 7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases

const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
    if(start > end){
        return -1
    }

    let mid = Math.floor((start+end)/2)

    if(arr[mid] === target){
        return mid
    }

    if(target < arr[mid]){
        return binarySearch(arr, target, start, mid - 1)
    }

    return binarySearch(arr, target, mid+1, end)
           
}

const sorted = [1,2,4,5,7,8,10]
// console.log(binarySearch(sorted, 2));
// console.log(binarySearch(sorted, 7));
// console.log(binarySearch(sorted, 10));

//Task 8: Write a recursive function to count the occurences of a target element in an array.

const occurenceOfTarget = (arr, target,index = 0,count = 0) => {
    if(index === arr.length) return count

    if(arr[index] === target){
        count++
    }
    return occurenceOfTarget(arr, target, index+1, count)
}

let element = [1,2,4,4,5,4,3,4,5]

console.log(occurenceOfTarget(element, 4));
console.log(occurenceOfTarget(element, 1));
console.log(occurenceOfTarget(element, 5));
