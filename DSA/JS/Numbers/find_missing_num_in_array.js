// Uses sum formula n(n+1)/2  — extremely common in arrays + numbers hybrid questions.
const nums = [1, 2, 3, 4, 5, 7, 8, 9, 10]
const total = (nums[nums.length - 1] * (nums[nums.length - 1] + 1)) / 2;
const sums = nums.reduce((acc, current) => acc += current, 0)
console.log(total - sums);


for (let i = 0; i < nums.length - 1; i++) {
   if (nums[i] + 1 !== nums[i + 1]) {
      console.log(nums[i + 1] - 1);
   }
}

function findMissingNumber(arr, n) {
  let xorSum = 0;

  // XOR all numbers from 1 to n
  for (let i = 1; i <= n; i++) {
    xorSum ^= i;
  }

  // XOR all numbers present in the array
  for (let num of arr) {
    xorSum ^= num;
  }

  return xorSum;
}