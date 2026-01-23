// shallow copy
// Spread operator
const obj = { a: 1, b: { c: 2 } };
const clone1 = { ...obj };
clone1.b = 42;
console.log(obj.b); // { c: 2 }

// Object.assign
const clone2 = Object.assign({}, obj);
// Shallow copy is enough if only top-level properties change.

// deep copy using JSON methods
const clone3 = JSON.parse(JSON.stringify(obj));

// structuredClone
const clone4 = structuredClone(obj);
// Supports: Date Map Set circular references

// manual deep copy
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    copy[key] = deepClone(obj[key]);
  }
  return copy;
}
