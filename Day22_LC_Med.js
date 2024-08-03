//Activity 1: Add Two Number
//Task 1: Write a function that takes two non-empty linked lists representing two non-negetive integers. The digits are stored in the reversed order, and each node contains a single digit. 
//Add these two numbers and return the sum as a linked list

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let p = l1, q = l2, current = dummy;
    let carry = 0;
    
    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = carry + x + y;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
        if (p !== null) p = p.next;
        if (q !== null) q = q.next;
    }
    
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    
    return dummy.next;
}

// Example usage
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

let sumList = addTwoNumbers(l1, l2);
let result = [];
while (sumList !== null) {
    result.push(sumList.val);
    sumList = sumList.next;
}
console.log(result); // Output: [7, 0, 8]


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

// function mostWaterContainer(array){
//     let left = 0;
//     let right = array.length - 1
//     let maxArea = 0

//     while (left<right){
//         let height = Math.min (array[left], array[right])
//         let width = right - left
//         let curArea = height*width

//         maxArea = Math.max(maxArea, curArea)
//         if(array[left] < array[right]){
//             left++
//         } else {
//             right--
//         }
//     }
    
//     return maxArea
// }

// const container = mostWaterContainer([1,4,5,2,1,5])
// console.log(container);



//Activity 4: 3Sum
//Task 4: Write a function that takes an array of integers and finds all unique triplets in the array which give the sum zero

// function threeSum(arr) {
//     const result = [];
//     const n = arr.length;

//     // Sort the array to simplify finding unique triplets
//     arr.sort((a, b) => a - b);

//     for (let i = 0; i < n - 2; i++) {
//         // Skip duplicates for the first element
//         if (i > 0 && arr[i] === arr[i - 1]) {
//             continue;
//         }

//         let left = i + 1;
//         let right = n - 1;

//         while (left < right) {
//             const sum = arr[i] + arr[left] + arr[right];

//             if (sum === 0) {
//                 result.push([arr[i], arr[left], arr[right]]);

//                 // Skip duplicates for the second and third elements
//                 while (left < right && arr[left] === arr[left + 1]) {
//                     left++;
//                 }
//                 while (left < right && arr[right] === arr[right - 1]) {
//                     right--;
//                 }

//                 left++;
//                 right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// }

// const sum = threeSum([-1, 2, -1, -4, 5, 3, 4]);
// console.log(sum); // Output should be all unique triplets that sum to zero


//Activity 5: Group Anagrams
//Task 5: Write a function that takes an array of strings and groups anagrams together

function groupAnagrams(strs) {
    const map = new Map();

    for (let str of strs) {
        // Sort the string to get the key
        let key = str.split('').sort().join('');
        // If the key does not exist, create a new array
        if (!map.has(key)) {
            map.set(key, []);
        }
        // Add the original string to the key's array
        map.get(key).push(str);
    }

    // Convert the map's values to an array of arrays
    return Array.from(map.values());
}

// Example usage
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let groupedAnagrams = groupAnagrams(strs);
console.log(groupedAnagrams); // Output: [["eat","tea","ate"],["tan","nat"],["bat"]]
