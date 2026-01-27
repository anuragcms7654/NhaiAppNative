function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
add(1)(2)(3); // 6

// const addArrow = (a) => (b) => (c) => a + b + c;
// addArrow(1)(2)(3); // 6

// // Currying using Closures (manual)
// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// const double = multiply(2);
// console.log(double(3)); // 10

// // infinite currying / using recursion
// function sum(a) {
//   return function (b) {
//     if (b === undefined) return a;
//     return sum(a + b);
//   };
// }

// sum(1)(2)(3)(4)(); // 10

// Advanced

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...nextArgs) => curried(...args, ...nextArgs);
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(3); // 6
