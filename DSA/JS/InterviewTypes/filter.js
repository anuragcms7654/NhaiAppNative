const arr = [
  { name: "john", age: 25 },
  { name: "Jane", age: 30 },
  { name: "john", age: 25 },
];
// filter unique values

const unique = Array.from(
  new Map(
    arr.map((obj) => [`${obj.name.toLowerCase()}-${obj.age}`, obj])
  ).values()
);
// tc = O(n)

console.log(unique);

const unique2 = arr.filter(
  (obj, index, self) =>
    index ===
    self.findIndex(
      (t) =>
        t.name.toLowerCase() === obj.name.toLowerCase() && t.age === obj.age
    )
);

console.log(unique);

// tc = O(n2)



// if object has more fields
const unique3 = [...new Map(arr.map(v => [JSON.stringify(v), v])).values()];

console.log(unique3);

