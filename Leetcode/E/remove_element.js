const removeElement = (nums, value) => {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === value) {
      break;
    }
    i++;
  }
  if (i === nums.length) {
    return 0;
  }
  let j = i + 1;
  while (j < nums.length) {
    if (nums[j] !== value) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    }
    j++;
  }
  for (let z = i; z < nums.length; z++) {
    nums[z] = "_";
  }
  return nums;
};

// console.log(removeElement([0,1,2,2,3,0,4,2], 2));
// console.log(removeElement([3,2,2,3], 3));

const removeElement2 = (nums, value) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== value) {
      nums[k] = nums[i];
      k++;
    }
  }
  for (let j = k; j < nums.length; j++) {
    nums[j] = value;
  }
  return nums;
};

console.log(removeElement2([1, 2, 3, 0, 0, 0, 3, 2, 6, 33, 76, 0, 76], 0));
