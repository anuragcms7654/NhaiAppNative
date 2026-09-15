const obj = { a: 1, b: { c: 2 } };

// method 1
const deepCopy1 = JSON.parse(JSON.stringify(obj));

console.log(deepCopy1);

// method 2 - structuredClone

console.log(structuredClone(obj));

// method 3 - recursion

function deepCopyRec(obj) {
  if (obj === null || typeof obj !== obj) {
    return obj;
  }
  const copy = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    copy[key] = deepCopyRec(obj[key]);
  }

  return copy;
}

const dups = deepCopyRec(obj);
console.log(dups);
