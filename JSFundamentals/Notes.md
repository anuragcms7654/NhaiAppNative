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

