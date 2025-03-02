function addNumbers(){
    console.log(10+20)
}

addNumbers() // this will execute the function
addNumbers // this only takes the reference of the function


// parameters are declared while writing function definition
// arguments are passed while calling the function

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2)
// }

// addTwoNumbers(3,26) // 29
// addTwoNumbers(3, "4") // 34

// const result = addTwoNumbers(5,10)
// console.log("Result : ",result) // Result :  undefined (because the function not returning anything)


function addTwoNumbers(num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(10,30)
console.log("result :", result) // result :  40

// the function will not execute anything written after the return statement

function userMsg(username){   // to give default value function userMsg(username = 'Ram')
    return `${username} logged in!`
}

console.log(userMsg()) // undefined logged in!
console.log(userMsg("ABCXYZ")) // ABCXYZ logged in!


// to pass multiple parameters to a function use rest operator
function calculatePrice(...num1){
    return num1
}

console.log(calculatePrice(100,200,300,400)) // [ 100, 200, 300, 400 ]

function calculatePrice2(value1, value2, ...value3){
    return value3
}

console.log(calculatePrice2(100,200,300,400)) // [ 300, 400 ] (because 100 and 200 will be treated as value1 and value2 resp)

// pass object to function
const user = {
    username: "ABC",
    age: 20
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`)
}

handleObject(user) // Username is ABC and age is 20

handleObject({
    username: "xyz",
    age: 23
})   // Username is xyz and age is 23


// pass array to function
const newArr = [10,20,30,40]

function returnSecondVal(Array){
    return Array[1]
}

console.log(returnSecondVal(newArr)) // 20
console.log(returnSecondVal([50,354,234,2387]))  // 354



