// Object literal
const user = {
    username : "ABC",
    loginCount : 10,
    signedIn : true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this) // will return current object details
    }
}


console.log(user.username)
console.log(user.getUserDetails())
// console.log(this) // will return empty object



// Constructor function -- always gives new copy without affecting original function
// new is the constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this  // if not written then also execute
}


// the below code will overwrite the values  
// const userOne = User("ABC", 10, true)
// const userTwo = User("XYZ", 13, false)
// console.log(userOne)


// to avoid overwriting values -- new keyword will create new instance
const userOne = new User("ABC", 10, true)
const userTwo = new User("XYZ", 13, false)
console.log(userOne)
console.log(userOne.constructor)
console.log(userTwo)

console.log(userOne instanceof User)