// Solved elegantly using the trick: n > 0 && (n & (n-1)) == 0.

function isPowerOfTwoSum(a, b) {
   const sum = a + b;
   return sum > 0 && (sum & (sum - 1)) === 0;
}

console.log(isPowerOfTwoSum(3, 5));  // true  → 8
console.log(isPowerOfTwoSum(3, 6));  // false → 9

function isPowerOfTwoSumLogVersion(a, b) {
   const sum = a + b;
   return sum > 0 && Math.log2(sum) % 1 === 0;
}