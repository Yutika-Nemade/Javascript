let value = 10
let negValue = -value

console.log(negValue)  // output: -10

/* Basic operations
console.log(2+3)
console.log(2-5)
console.log(2*7)
console.log(2**5)
console.log(12/6)
console.log(5%3)
*/

let str1 = "Hello"
let str2 = " World"

let str3 = str1 + str2
console.log(str3) // output: Hello World

console.log("1" + 2) // output: 12
console.log(1 + "2") // output: 12
console.log("1" + 2 + 3) // output: 123
console.log(1 + 4 + "2") // output: 52

console.log(true) // output: true
console.log(+true) // output: 1
console.log(+"") // output: 0
// console.log(true+) // throws error

// prefix and postfix
let counter = 5
console.log(++counter)
console.log(counter++)

// (++x)prefix --> Increments first, then returns the updated value
// (x++)postfix --> Returns the original value first, then increments