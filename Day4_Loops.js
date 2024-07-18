//Activity 1: For loop
//Task 1: 1-10 Numbers

for (let num = 1; num <=10; num++) {
    // console.log("Number:",num);    
}

//Task 2: Multiplication table of 5

for(let i = 1; i<=10; i++){
    // console.log("Table of 5", i*5);
}

//Activity 2: While loop
//Task 3: Sum of first 10 numbers

let sum = 0
let num = 1
while(num<=10){
    sum +=num
    num++
}

// console.log("Sum of first 10 number is",sum);

//Task 4: Print 10 to 1

let digit = 11

while(digit>1){
    digit--
    // console.log(digit);
}

//Activity 3: Do..while loop
//Task 5: print 1-5

let numb = 0
do {
    numb++
    // console.log(numb);
} while (numb<5);

//Task 6: Factorial of number

let Factorial = 1
let numberr = 4
do {
    Factorial *= numberr
    numberr--
} while (numberr>1);

console.log(`Factorial of 4 is`,Factorial);

//Activity 4: Nested Loops
//Task 7: Print Right-Angled Triagle


for (let i = 0; i <= 5; i++) {
    let str = ""
    for(let j = 0;j<i; j++){
        str += "*"   
    }
    console.log(str);
}

//Activity 5: Loop control Statements
//Task 8: Print 1-10, but skip 5 (Using Continue)

for (let i = 1; i <= 10; i++) {
  if(i == 5) continue
  console.log(i);
}

//Task 9: Print 1-10, stop loop at 7 (Break statement)

for(let i = 1; i<=10; i++){
    if(i >= 7) break
    console.log(i);
}