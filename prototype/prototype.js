

let myUsers = ["abc", "xyz"]

let UserCred = {
    abc: "123",
    xyz: "456",

    getUserPwd: function(){
        console.log(`User pwd is ${this.pwd}`)
    }
}

// when we define properties to object, then all child objects like array, string, etc. can use that property but if we define property to array then that property can not be accessed by object

Object.prototype.name = function(){
    console.log(`name is present in all objects`)
}

Array.prototype.heyName = function(){
    console.log(`Name sayes hello`)
}

UserCred.name()
myUsers.name()
// UserCred.heyName()   // not accessible
myUsers.heyName()

// inheritance

const User = {
    name: "abc",
    email: "abc@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "Hello World     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Hi   ".trueLength()
"Hello".trueLength()