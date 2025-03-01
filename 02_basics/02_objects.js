// non-singleton object
// object literals
const mySym = Symbol()

const user = {
    name: "ABC",
    "full name" : "ABC XYZ",
    [mySym] : "Key1",  // to use the created symbol in object
    age: 20,
    email: "abc@gmail.com",
    isLoggedIn : true
}

console.log(user) // to get the object

// to access the values of object
console.log(user.email) // abc@gmail.com
console.log(user["email"]) // abc@gmail.com
console.log(user["full name"])  // only this method is allowed, the value will not be accessible using user.full name
console.log(user[mySym]) // key1  to access symbol datatype we need to use user[mySym] its not accessible using user.mySym

// to change the value of object
user.email = "abcxyz@gmail.com"

// to lock the object so no one can modify it
//Object.freeze(user)

// to use function in object
user.greeting = function(){
    console.log("Hello User")
}

console.log(user.greeting) // [Function (anonymous)]
console.log(user.greeting()) /* Hello User
undefined */

// user.greeting gives the reference but doesn't execute
// user.greeting() executes the function

// this keyword --> to refer the same object 
user.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`)
}

console.log(user.greetingTwo())