const threeSum = (nums) => {
  let result = [];
  const seen = new Set();

  for (let i = 0; i < nums.length - 2; i++) {
    const found = new Set();
    for (let j = i + 1; j < nums.length; j++) {
      const remaining = -(nums[i] + nums[j]);
      if (found.has(remaining)) {
        const triplet = [nums[i], nums[j], remaining].sort((a, b) => a - b);
        const key = triplet.join(",");

        if (!seen.has(key)) {
          seen.add(key);
          result.push(triplet);
        }
      }
      found.add(nums[j]);
    }
  }
  return result;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 0, 0, 0])); // [[0,0,0]]
console.log(threeSum([1, 2, 3]));
