
//Activity 1: Median of two sorted arrays
//Task 1:Write a function that takes two sorted arrays of intergers and returns the median of the two sorted arrays

function findMedianSortedArray(arr1, arr2){
    let mergedArray = mergeArrays(arr1, arr2)

    return findMedian(mergedArray)
}

function mergeArrays(arr1, arr2){
    let merge = []

    let i = 0, j = 0;

    while(i< arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            merge.push(arr1[i])
            i++
        } else {
            merge.push(arr2[j])
            j++
        }
    }

    while(i<arr1.length){
        merge.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        merge.push(arr2[j])
        j++
    }
    return merge
}

function findMedian(arr){
    let len = arr.length
    if(len % 2 === 0){
        return (arr[len/ 2 - 1] + arr[len/2]) / 2
    } else {
        return arr[Math.floor(len/2)]
    }
}

// let arr1 = [1,3,4]
// let arr2 = [2,5]
// console.log(findMedianSortedArray(arr1,arr2));
// let arr3 = [1,3,2,5,7,4]
// let arr4 = [1,2]
// console.log(findMedianSortedArray(arr3,arr4));
// let arr5 = [1,3,4,10,21,23]
// let arr6 = [2,5,12]
// console.log(findMedianSortedArray(arr5,arr6));


//Activity 2: Merge k sorted list
//Task 2: Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked list into one sorted linked list

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    const minHeap = new MinHeap((a, b) => a.val - b.val);
    
    // Initialize the heap with the head nodes of all the lists
    for (let list of lists) {
        if (list !== null) {
            minHeap.insert(list);
        }
    }
    
    // Dummy node to help with the merge process
    let dummy = new ListNode();
    let current = dummy;
    
    // While there are nodes in the heap
    while (!minHeap.isEmpty()) {
        // Extract the smallest node
        let smallestNode = minHeap.extract();
        // Add it to the merged list
        current.next = smallestNode;
        current = current.next;
        
        // If there is a next node, push it to the heap
        if (smallestNode.next !== null) {
            minHeap.insert(smallestNode.next);
        }
    }
    
    return dummy.next;
}

class MinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    
    isEmpty() {
        return this.heap.length === 0;
    }
    
    insert(value) {
        this.heap.push(value);
        this.bubbleUp();
    }
    
    extract() {
        if (this.isEmpty()) {
            return null;
        }
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = end;
            this.bubbleDown();
        }
        return min;
    }
    
    bubbleUp() {
        let index = this.heap.length - 1;
        const element = this.heap[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.heap[parentIndex];
            if (this.compare(element, parent) >= 0) break;
            this.heap[index] = parent;
            index = parentIndex;
        }
        this.heap[index] = element;
    }
    
    bubbleDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];
        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (this.compare(leftChild, element) < 0) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && this.compare(rightChild, element) < 0) ||
                    (swap !== null && this.compare(rightChild, leftChild) < 0)
                ) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            index = swap;
        }
        this.heap[index] = element;
    }
}

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Example usage:
let list1 = createLinkedList([1, 4, 5]);
let list2 = createLinkedList([1, 3, 4]);
let list3 = createLinkedList([2, 6]);

let lists = [list1, list2, list3];
let mergedList = mergeKLists(lists);

// Helper function to print the linked list
function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.val + " -> ");
        current = current.next;
    }
    console.log("null");
}

printLinkedList(mergedList); // Output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6 -> null

//Activity 3: Trapping rain water
//Task 3: Write a function that takes an array of non-negetive integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining

function trap(height){
    if(height.length === 0) return 0

    const n = height.length
    const leftMax = new Array(n).fill(0);
    const rightMax = new Array(n).fill(0);
    let waterTrapped = 0;

     leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }

    // Fill rightMax array
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    // Calculate water trapped
    for (let i = 0; i < n; i++) {
        waterTrapped += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return waterTrapped;
}

// Example usage:
const elevationMap = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(elevationMap)); // Output: 6


//Activity 4: N-Queens
//Task 4: Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all the distinct solutions to the n-queens puzzle

function solveNQueens(n) {
    const solutions = [];
    const board = Array.from({ length: n }, () => Array(n).fill('.'));

    const isSafe = (board, row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    const solve = (board, row) => {
        if (row === n) {
            solutions.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row][col] = 'Q';
                solve(board, row + 1);
                board[row][col] = '.';
            }
        }
    };

    solve(board, 0);
    return solutions;
}

// Example usage:
const n = 4;
const result = solveNQueens(n);
console.log(result); // Output: All distinct solutions for 4-Queens problem


//Activity 5: Word Ladder
//Task 5: Write a function that takes a begin word, an end wordm and a dictionary of words, and finds the length of the shortest transformation sequence from the beginning word to the end word, such that only ome letter can be changed at the time and each transformed word must exist in the word list 

function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [[beginWord, 1]];
    const visited = new Set([beginWord]);

    while (queue.length > 0) {
        const [currentWord, steps] = queue.shift();
        
        if (currentWord === endWord) return steps;

        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const newWord = currentWord.slice(0, i) + String.fromCharCode(c) + currentWord.slice(i + 1);
                if (wordSet.has(newWord) && !visited.has(newWord)) {
                    queue.push([newWord, steps + 1]);
                    visited.add(newWord);
                }
            }
        }
    }

    return 0;
}

// Example usage:
const beginWord = "hit";
const endWord = "cog";
const wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList)); // Output: 5
