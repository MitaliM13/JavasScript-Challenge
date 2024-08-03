//Activity 1: Add Two Number
//Task 1: Write a function that takes two non-empty linked lists representing two non-negetive integers. The digits are stored in the reversed order, and each node contains a single digit. 
//Add these two numbers and return the sum as a linked list

// class Node{
//     constructor(value, next = null) {
//         this.value = value
//         this.next = next
//     }
// }

// function addLists(list1 , list2){

// }

//Activity 2: Longest substring without repeating characters
//Task 2: Write a function that takes a string and return the length of the longest substring without repeating characters.


// function longestSubstring(str){
//     let n = str.length
//     let longLen = 0
//     const set = new Set()
//     let left = 0
//     for(let right = 0; right< n; right++){
//         if(!set.has(str.charAt(right))){
//             set.add(str.charAt(right))
//             longLen = Math.max(longLen, right - left + 1)
//         } else {
//             while(set.has(str.charAt(right))){
//                 set.delete(str.charAt(left))
//                 left++
//             }
//             set.add(str.charAt(right))
//         }
//     }
//     return longLen
// }

// let string = longestSubstring("abcdefganksnds")
// console.log(string);
// let string2 = longestSubstring("abca")
// console.log(string2);
// let string3 = longestSubstring("acbdefghb")
// console.log(string3);


//Activity 3: Container with most water
//Task 3: Write a function that takes an array of non-negetive integers where each integer represents a height of a line drawn at each point. 
//Find the two lines that together with the x-axis form a container, such that the container holds the most water.

function mostWaterContainer(array){
    let left = 0;
    let right = array.length - 1
    let maxArea = 0

    while (left<right){
        let height = Math.min (array[left], array[right])
        let width = right - left
        let curArea = height*width

        maxArea = Math.max(maxArea, curArea)
    }
    if(array[left] < array[right]){
        left++
    } else {
        right--
    }
    return maxArea
}

const container = mostWaterContainer([1,4,5,2,1,5])
console.log(container);



//Activity 4: 3Sum
//Task 4: Write a function that takes an array of integers and finds all unique triplets in the array which give the sum zero


//Activity 5: Group Anagrams
//Task 5: Write a function that takes an array of strings and groups anagrams together