// Count set bits (Number of 1s in binary representation)
// Uses Brian Kernighan's Algorithm (n & (n-1)) — very common bit manipulation question.

// Count set bits (number of 1s in the binary representation)
//
// Brian Kernighan's Algorithm:
// n & (n - 1) removes the rightmost set bit (1) from n.
//
// Example:
// 13 = 1101
// 12 = 1100
//
//   1101
// & 1100
// ------
//   1100
//
// One '1' is removed in each iteration.
// So, the number of iterations = number of set bits.

function countSetBits(n) {
   let count = 0;

   while (n > 0) {
      n = n & (n - 1);
      count++;
   }

   return count;
}

console.log(countSetBits(13)); // 3 → 1101
console.log(countSetBits(7));  // 3 → 111
console.log(countSetBits(8));  // 1 → 1000