const array = [2, 4, 6, 7, 8, 11, 18, 19];

const binarySearchFuniterative = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  let mid;

  while (low <= high) {
    mid = Math.trunc((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

console.log(binarySearchFuniterative(array, 9));

const binarySearchRecursive = (arr, low, high, target) => {
  mid = Math.trunc((low + high) / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] < target) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
  if (low > high) {
    return -1;
  }
  return binarySearchRecursive(arr, low, high, target);
};

console.log(binarySearchRecursive(array, 0, array.length-1, 11));


// tc = log base 2 N

