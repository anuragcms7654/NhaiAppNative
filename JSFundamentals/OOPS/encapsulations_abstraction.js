// encapsulation

// Encapsulation hides data
// Bundling data + methods inside a class/object
// Restricting direct access to data
class User {
  #balance = 6000;
  name = "anurag";
  constructor(sex) {
    this.sex = sex;
  }
  getName() {
    return this.name;
  }
  updateBalance(amount) {
    this.#balance += amount;
  }
}

const user1 = new User("male");
console.log(user1.getName());


// abstraction
// Hiding internal implementation details

class Car {
  startEngine() {
    console.log("Engine started");
  }
}

const car = new Car();
car.startEngine(); // user doesn't know internal logic
