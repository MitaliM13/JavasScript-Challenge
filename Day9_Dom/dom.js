// //Activity 1: Selecting and manipulating elements
// //Task 1: Select HTML element by ID and chanhge its text color

// const text = document.getElementById("text");
// text.style.color = "green"

// //Task 2: Select and HTML element by its class and change its BackGround color

// const card = document.querySelector('.card')
// card.style.backgroundColor = "yellow"

// //Activity 2: Creating and appending elements
// //Task 3: Create a new div with some text content and append it to the body

// const div = document.createElement('div')
// div.textContent = "I'm learning JavaScript"
// document.body.appendChild(div)

// //Task 4: Create a new li element and add it to an existing ul list

// const list = document.getElementById("list")
// const li = document.createElement('li')
// li.textContent = '4'
// list.appendChild(li)

// //Activity 3: Removing elements
// //Task 5: Select an HTML element and remove it from the dom

// const secLi = document.getElementById("2")
// list.removeChild(secLi)

// //Task 6: Remove last child of specific HTML element

// list.removeChild(list.lastChild)

// //Activity 4: Modifying attributes and classes
// //Task 7 : Select HTML element and change one of it attribute(eg. src og of img)
// const img = document.querySelector('img')
// img.src = "https://images.unsplash.com/photo-1721504483802-6503a4ba6eeb?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"


// //Task 8: Add and remove a CSS class to/ from an HTML element

// const para = document.createElement('p')
// para.textContent = "Welcome to the website"
// document.body.appendChild(para)
// para.classList.add('highlight')
// // para.classList.remove('highlight')

// //Activity 5: Event Handling
// //Task 9: Add a click event listener to a button that changes the text content of a para

const button = document.querySelector('#textChanger')
const text = document.getElementById("text")
button.addEventListener("click", () => {
    text.textContent = "this is modified text"
}
)

//Task 10 : Add mouseover event to change border color

const div = document.querySelector(".btn")
div.addEventListener("mouseover", () => {
    div.style.borderColor = "yellow"
})

div.addEventListener("mouseout", () => {
    div.style.borderColor = ""
})