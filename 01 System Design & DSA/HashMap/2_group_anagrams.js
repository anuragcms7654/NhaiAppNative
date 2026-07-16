const group = ["eat", "tea", "tan", "ate", "nat", "bat"]

const groupAnagrams = (strs) => {
   const maps = new Map();
   for (let str of strs) {
      const key = str.split('').sort().join('');
      if (!maps.has(key)) {
         maps.set(key, []);
      }
      maps.get(key).push(str);
   }
   return Array.from(maps.values());
}

console.log(groupAnagrams(group));

