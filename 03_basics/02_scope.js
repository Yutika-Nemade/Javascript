// global scope variable -- accessible in local scope (block scope)
// (block scope) local scope variable -- not accessible in global scope

// var does not follow scope, if the value of var variable declared in global scope and local scope, it overwrites the value

let a = 10

if(true){
    let a = 20
    console.log("Block scope:", a)
}

console.log("Global scope:", a)


// scope is different when we use inspect and is different when we declare using node

// In nested function, child function can access the parent variables but parent function can't access child variables
function one(){
    const username = "ABC"

    function two(){
        const web = "www.youtube.com"
        console.log(username)
    }
  //  console.log(web) // throws error

    two()
}

one()

if(true){
    const username = "ABC"
    if(username === "ABC"){
        const web = " youtube"
        console.log(username + web)
    }
    //console.log(web) // throws error
}

// console.log(username) // throws error

// *******************************************

//addOne(7) // can execute the function before its initialization
function addOne(num){
    return num + 1
}

addOne(5)


// Expression
// addTwo(7) // cannot execute before initialization  (hoisting)
const addTwo = function addTwo(num){
    return num + 2
}

addTwo(7)

// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code.