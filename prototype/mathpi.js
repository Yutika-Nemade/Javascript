console.log(Math.PI)
Math.PI = 5
console.log(Math.PI)

// We can not overwrite the value of PI because the hidden property like writeable is set to false 
const desc = Object.getOwnPropertyDescriptor(Math, "PI")  // this function gives all the hidden properties
console.log(desc) /* {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  } */

 

const user = {
    username: 'abc',
    password: 123,
    isLoggedIn: true,

    buyProduct: function(){
        console.log("Bought product")
    }

}        

console.log(Object.getOwnPropertyDescriptor(user, "username"))

Object.defineProperty(user, "username",{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user, "username"))

for (let [key, value] of Object.entries(user)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}