//Activity 1: Linked List
//Task 1: Implement a Node class to represent an element in a linked list with properties value and next

class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

const head = new Node(1)
// console.log(head);

//Task 2: Implement a LinkedList Class with methods to add a node to the end, remove a node from the end, and display all nodes


class LinkedList {
    constructor() {
        this.head = null;
    }

    addToLast(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    removeFromLast() {
        if (this.head === null) {
            console.log("List is empty.");
            return;
        } else if (this.head.next === null) {
            this.head = null;
        } else {
            let current = this.head;
            let previous = null;
            while (current.next !== null) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
    }

    displayAll() {
        if (this.head === null) {
            console.log("The list is empty.");
            return;
        }
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

// // Example usage
// const list = new LinkedList();
// list.addToLast(1);
// list.addToLast(2);
// console.log("Display all nodes:");
// list.displayAll();
// list.removeFromLast();
// console.log("After removing the last node:");
// list.displayAll();

// Activity 2: Stacks 
// Task 3: Implement a Stack class with methods push, pop and peek

class Stack{
    constructor() {
        this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.items.length === 0){
            console.log(`The stack is empty.`);
            return
        }
        return this.items.pop()
    }

    peek() {
        if(this.items.length === 0){
            console.log(`The stack is empty.`);
            return
        }
        return this.items[this.items.length - 1]
    }

    isEmpty(){
        return this.items.length === 0
    }

    size(){
        return this.items.length
    }
    display(){
        console.log(this.items.toString());
    }
}

// const stackMethod = new Stack()
// stackMethod.push('h')
// stackMethod.push('e')
// stackMethod.push('l')
// stackMethod.push('l')
// stackMethod.push('o')
// stackMethod.display()
// console.log("The top element is:", stackMethod.peek());
// console.log("The popped element is:", stackMethod.pop());
// stackMethod.display()
// console.log("The stack size is:", stackMethod.size());
// console.log("Is stack empty:", stackMethod.isEmpty());

// Task 4: Use the Stack class to reverse a string by pushing all characters onto the stack and then popping them off

function reverseString(str){
    const input = new Stack()

    for(let char of str){
        input.push(char)
    }
    let reverse = ''
    while(!input.isEmpty()){
        reverse += input.pop()
    }
    return reverse
}

const originalString = 'I HATE DSA!!!'
const reversed = reverseString(originalString)
// console.log("Original string:" , originalString);
// console.log("Reversed string:" , reversed);

//Activity 3: Queue
//Task 5: Implement a queue class with methods such enqueue, dequeue, and front

class Queue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    // Method to add an element to the queue
    enqueue(element) {
        this.items[this.backIndex] = element;
        this.backIndex++;
        return element + " inserted";
    }

    // Method to remove and return the front element from the queue
    dequeue() {
        if (this.frontIndex === this.backIndex) {
            console.log("Queue is empty.");
            return null;
        }
        const removedElement = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return removedElement;
    }

    // Method to return the front element of the queue without removing it
    front() {
        if (this.frontIndex === this.backIndex) {
            console.log("Queue is empty.");
            return null;
        }
        return this.items[this.frontIndex];
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.frontIndex === this.backIndex;
    }

    // Method to return the size of the queue
    size() {
        return this.backIndex - this.frontIndex;
    }

    // Method to display all elements in the queue
    display() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }
        let queueStr = "";
        for (let i = this.frontIndex; i < this.backIndex; i++) {
            queueStr += this.items[i] + " ";
        }
        console.log(queueStr.trim());
    }
}

// Example usage
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log("Front element is: " + queue.front());
console.log("Dequeued element is: " + queue.dequeue());
queue.display();
console.log("Queue size is: " + queue.size());
console.log("Is queue empty? " + queue.isEmpty());


//Task 6: Use the queue class to stimulate a simple printer queue where the print jobs are added to the queue and processed in order

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    // Method to add a print job to the queue
    addJob(job) {
        console.log(this.queue.enqueue(job) + " to the print queue.");
    }

    // Method to process the next print job
    processJob() {
        if (this.queue.isEmpty()) {
            console.log("No print jobs in the queue.");
            return;
        }
        const job = this.queue.dequeue();
        console.log("Processing print job: " + job);
    }

    // Method to display all print jobs in the queue
    displayJobs() {
        console.log("Current print jobs in the queue:");
        this.queue.display();
    }
}

// Example usage
const printerQueue = new PrinterQueue();
printerQueue.addJob("Document1.pdf");
printerQueue.addJob("Image1.jpg");
printerQueue.addJob("Report.docx");
printerQueue.displayJobs();
printerQueue.processJob();
printerQueue.displayJobs();
printerQueue.processJob();
printerQueue.displayJobs();
printerQueue.processJob();
printerQueue.displayJobs();
printerQueue.processJob();

//Activity 4: Binary Tree 
//Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left and right

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//Task 8: Implement a BinaryTree class with methods for inserting values and performing inorder traversal to display nodes

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Method to insert a value into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    // Helper method to insert a node in the correct position
    _insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    // Method to perform inorder traversal and display nodes
    inorderTraversal() {
        this._inorderTraversalHelper(this.root);
    }

    // Helper method for inorder traversal
    _inorderTraversalHelper(node) {
        if (node !== null) {
            this._inorderTraversalHelper(node.left);
            console.log(node.value);
            this._inorderTraversalHelper(node.right);
        }
    }
}

// Example usage
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(3);
binaryTree.insert(7);
binaryTree.insert(2);
binaryTree.insert(4);
binaryTree.insert(6);
binaryTree.insert(8);

console.log("Inorder traversal of binary tree:");
binaryTree.inorderTraversal();
