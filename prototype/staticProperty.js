class User{
    constructor(username){
        this.username = username
    }

    printUsername(){
        console.log(`Username : ${this.usernames}`)
    }

    static createUniqueId(){
        return `123`
    }
}

const abc = new User("abc")
// console.log(abc.createUniqueId())  // not accessible due to static

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const xyz = new Teacher("xyz", "xyz@gmail.com")
// console.log(xyz.createUniqueId())  // not accessible due to static 