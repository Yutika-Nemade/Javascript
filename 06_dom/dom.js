//DOM - Document Object Model

//access window in inspect --> console
console.log(windows)

//access document in inspect --> console
console.log(window.document)
console.log(document)
console.dir(document) // -- for detail info

//can access objects using
console.log(document.links)
console.log(document.baseURI)

//HTMLcollection is not an array but some functionalities works 
console.log(document.links[2])

// DOM selector
document.getElementById('')
document.getElementById('').innerHTML="<h1>DOM Manipulation</h1>"
