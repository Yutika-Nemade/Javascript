// array specific loop
// for of
// ["", "", ""] --> array of strings
// [{}, {}, {}] --> array of objects

const arr = [10,20,30,40,50]
for (const i of arr) {
    console.log(i)
}

const str = "Hello World"
for (const i of str){
    if(i == " "){
        continue
    }
    console.log(i)
}


// Maps --> stores values in key-value pairs format, contains only unique values

const map = new Map()
map.set("INR", "India")
map.set("USD", "USA")
map.set("JPY", "Japan")

console.log(map) // Map(3) { 'INR' => 'India', 'USD' => 'USA', 'JPY' => 'Japan' }

for (const [key, value] of map) {
    console.log(key + ':' + value)
}

// Object
const myObject = {
    username: "ABC",
    email : "abc@gmail.com",
}

// can't iterate object using for of loop
// for (const i of myObject) {
//     console.log(i.key)
// }