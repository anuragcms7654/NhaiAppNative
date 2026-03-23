const arrayy = [1,7,9,10,11,13,16,19,40,82];

const binaryIterative = (arr, target) => {
   let n = arr.length - 1;
   let low = 0;
   let high = n - 1;
   while (low <= high){
      mid = Math.trunc((low+high)/2);
      if (arr[mid] === target){
         return mid;
      } else if (target < arr[mid]){
         high = mid-1
      } else {
         low = mid + 1
      }
   }

}

console.log(binaryIterative(arrayy, 9))


const binaryRecursive = (low, high, arr, target) => {
   if (low > high){
      return -1
   }
   let mid = Math.trunc((low+high)/2);
   if (arr[mid] === target){
      return mid;
   } else if (target < arr[mid]){
      high = mid-1
   } else {
      low = mid + 1
   }

   return binaryRecursive(low, high, mid, target)
}

console.log(binaryRecursive(0, arrayy.length-1, arrayy, 11));