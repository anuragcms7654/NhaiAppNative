// Find the intersection of two arrays

const arr = [1, 2, 3, 4, 5]
const n = arr.length;
const result = new Array(n).fill(1);

let prefix = 1;
let suffix = 1;

for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= arr[i]
}
// [ 1, 1, 2, 6, 24 ]
console.log(result);
console.log(prefix);

for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= arr[i];
}

console.log(result);

function productExceptSelf(nums) {
    let result = [];
    for (let i of nums) {
      let product = 1;
      for (let j of nums) {
        if (i !== j) product *= j;
      }
      result.push(product);
    }
    return result;
  }
  
  console.log(productExceptSelf([1, 0, 3, 4])); // [24, 12, 8, 6]






