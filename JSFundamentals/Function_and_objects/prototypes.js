// Example 2: Adding method to prototype
function Person(name, age) {
  this.name = name;
  this.age = age;
};

// Add method to prototype
Person.prototype.greet = function() {
  console.log(`Hi, I'm ${this.name}`);
};

const p1 = new Person("Rahul", 25);
p1.greet(); // Hi, I'm Rahul


// Prototypal Inheritance

// When an object inherits properties and methods from another object via its prototype, 
// it’s called prototypal inheritance.

// Example 1: Object.create
const animal = {
  eats: true,
  walk() { console.log("Animal walks"); }
};

const rabbit = Object.create(animal);
rabbit.name = "Bunny";

console.log(rabbit.eats); // true
rabbit.walk();             // Animal walks

// Example 2: Function constructor + prototype
function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.drive = function() {
  console.log(`${this.type} is driving`);
};

const car = new Vehicle("Car");
const bike = new Vehicle("Bike");

car.drive(); // Car is driving
bike.drive(); // Bike is driving


// Prototype in ES6 Classes

// Classes in JS are syntactic sugar over prototypal inheritance.

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hi, I'm " + this.name);
  }
}

const p = new Person("Rahul");
p.greet(); // Hi, I'm Rahul

console.log(Object.getPrototypeOf(p) === Person.prototype); // true


// Key Interview Points

// Every object has a hidden prototype.

// Methods on constructor’s prototype are shared among all instances.

// Object.create(proto) → creates object with specified prototype.

// __proto__ or Object.getPrototypeOf(obj) → shows prototype.

// Prototype chain: JS looks for properties up the chain until null.

// Classes in ES6 → syntactic sugar over function + prototype.