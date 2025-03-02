// if 
// if block executes when the condition is true and will not execute if condition is false

//operators
// <, >, <=, >=, ==, !=, ===, !==
// == checks the value and === checks the value as well as the datatype

let age = 20
if(age > 18){
    console.log("Adult")
}else{
    console.log("Kid")
}

// short-hand notation
// implicit scope
const balance = 1000
if(balance > 500) console.log("Success")

// if(balance > 500) console.log("Success"), console.log("Success2") // not a good practice     

// Nested condition
if(balance < 500){
    console.log("Less than 500")
}else if(balance < 750){
    console.log("Less than 750")
}else if(balance < 1000){
    console.log("Less than 1000")
}else{
    console.log("More than 1000")
}


const userLoggedIn = true
const debitCard = true

if(userLoggedIn && debitCard){
    console.log("Allowed")
}

const loggedInFromGoogle = true
const loggedInFromEmail = false

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Allowed")
}


// Nullish Coalescing Operator (??) 
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1
val1 = 5 ?? 10
console.log(val1) // 5
val1 = null ?? 10
console.log(val1) // 10
val1 = undefined ?? 10
console.log(val1) // 10
val1 = null ?? undefined
console.log(val1) // undefined
val1 = undefined ?? null
console.log(val1) // null
val1 = null ?? 10 ?? 20
console.log(val1) // 10


// Ternary operator
// condition ? true : false
const price = 200
price >= 100 ? console.log("greater than 100") : console.log("Less than 100")