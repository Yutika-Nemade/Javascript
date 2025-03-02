const myNums = [1,2,3,4,5]

const mySum = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`)
    return acc + currval
}, 0)

console.log(mySum)

const myTotal = myNums.reduce( (acc, currval) => acc + currval, 0)
console.log(myTotal)

const shoppingCart = [
    {course: "JS", price: 999},
    {course: "Java", price: 1999},
    {course: "Python", price: 799},
    {course: "TS", price: 699},
    {course: "HTML", price: 299},
    {course: "CSS", price: 299},
]

const billingAmt = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(billingAmt)