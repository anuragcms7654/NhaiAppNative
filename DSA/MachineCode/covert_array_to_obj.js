const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

const obj = {};

arr.forEach((curr) => {
  obj[curr.id] = curr;
});

console.log(obj);