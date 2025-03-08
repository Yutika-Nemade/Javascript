document.getElementById('heading')

document.getElementById('heading').id  // 'heading'

document.getElementById('heading').class   // undefined
// We get class as undefined because js treats class as className

document.getElementById('heading').className // 'heading'

document.getElementById('heading').getAttribute('id')  // 'heading'

document.getElementById('heading').getAttribute('class')  // 'heading'

document.getElementById('heading').setAttribute('class', 'test')   // overwrites the existing class name

document.getElementById('heading').setAttribute('class', 'test heading')

// to store element in variable
const title = document.getElementById('heading')
// can use this variable for further manipulations

title.style.backgroundColor='red'
title.style.padding = "20px"

// to get content 
title.textContent   // 'DOM Learning Test test'
// testContent gives all the content that is present inside the element

title.innerHTML    // 'DOM Learning <span style="display: none;">Test test</span>'
// gives the html tag content


title.innerText  // 'DOM Learning'
// innerText only gives the content that is visible


// to change HTML 
document.getElementById('heading').innerHTML="<h1>DOM Manipulation</h1>"


// Query selector --> supports all CSS selectors

document.querySelector('h2') // will give 1st h2

document.querySelectorAll('h2') // NodeList(3) [h2, h2, h2] 
// gives all h2

// to access ID
document.querySelector('#heading')

// to access class
document.querySelector('.heading')

// to access input type
document.querySelector('input[type=password]')

document.querySelector('p:first-child')

// to change color of 1st list item of unordered list
const myul = document.querySelector('ul')
const changebg = myul.querySelector('li')
changebg.style.backgroundColor = 'red'

//querySelectorAll
const templist = document.querySelectorAll('li') // will return nodelist of all elements
templist[0].style.color = 'White'   // to access each element

// If there is only one element still we have to specify the index eg. templist[0]

// Use forEach loop for accessing all elements of list
templist.forEach( function(l) {
    l.style.color = "Red"
}
)  

// to use map function convert nodelist to array then use all functions and methods of array

// 
const tempClasslist = document.getElementsByClassName('list-item')
// the above query will return HTMLcollection containing all elements

//to convert HTMLcollection to array
const myConvArray = Array.from(tempClasslist)

myConvArray.forEach( function(li) {
    li.style.color = "orange";
    li.style.backgroundColor = "green"
}
)

