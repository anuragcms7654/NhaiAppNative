const userss = [
   { name: "Alice", age: 25 },
   { name: "Bob", age: 30 },
   { name: "Carol", age: 25 },
   { name: "Alice", age: 26 },
   { name: "Eve", age: 25 },
]

const filterDupsByKey = (lists) => {
   const obj = {}
   const result = []
   for (let i of lists) {
      let keys = Object.values(i).join('').split('').sort().join('');
      // keys.sort
      if (!obj.hasOwnProperty(keys)) {
         obj[keys] = 1;
         result.push(i);
      }
   }
   console.log(obj);

   return result
}

console.log(filterDupsByKey(userss));



