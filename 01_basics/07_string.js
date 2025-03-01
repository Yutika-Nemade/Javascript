const fName = 'ABC'
const lName = 'XYZ'

// to concatenate two strings we can use + or ,
console.log(fName + lName)  // output: ABCXYZ
console.log(fName,lName) // output: ABC XYZ

// string interpolation -- we create placeholders and we can inject variables into this
console.log(`Hello my first name is ${fName} and last name is ${lName}`)

// another way to declare string
const gameName = new String('Sudoku')

console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf('u'))

console.log(gameName.substring(0,3))
// substring function does not allow for negative values, if we put negative indexes it will ignore and will start from 0

console.log(gameName.slice(-6, 3))
// slice function allows for negative indexes

const newString = "     ABC        "
console.log(newString)
console.log(newString.trim())

const url = "https://abc.com/abc%20xyz"
console.log(url.replace('%20', '-'))

console.log(url.includes('w'))

const anotherString = "Split_is_a_string_function"
console.log(anotherString.split('_'))