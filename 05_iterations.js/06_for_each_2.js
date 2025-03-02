const arr = ["Java", "Python", "Javascript"]

// for each loop does not return values

// const values = arr.forEach( function(val) {
//     console.log(val)
//     return
// })

// console.log(values) // undefined


// filter

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 5 )
console.log(newNums)

// const newNums = myNums.filter( (num) => {
//     return num > 5 
// })
// console.log(newNums)

//with foreach
const newNums2 = []

myNums.forEach( (num) => {
    if(num > 5){
        newNums2.push(num)
    }
} )

console.log(newNums2)


// Practice

const books = [
    { title: "Book 1", genre: "History" , publish: 1978},
    { title: "Book 2", genre: "Fiction" , publish: 1985},
    { title: "Book 3", genre: "Non-Fiction" , publish: 1989},
    { title: "Book 4", genre: "Science" , publish: 1972},
    { title: "Book 5", genre: "History" , publish: 2001},
    { title: "Book 6", genre: "Fiction" , publish: 1999},
    { title: "Book 7", genre: "Comedy" , publish: 1967},
    { title: "Book 8", genre: "Science" , publish: 2007},
    { title: "Book 9", genre: "Non-Fiction" , publish: 2000,},
    { title: "Book 10", genre: "Fiction" , publish: 1987},
]


const userbooks = books.filter( (bk) => bk.genre === "Fiction")
console.log(userbooks)

const userbooks1 = books.filter( (bk) => bk.publish >= 1995 && bk.genre === "Fiction")
console.log(userbooks1)