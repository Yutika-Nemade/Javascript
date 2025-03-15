class User{
    constructor(username){
        this.username = username
    }

    printUsername(){
        console.log(`Username is ${this.username}`)
    }
}

class Student extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    buyCourse(){
        console.log(`This course is bought by ${this.username}`)
    }
}

const abc = new Student("abc", "abc@gmail.com", 123)
abc.buyCourse()

const abc1 = new User("abc1", "abc1@gmail.com", 1231)
//abc1.buyCourse()  // parent class doesn't have properties of child class

abc1.printUsername()
abc.printUsername() // child class can access the properties or functions of parent class

console.log(abc instanceof Student) // true
console.log(abc instanceof User) // true

console.log(abc1 instanceof User) // true
console.log(abc1 instanceof Student) // false