
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Eg. Cryptographic operations, file system, network

// create promise
const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network calls
    setTimeout(function(){
        console.log("Async task is completed")
        resolve() // to connect promise to then 
    }, 1000)
    
})


// consume promise
promiseOne.then(function(){
    console.log("Promise consumed")
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("Async task completed")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve({username:"abc", email:"abc@example.com"})
    }, 1000);
})

promiseThree.then(function(user){
    console.log(user)
})


promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "ABCXYZ", password: "123456"})
        }else{
            reject('ERROR! Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log("The promise is either resolved or rejected"))



promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "123456"})
        }else{
            reject('ERROR! JS went wrong')
        }
    },1000)
})


async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()


// async function getAllData() {
//     try {
//         const response = await fetch('https://api.github.com/users/yutika-nemade')
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }

// getAllData()

fetch('https://api.github.com/users/yutika-nemade')
.then((response)=>{
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))


// fetch operation executes first as the objects/callbacks get stored in micro task queue/priority queue