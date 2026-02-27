// Find the intersection of two arraysconst intersectionWithDuplicates = (arr1, arr2) => {
// 1️⃣ Unique Intersection (Most Common)
const intersection = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const result = new Set();

  for (let num of arr2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }

  return [...result];
};

// 2️⃣ Intersection Including Duplicates
const intersectionWithDuplicates = (arr1, arr2) => {
  const map = {};
  const result = [];

  for (let num of arr1) {
    map[num] = (map[num] || 0) + 1;
  }

  for (let num of arr2) {
    if (map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }

  return result;
};

console.log(intersectionWithDuplicates([1, 2, 2, 3], [2, 2]));
// [2,2]


// 2️⃣ Intersection Including Duplicates
const intersectionSorted = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0,
    j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] === arr2[j]) {
      result.push(arr1[i]);
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};
// [2,2]
