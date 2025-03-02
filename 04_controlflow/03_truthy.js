// truthy value --> when we assume the value is true

const userEmail = "abc@gmail.com"

if(userEmail){
    console.log("Got email")
}else{
    console.log("Please enter email")
}


// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// truthy values
// true, "0", "false", " ", [], {}, function(){}

// to check whether the array is empty or not
const arr = []

if(arr.length === 0){
    console.log("Array is empty")
}

// to check whether the array is empty or not
const obj = {}

if(Object.keys(obj).length === 0){
    console.log("Object is empty")
}

// false == 0 --> true
// false == '' --> true
// 0 == '' --> true