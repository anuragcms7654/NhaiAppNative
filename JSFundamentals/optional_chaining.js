const val = {
    x: false
};

console.log(val?.x);
// ?.
// Returns undefined only if the part before ?. is null or undefined.
// Otherwise, it returns the actual value, even if it’s falsy (0, '', false).




// Nullish coalescing (??)
// Provides a default only if the value is null or undefined.

// Ignores other falsy values (0, '', false).
