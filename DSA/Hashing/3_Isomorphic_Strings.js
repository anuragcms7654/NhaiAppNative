const a = "paper"
const b = "title"


const checkIsomorphic = (str1, str2) => {
   if (str1.length !== str2.length) {
      return false;
   }
   const obj = {};
   const obj2 = {};
   for (let i = 0; i < str1.length; i++) {
      if (str1[i] in obj) {
         if (obj[str1[i]] !== str2[i]) {
            return false;
         }
      } else if (str2[i] in obj2) {
         if (obj[str2[i]] !== str1[i]) {
            return false
         }
      } else {
         obj[str1[i]] = str2[i]
         obj2[str2[i]] = str1[i]
      }
   }

   return true
}

console.log(checkIsomorphic('paper', 'title'));     // true

console.log(checkIsomorphic('foo', 'bar'));         // false

console.log(checkIsomorphic('badc', 'baba'));       // false

console.log(checkIsomorphic('egg', 'add'));         // true

console.log(checkIsomorphic('abcd', 'aaaa'));       // false

console.log(checkIsomorphic('abcabc', 'xyzxyz'));   // true

console.log(checkIsomorphic('abcabc', 'xyzzxy'));   // false

console.log(checkIsomorphic('aabbcc', 'xxyyzz'));   // true

console.log(checkIsomorphic('aabbcc', 'xyzxyz'));   // false

console.log(checkIsomorphic('abcdefghijklmnopqrstuvwxyz', 'bcdefghijklmnopqrstuvwxyza')); // true

