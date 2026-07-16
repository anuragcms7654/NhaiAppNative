const arr = [23, 2, 4, 6, 7];
let target = 6;

const funcSubArr = (nums, k) => {
   for (let i = 0; i < nums.length; i++) {
      let totalSums = nums[i]
      for (let j = i + 1; j < nums.length; j++) {
         totalSums += nums[j];
         if (k === 0) {
            if (totalSums === 0) return true;
         } else {
            if (totalSums % k === 0) return true;
         }
      }
   }
   return false
}

console.log(funcSubArr([1, 2, 3], 5));
