// 1. Comparison between null and undefined

let a;
let b = null;

console.log(a == b); // true  ✅
console.log(a === b); // false ❌

// NaN weirdness
// NaN is the only value not equal to itself
// Use Number.isNaN() to check safely
console.log(NaN == NaN); // false ❌
console.log(NaN === NaN); // false ❌
console.log(Number.isNaN(NaN)); // true ✅

// Tricky boolean conversions
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

// Arithmetic confusion
let x;
console.log(x + 5); // NaN (undefined + number)
console.log(null + 5); // 5   (null treated as 0)
console.log(NaN + 5); // NaN

//  Array Traps
const arr = [null, undefined, NaN];

console.log(arr.filter(Boolean)); // []
console.log(arr.map((x) => x == undefined)); // [true, true, false]



// Function default parameters
function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet(undefined); // "Hello Guest" ✅
greet(null); // "Hello null"  ❌ null is a value
