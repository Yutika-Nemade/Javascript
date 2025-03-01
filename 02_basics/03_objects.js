// singleton object --> created with the help of constructor
// object constructor
// object.create

const user = new Object()

user.id = 1001
user.name = "ABC"
user.isLoggedIn = false

console.log(user)

// nested object
const anotheruser = {
    email : "abc123@gmail.com",
    fullname : {
        userfullname :{
            fname : "ABC",
            lname : "XYZ"
        }
    }
}

console.log(anotheruser.fullname) // { userfullname: { fname: 'ABC', lname: 'XYZ' } }
console.log(anotheruser.fullname.userfullname) // { fname: 'ABC', lname: 'XYZ' }
// to access nested object
console.log(anotheruser.fullname.userfullname.lname) // XYZ

// to combine objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// right way to merge objects
const mergedObj1 = Object.assign(obj1, obj2) // here the obj1 will act as target and merged all elements into obj1
const mergedObj2 = Object.assign({},obj1, obj2) // here the {} will be target and all objects gets stored into it

console.log(mergedObj1) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(mergedObj2) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// simplest way to merge objects
const combinedObj = {...obj1, ...obj2}
console.log(combinedObj) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


// to access data from database
const dbuser = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
    {
        id: 4,
        email: "d@gmail.com"
    }
]

console.log(dbuser[1].email) // b@gmail.com

// to get all keys of a object
console.log(Object.keys(user)) // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(user)) // [ 1001, 'ABC', false ]
console.log(Object.entries(user)) // [ [ 'id', 1001 ], [ 'name', 'ABC' ], [ 'isLoggedIn', false ] ]

console.log(user.hasOwnProperty('id'))

// Object destructuring
const course = {
    courseID : 101,
    courseName : "Javascript",
    price : 9999
}

const {courseName} = course  // object destructuring
console.log(courseName) // Javascript

const {courseName: name} = course
console.log(name) // Javascript

// API
// JSON - javascript object notation
// {
//     "name":"abc"
//     "id":123
// }

// another form of api
[
    {},
    {},
    {}
]