const str = 'xyxxyx'

const checkpalindrome = (name) => {
   let left = 0, right = name.length - 1;
   while (left < right) {
      if (name[left] !== name[right]) {
         return false;
      }
      left++;
      right--;
   }
   return true
}

console.log(checkpalindrome(str));
