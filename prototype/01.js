// prototype gives access to new keyword, classes and this keyword
// Prototypes are the mechanism by which JavaScript objects inherit features from one another. 
// child --> parent 
// Array --> Object --> null
// String --> Object --> null
// function --> Object --> null
// function works as function as well as object

const { create } = require("domain");

function multiplyBy3(num){
    return num*3
}

multiplyBy3.power = 10

console.log(multiplyBy3(5));  // 15
console.log(multiplyBy3.power) // 10
console.log(multiplyBy3.prototype) // {}


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}

// const abc = createUser('ABC',100)  // this will give error
const abc = new createUser('ABC',100) 
const xyz = createUser('XYZ',80)

abc.printMe()


/* Here's what happens behind scenes when the new keyword is used

A new object is created: the new keyword initiates the creation of a new javascript object

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, javascript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-proimitive value(object, array, function, etc.), the newly created object is returned.

*/