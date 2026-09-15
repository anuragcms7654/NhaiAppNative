// merge two objects deeply

// Example usage:
const obj1 = { a: 1, b: { c: 2, d: 3 } };
const obj2 = { b: { d: 4, e: 5 }, f: 6 };

function mergeDeep(obj1, obj2) {
   let result = { ...obj1 };
   for (let i in obj2) {
      if (result.hasOwnProperty(i)) {
         if (
            typeof result[i] === "object" &&
            result[i] !== null &&
            typeof obj2[i] === "object" &&
            obj2[i] !== null
         ) {
            result[i] = mergeDeep(result[i], obj2[i])
         } else {
            result[i] = obj2[i]
         }
      } else {
         result[i] = obj2[i];
      }
   }
   return result
}
console.log(mergeDeep(obj1, obj2)); // { a: 1, b: { c: 2, d: 4, e: 5 }, f: 6 }
