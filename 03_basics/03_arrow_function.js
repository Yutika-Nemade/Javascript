// this keyword refers to the current context (current values)

const user = {
    username : "ABC",
    email : "abc@gmail.com",
    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to webpage`)
    }
}

user.welcomeMsg() // ABC, Welcome to webpage
user.username = "XYZ"
user.welcomeMsg() // XYZ, Welcome to webpage

// when we run the console.log(this) in browser, it prints window object as window is the global variable
// when we run the console.log(this) in node, it prints {} (empty) as nothing is defined in the global scope

// this keyword only works in object, does not work in functions

// function newFun(){
//     // let user = "ABC"
//     // console.log(this.user) // undefined
//     console.log(this)
// }

// const newFun = function(){
//     // let user = "ABC"
//     // console.log(this.user) // undefined
// }

const newFun = () => {
    let user = "ABC"
    console.log(this.user) // undefined
    console.log(this) // {}
}

newFun()

// Arrow function

const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(3,7))

// Implicit return
const addTwoNum = (num1, num2) => num1 + num2
// const addTwoNum = (num1, num2) => (num1 + num2)  //can be written like this
console.log(addTwoNum(20,45))