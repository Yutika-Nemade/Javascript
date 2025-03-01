// array - collection of multiple items under a single variable
// in JS, arrays are resizable, can contain a mix of different datatypes, zero-indexed
// JS arrow-copy operations create shallow copies
// shallow copy of an object is a copy whose properties share the same references. i.e if we change something in copy, it also get reflected in original array
// deep copy of an object is a copy whose properties do not share the same references. i.e if we change something in copy, it doesn't get reflected in original array

// Ways to declare an array
const numbers = [10,20,30,40]
const cars = ['BMW', 'SUV', 'Alto']
const newNumbers = new Array(1,2,3,4,5)

// Array methods
numbers.push(50) // inserts element at the end of the array
numbers.pop() // removes last element from the array
numbers.unshift(90) // inserts elements at the start of the array
numbers.shift() // removes 1st element from the array
//unshift and shift operations are not optimized because the position of all other elements gets changed

console.log(numbers.includes(30)) // if present returns true else returns false
console.log(numbers.indexOf(50)) // if the element is present in array it will give the index of that element if not present then will return -1

console.log(numbers)

const newArr = numbers.join()  // converts the array into string
console.log(newArr) // 10,20,30,40
console.log(typeof newArr) // string

// slice and splice
// splice operation manipulates the original array  
// slice doesn't includes end index but splice includes end index

console.log("A", numbers) //  [ 10, 20, 30, 40 ]

const arr1 = numbers.slice(1,3)
console.log(arr1) //  [ 20, 30 ]
console.log("B", numbers) //  [ 10, 20, 30, 40 ]

const arr2 = numbers.splice(1,3)
console.log("c", numbers) // [ 10 ]
console.log(arr2) //  [ 20, 30, 40 ]


const newArr1 = [10,20,30]
const newArr2 = [5,15,25]

//newArr1.push(newArr2) // inserts 2nd array as a single element in original array
//console.log(newArr1) // [ 10, 20, 30, [ 5, 15, 25 ] ]
//console.log(newArr1[3][2]) // 25

const combinedArr = newArr1.concat(newArr2) // concatenates two or more arrays and returns a new array
console.log(combinedArr) // [ 10, 20, 30, 5, 15, 25 ]


// spread operator --> spreads the array into single element
const newCombinedArr = [...newArr1, ...newArr2]
console.log(newCombinedArr) // [ 10, 20, 30, 5, 15, 25 ]

// flat method returns a single array if nested arrays are present
const nestedArr = [1,2,3,[4,5],6,[7,8, [9,2,3], 10], 20]
const flatArr = nestedArr.flat() // by default is solves upto 1 depth
console.log(flatArr) // [ 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 2, 3 ], 10, 20 ]

const flatArr2 = nestedArr.flat(Infinity)
console.log(flatArr2) /* [
    1, 2, 3, 4, 5,  6,
    7, 8, 9, 2, 3, 10,
   20
 ] */


// convert anything into array
console.log(Array.from("Hello World!"))
/* [
  'H', 'e', 'l', 'l',
  'o', ' ', 'W', 'o',
  'r', 'l', 'd', '!'
] */

console.log(Array.from({name: "ABC"}))   // []; need to specify what needs to be taken for creating an array else will create an empty array

// create array of elements
const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]