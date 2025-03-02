// Immediately Invoked Function Expressions (IIFE)
// Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.

// named IIFE
(function one(){
    console.log(`Function one`)
})(); // ; --> to end the code 

// unnamed IIFE
( (name) => {
    console.log(`Function Two ${name}`)
})("ABC")

// ()()  --> 1st parenthesis for function declaration and 2nd is for execution