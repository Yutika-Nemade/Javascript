const User = {
    _email: "abc@gmail.com",
    _password: "abc123",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const newUser = Object.create(User)
console.log(newUser.email)