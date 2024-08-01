// //Activity 1: Sorting Algorithms

const { functions } = require("lodash")

// const arr = [21,35,12,42,1,23]

// //Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order

// function bubbleSrt(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i -1; j++) {

//             if (arr.length <= 1) {
//                 return
//             }

//             if (arr[j]> arr[j+1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     console.log(arr);
// }

// // bubbleSrt(arr)

// //Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order

// function selectionSrt(arr){
//     const n = arr.length
//     for (let i = 0; i < n-1; i++) {
//         let small = i;
//         for (let j = i+1; j < n; j++) {
//             if (arr[j]<arr[small]) {
//                 small = j
//             }
//         }
//         if(small !== i){
//             let temp = arr[i]
//             arr[i] = arr[small]
//             arr[small] = temp
//         }
//     }
//     console.log(arr);
// }
// // selectionSrt(arr)

// function partition(arr, low, high) {
//     let pivot = arr[high];
//     let i = low - 1;

//     for (let j = low; j < high; j++) {
//         if (arr[j] < pivot) {
//             i++;
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp;
//         }
//     }
//     let temp = arr[i + 1];
//     arr[i + 1] = arr[high];
//     arr[high] = temp;
//     return i + 1;
// }

// function quickSort(arr, low, high) {
//     if (low < high) {
//         let piv = partition(arr, low, high);
//         quickSort(arr, low, piv - 1);
//         quickSort(arr, piv + 1, high);
//     }
// }

// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

//Activity 2: Searching Algorithms
//Task 4: Linear search to find the target value in the array. Log the index

function linearSearch(arr, target){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

// const arr = [1,2,3,4,5,6]
// const target = 3
// const index = linearSearch(arr, target)

// console.log(index);

//Task 5: Binary search to find the target value in a sorted array. Log the index

// function binarySearch(arr, target, low = 0, high = arr.length - 1){
//     if(low>high) return -1
//     let mid = Math.floor((low + high)/2)

//     if(arr[mid] === target){
//         return mid
//     } else if (arr[mid] < target){
//         return binarySearch(arr, target,mid +1 ,high)
//     } else {
//         return binarySearch(arr, target, low, mid -1)
//     }
// }

// const arr = [1,2,3,4,5]
// const target = 5
// const index = binarySearch(arr, target)
// console.log(index);

//Activity 3: String algorithm
//Task 6: Write a function to count the occurence of each character in a string. Log the character count

function characterCount(str){
    let count = {}
    for(let i = 0; i<str.length; i++){
        let char = str[i]
        count[char] = (count[char] || 0) + 1
    }
    return count
}

let character = characterCount("Hello")
let character2 = characterCount("aksadhaksdhwfvbsdftyg")
// console.log(character);
// console.log(character2);

//Task 7: Write a function to find the longest substring without repeating characters in the string.log the length of the string

function longestSubstring(str){
    let charIndex = new Map()
    let longestLen = 0
    let start = 0

    for(let end = 0; end < str.length; end++){
        let char = str[end]

        if(charIndex.has(char)){
            start = Math.max(start, charIndex.get(char) + 1)
        }

        charIndex.set(char, end)
        longestLen = Math.max(longestLen, end - start + 1)
    }
    return longestLen
}

let substring = longestSubstring("asihdaskjdba")
// console.log(substring);

//Activity 4: Array Algorithms
//Task 8: Write a function to rotate an array by k positions. Log the rotated array

function rotateByK(arr, k){
    let n = arr.length
    k = k % n
    return arr.slice(-k).concat(arr.slice(0, -k))
}

let rotatedArray = rotateByK([1,2,3,4,5,6,7], 4)
let rotatedArray2 = rotateByK([1,2,3,4,5,6,7], 1)
// console.log(rotatedArray);
// console.log(rotatedArray2);

//Task 9: Write a function to merge to sorted arrays into one sorted array. Log the merged array

function mergeArrays(arr1, arr2){
    let arr = []
    let i = 0, j = 0
    
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            arr.push(arr1[i])
            i++
        } else {
            arr.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        arr.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        arr.push(arr2[j])
        j++
    }
    return arr
}

let mergeArray = mergeArrays([1,3,5,7], [2,4,6,8])
console.log(mergeArray);