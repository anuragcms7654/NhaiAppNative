let str11 = "silent"
let str22 = "listen"


const checkAnagram = (str1, str2) => {
   const obj = {};
   for (i of str1) {
      obj[i] ? obj[i] += 1 : obj[i] = 1
   }
   for (i of str2) {
      if (obj[i]) {
         if (obj[i] === 1) {
            delete obj[i]
         } else {
            obj[i] = - 1
         }
      } else {
         return 'not anagrams'
      }
   }
   if (Object.keys(obj).length) {
      return 'not anagram'
   }

   return 'yes both are anagrams'

}

console.log(checkAnagram(str11, str22));