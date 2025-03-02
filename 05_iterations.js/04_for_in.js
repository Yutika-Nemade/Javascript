const myObject = {
    js : "Javascript",
    py : "Python",
    java : "Java",
    ts : "Typescript"
}

for (const key in myObject) {
  //  console.log(key) // to access the keys of object
  //  console.log(myObject[key])  // to access the values of object
    console.log(`${key} is extension for ${myObject[key]}`)
}

// Array

const arr = ["Java", "Python", "Javascript"]

for (const key in arr) {
    console.log(key) // to get indexes
    console.log(arr[key]) // to get the values
}

// Map

const map = new Map()
map.set("INR", "India")
map.set("USD", "USA")
map.set("JPY", "Japan")

// can't iterate map using for in loop
// for (const key in map) {
//     console.log(key)
// }