//Activity 1: Two Sum
//Task 1: Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target

// function twoSum(arr, target){
//     for (let i = 0; i < arr.length; i++) {
//         for(let j = i+1; j<arr.length;j++){
//             if(arr[i] + arr[j] === target){
//                 return [i,j]
//             }
//         }
//     }
//     return null
// }
// const testCase1 = twoSum([1,2,3,4,5,6], 55)
// const testCase2 = twoSum([1,2,3,4,5,6], 5)
// const testCase3 = twoSum([1,2,3,4,5,6,7,8,9], 9)
// console.log(testCase1);
// console.log(testCase2);
// console.log(testCase3);

//Activity 2: Revesre Integet 
//Task 2: Write a function that takes an integer and returns it with reversed digits .
//Handle edge cases like number ending in zero or negetive numbers

// function reverseInteger(number){
//     let revNum = 0
//     let isNegetive = number < 0
//     number = Math.abs(number)

//     while(number>0){
//         let lastDig = number%10
//         revNum = (revNum*10) + lastDig
//         number = Math.floor(number/10)
//     }
//     return isNegetive ? -revNum : revNum    
// }

// const reversed = reverseInteger(12344)
// const negReversed = reverseInteger(-132)
// console.log(reversed);
// console.log(negReversed);

//Activity 3: Palindrome Number
//Task 3: Write a function that takes an integer and returns if it is a palindrome, false otherwise

// function palindrome(num){

//     if (num < 0) return false

//     let rev = 0
//     let dup = num

//     while(num>0){
//         let last = num%10
//         rev = (rev*10)+last
//         num = Math.floor(num/10)
//     }

//     return dup === rev
    
// }

// const test1 = palindrome(12321)
// console.log(test1);

// const test2 = palindrome(123221)
// console.log(test2);

//Activity 4: Merge two sorted list
//write a function that takes two sorted linked lists and return a new sorted list by merging them

// class Node {
//     constructor(value, next = null) {
//         this.value = value;
//         this.next = next;
//     }
// }

// function mergeList(list1, list2) {
//     let dummy = new Node(0);
//     let current = dummy;

//     while (list1 !== null && list2 !== null) {
//         if (list1.value < list2.value) {
//             current.next = list1;
//             list1 = list1.next;
//         } else {
//             current.next = list2;
//             list2 = list2.next;
//         }
//         current = current.next;
//     }
    
//     current.next = list1 !== null ? list1 : list2;

//     return dummy.next;
// }

// // Example usage:
// let l1 = new Node(1, new Node(2, new Node(4)));
// let l2 = new Node(1, new Node(3, new Node(4)));

// let mergedList = mergeList(l1, l2);
// while (mergedList !== null) {
//     console.log(mergedList.value); // Output: 1 1 2 3 4 4
//     mergedList = mergedList.next;
// }


//Activity 5: Valid Parenthesis
//Task 5: Write a function that takes a string containing just the characters (,),{,},[,] and determines if the input string is valid
//A string is valid if the open brackets are closed in the correct order

function validParenthesis(s) {
    const stack = [];
    for (let c of s) {
        if (c === '(') {
            stack.push(')');
        } else if (c === '{') {
            stack.push('}');
        } else if (c === '[') {
            stack.push(']');
        } else if (stack.length === 0 || stack.pop() !== c) {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(validParenthesis("()")); 
console.log(validParenthesis("[{[]")); 
console.log(validParenthesis("()[]{}")); 
console.log(validParenthesis("(]")); 
console.log(validParenthesis("([)]")); 
console.log(validParenthesis("{[]}")); 
