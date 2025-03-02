const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.map( (num) => num + 10)

// chaining
const newNums = myNums.map( (num) => num + 10).filter( (num) => num > 15 )
console.log(newNums)  // [ 16, 17, 18, 19, 20 ]

const newNums2 = myNums.map( (num) => num * 5 ).map( (num) => num + 10 )
console.log(newNums2) // [15, 20, 25, 30, 35,40, 45, 50, 55, 60]

const newNums3 = myNums.map( (num) => num * 5 ).map( (num) => num + 10 ).filter((num) => num > 35 )
console.log(newNums3) // [ 40, 45, 50, 55, 60 ]