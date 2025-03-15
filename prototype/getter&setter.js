class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return `${this._email}@gmail.com`;
  }

  set email(value) {
    this._email = value;
  }

  get password() {
    //return `${this.password}123` // this line will give error maximum call stack size exceeded as the main constructor and the getter function trying to access same value
    return `${this._password}123`;
  }

  set password(value) {
    //this.password = value  // this line will give error maximum call stack size exceeded as the main constructor and the getter function trying to access same value
    this._password = value;
  }
}

const newUser = new User("abc", "abcde");
console.log(newUser.email);
console.log(newUser.password);
