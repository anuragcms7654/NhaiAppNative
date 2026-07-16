const userss = [
   { name: "Alice", age: 25 },
   { name: "Bob", age: 30 },
   { name: "Carol", age: 25 },
   { name: "Alice" },
   { name: "Eve", age: 25 },
]

const groupByKey = (lists, key) => {
   return lists.reduce((acc, current) => {
      if (!current.hasOwnProperty(key)) {
         return acc
      }
      if (acc.hasOwnProperty(current[key])) {
         acc[current[key]].push(current)
      } else {
         acc[current[key]] = [current]
      }
      return acc
   }, {})
}

console.log(groupByKey(userss, 'age'))