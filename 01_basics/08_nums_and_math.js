const score = 300
console.log(score) // 300

const balance = new Number(1000)
console.log(balance) // [Number: 1000]

// to convert number to string. If the number is converted into string then string methods can be used
console.log(balance.toString())  // 1000
console.log(balance.toString().length) // 4

// toFixed --> for setting precision of a value
console.log(balance.toFixed(2)) // 1000.00

// toPrecision --> to get the precise value
const otherNumber = 2345.87684

console.log(otherNumber.toPrecision(5)) // 2345.9
console.log(otherNumber.toPrecision(4)) // 2346
console.log(otherNumber.toPrecision(2)) // 2.3e+3

// toLocaleString --> to get value in readable format; 
const newNumber = 10000000

console.log(newNumber.toLocaleString()) // 1,00,00,000  --> indian standard
console.log(newNumber.toLocaleString('en-US')) // 10,000,000

console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991


// ************************** MATHS **********************

console.log(Math) // Object [Math] {}
console.log(Math.abs(-354)) // 354
console.log(Math.abs(354)) // 354

console.log(Math.round(657.87)) // 658
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.8)) // 4
console.log(Math.min(35,45,23,10)) // 10
console.log(Math.max(35,45,23,10)) // 45

console.log(Math.random()) // will always get a random value between 0 to 1

console.log((Math.random()*10) + 1) // to get values between 1 to 10.. added 1 to avoid 0 value

//to get random number between two values
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // this will always give the value between min and max