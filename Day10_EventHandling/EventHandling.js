const button1 = document.getElementById('change-text-button');
const paragraph = document.getElementById('text-paragraph');
const originalText = paragraph.textContent;
const newText = "This is the modified text";

button1.addEventListener("click", () => {
   if (paragraph.textContent === originalText) {
    paragraph.textContent = newText;
   } else {
    paragraph.textContent = originalText;
   }
});

const container = document.getElementById('click-container');
container.addEventListener("mouseover", () => {
    container.style.backgroundColor = "#9ebcdb";
});
container.addEventListener("mouseout", () => {
    container.style.backgroundColor = "";
});

const image = document.querySelector('#image1');
image.addEventListener("dblclick", () => {
    if (image.style.opacity == 0.2) {
        image.style.opacity = 1;
    } else {
        image.style.opacity = 0.2;
    }
});

const field1 = document.getElementById('input-field1');
const output1 = document.getElementById('output1');
const text1 = document.createElement('p');
output1.appendChild(text1);

field1.addEventListener("keydown", (e) => {
    text1.textContent = `Key pressed: ${e.key}`;
});

const field2 = document.getElementById('input-field2');
const output2 = document.getElementById('output2');
const text2 = document.createElement('p');
output2.appendChild(text2);

field2.addEventListener("keyup", (e) => {
    text2.textContent = `${e.target.value}`;
});

const form = document.getElementById('myForm');
const formOutput = document.getElementById('form-output');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    let outputHtml = '<h3>Form Data:</h3>';
    for (const [key, value] of Object.entries(data)) {
        outputHtml += `<p><strong>${key}:</strong> ${value}</p>`;
    }
    formOutput.innerHTML = outputHtml;
});

// Task 8: Add a change event listener to a select drop down that displays the selected value in a paragraph
const selectBox = document.getElementById('select-box');
const selectedValue = document.getElementById('selected-value');

selectBox.addEventListener('change', () => {
    selectedValue.textContent = `Selected Value: ${selectBox.value}`;
});

// Task 9: Add a click event listener to a list that displays the text content of the clicked list item using event delegation
const list = document.getElementById('list');

list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        alert(`You clicked on: ${e.target.textContent}`);
    }
});

// Task 10: Add an event listener to a parent element that listens for the events from dynamically added child elements
const parentContainer = document.getElementById('input-container');
const addButton = document.createElement('button');
addButton.textContent = "Add Input";
parentContainer.appendChild(addButton);

addButton.addEventListener('click', () => {
    const newInputContainer = document.createElement('div');
    newInputContainer.className = 'input-container';
    const newInput = document.createElement('input');
    newInput.className = 'input-field';
    newInput.type = 'text';
    newInput.placeholder = 'New input...';
    const newOutput = document.createElement('p');
    newOutput.className = 'output-text';
    newInputContainer.appendChild(newInput);
    newInputContainer.appendChild(newOutput);
    parentContainer.appendChild(newInputContainer);

    newInput.addEventListener('keyup', (e) => {
        newOutput.textContent = `${e.target.value}`;
    });
});
