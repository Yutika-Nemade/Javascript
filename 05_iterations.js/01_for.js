// for

for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// Nested for loop
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`)
        
    }
}

// for loop to print array
const myArr = [10,20,30,40,50]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element)
}

// break
// The break statement is used to exit a loop when a certain condition is satisfied. It is commonly used when searching for a specific value in an array or when an early exit from a loop is required.
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log(`found 5`)
        break
    }
    console.log(`Value of i is ${i}`)
}

// continue
// The continue statement skips the current iteration of the loop and moves to the next iteration without terminating the loop
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log(`found 5`)
        continue
    }
    console.log(`Value of i is ${i}`)
}