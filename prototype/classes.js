// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    return `${this.password}abc`;
  }

  changeCase() {
    return `${this.username.toUpperCase()}`;
  }
}

const abc = new User("abc", "abc@gmail.com", "123");

console.log(abc.encryptPassword());
console.log(abc.changeCase());


// Behind the scene or without class

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeCase = function(){
    return `${this.username.toUpperCase()}`;
}

const xyz = new User("xyz", "xyz@gmail.com", 456)

console.log(xyz.encryptPassword())
console.log(xyz.changeCase())