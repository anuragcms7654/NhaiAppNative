console.log([] + []); // "" empty string as []?.toString() gives "", and type coersion occurs
console.log([] + {});
console.log({} + []);


let a = {};
let b = a;
b.x = 10;
console.log(a.x);

setTimeout(() => console.log(1), 0);
Promise.resolve().then(() => console.log(2));
console.log(3);
