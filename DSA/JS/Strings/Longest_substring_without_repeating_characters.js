let str = "abcabcbb";

let longestSubstringWithoutRepeatingCharacters = (s) => {
   let left = 0;
   let maxLength = 0;

   const sets = new Set();;

   for (let right = 0; right < s.length; right++) {
      while (sets.has(s[right])) {
         sets.delete(s[left]);
         left++
      }
      sets.add(s[right]);
      let diff = right - left + 1;
      if (diff > maxLength) {
         maxLength = diff;
      }
   }
   return maxLength
}

console.log(longestSubstringWithoutRepeatingCharacters(str));

