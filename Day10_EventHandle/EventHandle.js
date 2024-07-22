// Task 1: click event listener on a button to change its text content
const button = document.querySelector('#btn');
const para = document.getElementById('para');
button.addEventListener("click", () => {
    para.textContent = "Paragraph content has been successfully changed!!";
});

// Task 2: double-click event to an image that toggles its visibility
const image = document.getElementById('img');
image.addEventListener("dblclick", () => {
    if (image.style.visibility === "hidden") {
        image.style.visibility = "visible";
        image.style.opacity = 1;
    } else {
        image.style.visibility = "hidden";
        image.style.opacity = 0;
    }
});

// Task 3: Add a mouse over event to an element that changes its background color
const elem = document.querySelector('.elem');
elem.addEventListener("mouseover", () => {
    elem.style.backgroundColor = "yellow";
});

// Task 4: Keydown event to an input field that logs the key pressed to the console
const input = document.getElementById('field');
const output = document.getElementById('output');
const text = document.createElement("p");
output.appendChild(text);

// input.addEventListener("keydown", (e) => {
//     text.textContent = `Key pressed: ${e.key}`;
// });

//Task 8: key up event to an input field that displays the current in a paragraph

input.addEventListener("keyup", (e) => {
    output.textContent = `Current input: ${e.target.value}`;
});

//Activity 4: Form events

//Task 7: Add a submit event to a form that prevents the default submission and logs the form data to the console

//Task 8 Add a change event listener to a select drop down that displays the selected value in a paragraph

//Activity 5: Event delegation 

//Task 9: Add a click event listener to a list that logs the text content of the clicked list item using the event delegation

//Task 10: Add a event listener to a parent element that listens for the events from dynamically added child emenents

// Task 7: Add a submit event to a form that prevents the default submission and logs the form data to the console
const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log('Form Data:', data);
});

// Task 8: Add a change event listener to a select drop down that displays the selected value in a paragraph
const select = document.getElementById('options');
const selectedValue = document.getElementById('selectedValue');
select.addEventListener('change', (e) => {
    selectedValue.textContent = `Selected value: ${e.target.value}`;
});

// Activity 5: Event delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation
const list = document.getElementById('list');
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log(`Clicked item: ${e.target.textContent}`);
    }
});

// Task 10: Add an event listener to a parent element that listens for the events from dynamically added child elements
const parentDiv = document.getElementById('parentDiv');
const addChildButton = document.getElementById('addChild');

addChildButton.addEventListener('click', () => {
    const newChild = document.createElement('p');
    newChild.textContent = 'Dynamically added child element';
    parentDiv.appendChild(newChild);
});

parentDiv.addEventListener('click', (e) => {
    if (e.target.tagName === 'P') {
        console.log(`Clicked on: ${e.target.textContent}`);
    }
});
