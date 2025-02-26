// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)

console.log("2" > 1) // true, because its converting string into number and then comparing

// while comparing two values, make sure the datatype of two values are same

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true

// in the 1st example, comparison converts null to a number, hence 0 > 0, printing false
// and in 3rd exmaple, 0 >= 0, printing true

console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false

console.log("2" == 2) // true --> check only values
console.log("2" === 2) // false --> check value as well as datatype