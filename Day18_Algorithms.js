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

function binarySearch(arr, target, low = 0, high = arr.length - 1){
    if(low>high) return -1
    let mid = Math.floor((low + high)/2)

    if(arr[mid] === target){
        return mid
    } else if (arr[mid] < target){
        return binarySearch(arr, target,mid +1 ,high)
    } else {
        return binarySearch(arr, target, low, mid -1)
    }
}

const arr = [1,2,3,4,5]
const target = 5
const index = binarySearch(arr, target)
console.log(index);