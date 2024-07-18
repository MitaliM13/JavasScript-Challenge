//Activity 1: If- Else Statements
//Task 1: check if number is positive, negitive or 0

let number = 3

if (number>0) {
    console.log("Number is positive");
} else if(number<0){
    console.log("Number is Negetive");
} else {
    console.log("Number is zero");
}

//Task 2: Check if person is eligible to vote

let age = 22
if(age>18){
    console.log("The person is eligible to vote");
} else {
    console.log("The person is not eligible to vote");
}

//Activity 2: Nested If-Else
//Task 3: Largest of 3 numbers

let digit1 = 27823984
let digit2 = 22834289
let digit3 = 29382893

if (digit1>digit2 && digit1>digit3) {
    console.log("Digit 1 is greatest");
} else if(digit2>digit1 && digit2>digit3){
    console.log("Digit 2 is the greatest");
} else {
    console.log("Digit 3 is the greatest");
}

//Activity 3: Switch Case 
//Task 4: Days of week

let day = 3

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Day does not exist");
        break;
}

//Task 5: Assign a grade

let grade = 90

switch (true) {
    case grade>=85:
        console.log("A grade");
        break;
    case grade>=70:
        console.log("B grade");
        break;
    case grade>=55:
        console.log("C grade");
        break;
    case grade>=35:
        console.log("D grade");
        break;

    default:
        console.log("F grade");
        break;
}

//Activity 4: Ternary Operator
//Task 6: Even or odd

let dig = 378278

const EvenOrOdd = dig%2==0 ? "Digit is Even" : "Digit is Odd"
console.log(EvenOrOdd);

//Activity 5: Combination
//Task 7: Check if leap Year

let year = 2144

if((year%4 == 0 && year%100 != 0) || (year%400 == 0)){
    console.log("It is a leap year");
} else {
    console.log("It is not a leap year");
}