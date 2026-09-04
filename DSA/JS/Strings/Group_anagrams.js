// group anagrams

const wordss = ["eat", "tea", "tan", "ate", "nat", "bat"];

const groupAnagram = (words) => {
   const groups = {};
   for (word of words) {
      const obj = {};
      for (let j of word) {
         obj[j] ? obj[j] += 1 : obj[j] = 1
      }
      let key = '';
      for (let i = 97; i <= 122; i++) {
         const char = String.fromCharCode(i);
         if (obj[char]) {
            key += char + obj[char];
         }
      }
      if (!groups[key]) {
         groups[key] = [];
      }
      groups[key].push(word);
   }
   return groups;
};

console.log(groupAnagram(wordss));
