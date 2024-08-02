//Activity 1: Understanding Local Storage
//Task 1: Write a script to save a string value to local storage and retrive it. Log the retrieved value

localStorage.setItem("myString", "This is Local Storage")
const retrieved = localStorage.getItem("myString")
console.log("Retrieved String", retrieved);

//Task 2: Write a script to save an object to LocalStorage by converting it to a json string. Retrive and parse the object, then log it

const myData = {
    name: "Mitali",
    age: 22,
    City: "Mumbai"
}

localStorage.setItem("myInfo", JSON.stringify(myData))
const retrievedObj = JSON.parse(localStorage.getItem("myInfo"))
console.log( `Retrieved Object is`, retrievedObj);

//Activity 2: Using LocalStorage
//Task 3: Create a simple form that saves user input to local storage when submitted .Retrieve and display the data on page load

//Task 4: Write a script to remove an item from local storage. Log the local storage content before and after removal

localStorage.setItem('sample', 'samplee')
console.log(`Before removal`, localStorage.getItem('sample'));
if(localStorage.key === 'sample'){
    localStorage.removeItem('samplee')
}
console.log(`After removal`,localStorage.getItem('sample'));


//Activity 3: Understanding session storage
//Task 5: Write a script to save a string value to the session storage and retrieve it. 

sessionStorage.setItem("example", "SampleString")

const session = sessionStorage.getItem("example")
console.log(session);

//Task 6: Write a script to save an object value to the session storage by converting it to a json string. Retrive and parse the object, then log it


const sessionObj = {
    first: "one",
    second: "Two",
    third: "Three"
}

sessionStorage.setItem("storage", JSON.stringify(sessionObj))

const obj = JSON.parse(sessionStorage.getItem("storage"))
console.log(obj);

//Activity 4: Using session storage

//Task 8: Write a script to remove an item from session storage. Log the local storage content before and after removal

sessionStorage.setItem('set', 'get')
console.log(`Before removal`, sessionStorage.getItem('set'));
if(sessionStorage.key === 'set'){
    sessionStorage.removeItem('get')
}
console.log(`After removal`,sessionStorage.getItem('set'));

//Activity 5: Compare local and session storage
//Task 9 : Write a function that accepts a key and value, and saves it to both local and sessin storage. Retrieve and log values from both storages

function bothStorage(localKey, localValue, sessionKey, sessionValue) {
    localStorage.setItem(localKey, localValue);
    sessionStorage.setItem(sessionKey, sessionValue);
}

// Save separate key-value pairs to localStorage and sessionStorage
bothStorage("localKey", "LocalValue", "sessionKey", "SessionValue");

// Retrieve values from both storages
let locStorage = localStorage.getItem("localKey");
let sesStorage = sessionStorage.getItem("sessionKey");

// Log the retrieved values
console.log("Local Storage:", locStorage);
console.log("Session Storage:", sesStorage);

//Task 10: Write a function that clears all the data from both the storage. Verify that both the storage are empty

function clearAllStorage(){
    localStorage.clear()
    sessionStorage.clear()
}

clearAllStorage()

console.log("Local Storage after clear:", localStorage.length === 0 ? "Empty" : "Not empty");
console.log("Session Storage after clear:", sessionStorage.length === 0 ? "Empty" : "Not empty");