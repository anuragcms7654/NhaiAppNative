# What is Hoisting?
-- Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their scope during compilation. For example, var and function declarations are hoisted and accessible before their actual line in code, but let and const are hoisted only in memory (temporal dead zone) and cannot be accessed before initialization.

It’s important to understand this to avoid bugs related to undefined values or reference errors.

# Diff b/w == and ===
-- '==' it is the loose equality operator, it check the value after the type coersion but '===' checks values and types both

# what is scope? 
-- Scope defines where a variable is accessible in JavaScript. Global scope means variables are accessible everywhere, function scope means variables are accessible only inside a function, and block scope means variables are accessible only inside a block {} like if or for. JavaScript uses scope to control variable visibility and avoid naming conflicts.


# What are Closures? 
-- Closure means a function remembers variables from its outer scope even after the outer function has finished executing.

# Var, Let and Const? 
-- var is function scoped but let and const are block scoped.
-- var is hoisted, and can be redeclared and updated, let is hoisted but not initialized, it is in temporal dead zone, also let cannot be redeclared in the same scope.
-- const cannnot be redeclared and updated, also it is not hoisted.

# Call, apply and bind
-- call() invokes a function immediately with a specified this and arguments passed individually.
-- apply() invokes a function immediately with a specified this and arguments passed as an array.
-- bind() returns a new function with this (and optional arguments) permanently bound, to be executed later.

# Function composition
-- Function composition is a technique where multiple functions are combined so that the output of one becomes the input of the next.

# Difference between Object.freeze() and Object.seal()
-- Object.freeze() - you cannot change its properties or add/remove properties.
-- Object.seal() - you can modify existing properties but cannot add or delete properties.

# Difference between "require" and "import"
-- In plain Node.js (no bundler), both require and import will load the full file from disk.
-- So in React/React Native:
----- require → pulls entire module, no tree shaking.
----- import → allows tree shaking, smaller JS bundle, lighter APK / IPA in React Native.

# Template Literals
-- const str = "Line 1\nLine 2\nLine 3";
-- with template literals - 
const str = `Line 1
Line 2
Line 3`;

# What is Destructuring?
-- Destructuring is a syntax to extract values from arrays or objects and assign them to variables in a concise way.
-- Object Destructuring
const user = { name: "Alice", address: { city: "Delhi", pin: 110001 } };
const { address: { city, pin } } = user;

-- Array Destructuring
const [x = 1, y = 2, z = 3, w = 4] = [10, 20];
console.log(x, y, z, w); // 10 20 3 4
// Rest pattern
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

Swap variables using array destructuring
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2 1