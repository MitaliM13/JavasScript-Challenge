// //Activity 1: Object Creation and Access
// //Task 1: A book object with properties like title, author, and year

// // const Book = {
// //     title: "Chai aur JavaScript",
// //     author: "Hitesh Choudhary",
// //     year: 2024
// // }

// // console.log("Title of the book is:", Book.title);
// // console.log("Author of the book is:", Book.author);

// //Activity 2: Object Method
// //Task 3: Add a method to book object that returns a string with the book's title 

// const Book = {
//     title: "Chai aur JavaScript",
//     author: "Hitesh Choudhary",
//     year: 2024,
//     getTitle: function () {
//         return `The Title of the book is: ${this.title}`
//     },
//     getAuthor: function () {
//         return `The Author of the book is: ${this.author}`
//     }, 
//     getYear: function(){
//         return `The Year of the book is: ${this.year}`
//     },
//     updateYear: function(year){
//         this.year = year
//         return `The Updated year is ${this.year}`
//     }
// }

// console.log(Book.getTitle());
// console.log(Book.getAuthor());
// console.log(Book.getYear());
// console.log(Book.updateYear(2025));

const library = [
    Book1 = {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960,
        getTitleAndYear: function(){
            return `The title of the book is ${this.title} and the year of Publication is ${this.year}`
        }
    }, 
    Book2 ={
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    Book3 = {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        year: 1813
    }
]

const titles = library.map(book => book.title)
console.log(titles);

for (const book in library) {
   console.log(`${book}: ${library[book].title}`);
}

console.log(Object.keys(library))
console.log(Object.values(library))