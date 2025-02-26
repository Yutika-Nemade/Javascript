let score = "33abc"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

/* passed value => converted value
 "33"  => 33
 "33abc" => NaN
 null => 0
 undefined => NaN
 true => 1; false => 0
*/ 

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

/* passed value => converted value
 1 => true
 0 => false
 "" => false
 " " => true
 "abc" => true
 35 => true
*/

let someNumber = 36

let StringNumber = String(someNumber)
console.log(typeof StringNumber)  // output: string
console.log(StringNumber) // output: 36