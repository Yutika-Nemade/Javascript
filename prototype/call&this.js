// when the function inside function is there, then this will refer to the global execution context
// in broswer --> this will refer to window object but in node environment it will refer to empty object i.e. {}

function setUsername(username){
    this.username = username
    console.log("Called")
}

function createUser(username, email, password){
    // setUsername(username) // if we write this the value of variable will be vanished once the execution context of function completed
    // setUsername.call(username)  // same as above line
    //setUsername.call(this, username)  // by using this we can access the current execution context
    this.email = email
    this.password = password
}

const abc = new createUser("ABC", "abc@gmail.com","123")
console.log(abc)
