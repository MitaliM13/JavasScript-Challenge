//Activity 1: Basic Regular Expressions
//Task 1: Write a regular expression to match a simple pattern

// function matchString(string){
//     let regex1 = /[java]/g
//     return string.match(regex1)
// }

// const match = matchString("javascript and java")
// console.log(match);

/**Explanation:

function matchString(string): This is like a little machine called a function that takes a string (a bunch of letters and words) as an input.

let regex1 = /java/g: We create a pattern to search for. This pattern says, "Find the word 'java'". The g means "find all occurrences" (not just the first one).

return string.match(regex1): We use this pattern to look through our input string and find all the matches.

const match = matchString("javascript is java"): We run our little machine with the string "javascript is java".

console.log(match): We print out what we found. It should show ['java', 'java'] because the word "java" appears twice. */

//Task 2: Write a regular expression to macth all the digits in the string. Log the matches

// function matchDigit(dig){
//     let regex = /\d/g
//     return Array.from(dig.matchAll(regex), m => m[0])
// }

// const digit = matchDigit("182ubshd3w728")
// console.log(digit);

/*
function matchDigits(dig): This is another little machine called a function that takes a string with numbers and letters as input.

let regx = /\d/g: We create a pattern to search for. This pattern says, "Find any number". The \d is a special symbol that means "any digit (0-9)". The g means "find all occurrences".

return Array.from(dig.matchAll(regx), m => m[0]):
dig.matchAll(regx): We use our pattern to look through our input string and find all the numbers.

Array.from( ..., m => m[0]): This part takes all the matches and puts them into a list (array) of just the numbers.

const digit = matchDigits("1234abc567"): We run our little machine with the string "1234abc567".

console.log(digit): We print out what we found. It should show ['1', '2', '3', '4', '5', '6', '7'] because those are all the numbers in the string.

So, these little machines (functions) help us find specific patterns in our strings, like words or numbers!
*/

//Activity 2: Character classes and quantifiers
//Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches

// const sentence = /\b[A-Z][a-z]*\b/g
// const expression = "Hello, This All Starts with a Capital Letter"

// const capitalLetter = expression.match(sentence)
// console.log(capitalLetter);

//Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches

// const regex = /\d+/g
// const string = "238y3qdbase718237"

// const digits = string.match(regex)
// console.log(digits)

//Activity 3: Grouping and Capturing 
//Task 5: Write a regular expression to capture the area code, central office code, and line number from the US phone number format [e.g (123) 456-7890]

const phoneNumberRegex = /\((\d{3})\)\s(\d{3})-(\d{4})/g
const phoneNum = '(123) 456-7890'

// const matches = phoneNum.match(phoneNumberRegex)
// console.log(matches);

//For specefic matches

// const match = phoneNumberRegex.exec(phoneNum)
// if(match){
//     const[, areaCode, centralOfficeCode, lineNumber] = match
//     console.log(`Area Code: ${areaCode}`);
//     console.log(`Central Office Code: ${centralOfficeCode}`);
//     console.log(`Line Number: ${lineNumber}`);
// }

//Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures

// const emailRegex = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
// const email = "example.user@domain.com";

// const matches = email.match(emailRegex);
// if (match) {
//     const [, username, domain] = matches;
//     console.log(`Username: ${username}`);
//     console.log(`Domain: ${domain}`);
// }

//Activity 4: Assertion and Boundries
//Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches

const beginningWordRegex = /^\w+/g
const string = 'This is a sample string'

const macthBeginning = string.match(beginningWordRegex)
console.log('Beginning Match',macthBeginning);

//Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches

const EndWordRegex = /\w+$/g
const string2 = 'This is a sample string'

const macthEnd = string.match(EndWordRegex)
console.log('End Match',macthEnd);

//Activity 8: Practical Application
//Task 9: Write a regex to validate a simple password(must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid

const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const password = "P@ssw0rd";

const isValidPassword = passwordRegex.test(password);
console.log(`Is the password valid? ${isValidPassword}`);


//Task 10: write a regex to validate a URL. Log whether the Url is valid

const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;
const url = "https://www.example.com/path";

const isValidUrl = urlRegex.test(url);
console.log(`Is the URL valid? ${isValidUrl}`);
