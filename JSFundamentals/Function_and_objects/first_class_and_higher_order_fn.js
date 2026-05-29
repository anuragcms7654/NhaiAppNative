// JavaScript has first-class functions, meaning functions can be assigned to variables, passed as
// arguments, returned from functions, and stored like any other value.


// higher order fn - if func1 takes func2 as argument or returns func2, then func1 is called higher order function and func2 is called callback function
// or


const greet = function (name) {
  return `Hello ${name}`;
};

greet("Anurag");

function execute(fn) {
  fn();
}
execute(() => console.log("Running"));

function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
double(5); // 10


const obj = {
    sayHi() {
      console.log("Hi");
    }
  };
  
  obj.sayHi();
  