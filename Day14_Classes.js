//Activity 1: Class Definition
//Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greetings(){
//         return `Hello this is ${this.name} and my Age is ${this.age}`
//     }
// //Task 2: Add a message to the person class and update the age property. log the updated age
//     updateAge(newAge){
//         this.age = newAge
//         return `Updated age: ${this.age}`
//     }
// }

// const personGreet = new Person("Mitali", 22)
// console.log(personGreet.greetings());
// console.log(personGreet.updateAge(23));


//Activity 2: Class Inheritance
//Task 3: Define a class student that extends the Person class. 
//Add properties studentId and a method to return the student ID. 
//Create an instance of the student class and log the student ID

// class student extends Person{
//     constructor(name, age, studentId) {
//         super(name, age)
//         this.studentId = studentId
//     }
//     getId(){
//         return `The Students ID is: ${this.studentId}`
//     }

// //Task 4: Override the greeting method in the student class to include the student ID in the message.

//     greetings(){
//         return `Hello, this is ${this.name}. My age is ${this.age} and my student ID is ${this.studentId} `
//     }
// }

// const stud = new student("Mitali", 22, 'A123')
// console.log(stud.getId());
//Log the overriden greeting message
// console.log(stud.greetings());

//Activity 3: Static Methods and properties

// class Person {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     greetings(){
//         return `Hello this is ${this.name} and my Age is ${this.age}`
//     }
//     updateAge(newAge){
//         this.age = newAge
//         return `Updated age: ${this.age}`
//     }
// //Task 5: Add a static method to the person class that returns a generic greeting message.
// //Call this static method without creating an instance of the class and log the message
//     static genericGreet(){
//         return `Hello, So nice to meet you`
//     }
// }

// console.log(Person.genericGreet());

//Task 6: Add a static property to the student class to keep the track of number of student created. 
//Increment this property in the constructor and log the total number of students

// class student extends Person{
//     constructor(name, age, studentId) {
//         super(name, age)
//         this.studentId = studentId     

//         student.numOfStudent++;
//     }
//     getId(){
//         return `The Students ID is: ${this.studentId}`
//     }

//     greetings(){
//         return `Hello, this is ${this.name}. My age is ${this.age} and my student ID is ${this.studentId} `
//     }
//     // Static property to keep track of the number of students
//     static numOfStudent = 0

//     // Static method to get the number of students
//     static getNumOfStudent(){
//         return `Total Number of student is ${student.numOfStudent}`
//     }
       
// }
// // Creating instances of the Student class
// const student1 = new student("Mitali", 22, 'A123')
// const student2 = new student("Jimin", 25, 'A1')
// const student3 = new student("Jungkook", 23, 'AA1')
// // Logging the total number of students
// console.log(student.getNumOfStudent());


//Activity 4: Getter and Setter

class Person {
    constructor(name, age, firstName, lastName) {
        this.name = name
        this.age = age
        this.firstName = firstName
        this.lastName = lastName
    }
    greetings(){
        return `Hello this is ${this.name} and my Age is ${this.age}`
    }
    updateAge(newAge){
        this.age = newAge
        return `Updated age: ${this.age}`
    }
    static genericGreet(){
        return `Hello, So nice to meet you`
    }

 //Task 7: Add getter method to the person class to return the full name(firstName and lastName properties).
//Create an instance and log the full name

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }


    //Task 8: Add a setter method to the person class to update the name properties.
    //Update the name using the setter and log the updated full name.

    set updateFirst(newFirstName){
        this.firstName = newFirstName
    }
    set updateLastName(newLastName){
        this.lastName = newLastName
    }

    get newFullName(){
        return `${this.updateFirst} ${this.updateLastName}`
    }
}

const FullName = new Person("a", 22, "Mitali", "Maurya")
console.log(FullName.fullName);

// Update the name using the setter and log the updated full name
FullName.updateFirst = "Jimin"
FullName.updateLastName = "Park"
console.log(FullName.fullName);