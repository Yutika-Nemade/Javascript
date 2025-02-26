const accountId = 123456 // cannot be changed
let accountEmail = "abc@gmail.com"
var accountpassword = "123456"
accountCity = "Mumbai"
let accountState;  // if just declared the variable without assigning any value, it will print undefined as the value of variable

// accountId = 467935635 // not allowed
accountEmail = "xyz@gmail.com"
accountpassword = "94494892"
accountCity = "Pune"

// to print one value
console.log(accountId)

// to print all values in tabular format
console.table([accountId, accountEmail, accountpassword, accountCity, accountState])

/*
prefer not to use var
because of block scope and function scope
use const and let
*/