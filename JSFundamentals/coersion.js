// Implicit coercion (automatic by JS)
// Explicit coercion (manual by developer)


// Example 1: Number + String → String
console.log(5 + "5"); // "55"

// Example 2: Boolean Context
if ("hello") console.log("truthy"); // prints "truthy"
if (0) console.log("falsy");       // skipped


// == and coercion

console.log(null == 0);    // false ❌
console.log(undefined == 0); // false ❌
console.log(null == undefined); // true ✅


// String + Number
console.log("5" + 3); // "53"
console.log("5" * 2) // 10

console.log("5" - 3); // 2

// Boolean Coercion in Math
console.log(true + true); // 2  (true → 1)
console.log(false + 5);   // 5  (false → 0)


// Array / Object Coercion
console.log([] + []);      // "" (empty string)
console.log([] + {});      // "[object Object]"
console.log({} + []);      // 0 ❌ (block vs expression ambiguity)
console.log([1] + 1);      // "11"




// Memory Aid / Trick

// + operator → prefers strings

// -, *, / → prefers numbers

// if or while → coerces to Boolean

// == → coerces types for comparison