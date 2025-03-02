const arr = ["Java", "Python", "Javascript"]

arr.forEach( function(val) {
    console.log(val)
})

arr.forEach( (val) => console.log(val) )

function print(val){
    console.log(val)
}

arr.forEach(print)

arr.forEach( (val, index, arr) => {
    console.log(val, index, arr)
} )


// iterate array containing objects

const myArr = [
    {
        language: "Java",
        extension : "java"
    },
    {
        language: "Javascript",
        extension : "js"
    },
    {
        language: "Python",
        extension : "py"
    },
    {
        language: "Typescript",
        extension : "ts"
    }
]

myArr.forEach( (item) => {
    console.log(item.language)
} )



