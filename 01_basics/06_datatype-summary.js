// Data categorization is based on how it is stored and access in memory 
// primitive and non-primitive or reference type

// primitive ( Call by value )
// 7 types: String, Number, Boolean, null, undefined, Symbol, Bigint

let str1 = "Hello"
let value1 = 23
let value2 = 2465.78 //number
let isLoggedIn = true
let temp = null
let age
const id = Symbol("123")
const otherId = Symbol("123")

console.log(id == otherId) // false
console.log(id === otherId) // false

const bigNumber = 3624932942838n

// Reference/Non-primitive ( Call by reference)
// Array, Objects, Functions

// Array
const fruits = ["Apple", "Mango", "Orange"]

// Object
let myObject = {
    name: "ABC",
    age: 23
}

// function
const myFunction = function(){
    console.log("Hello World")
}

// to get the datatype of variable
console.log(typeof bigNumber)
console.log(typeof null) // object
console.log(typeof myFunction) // gives function but its function object
console.log(typeof myObject)
console.log(typeof fruits)
console.log(typeof id)

// statically typed languages:-  the data type of a variable is known at the compile time which means the programmer has to specify the data type of a variable at the time of its declaration, eg. C, C++, Java
// dynamically types languages:- These are the languages that do not require any pre-defined data type for any variable as it is interpreted at runtime by the machine itself. In these languages, interpreters assign the data type to a variable at runtime depending on its value. eg. Javascript, python, Ruby

