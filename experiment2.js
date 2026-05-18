//  with object.freeze(obj), we can not add, modify or delete a any of the property of that object, but it is shallow freeze
// shallow freeze means, we can update the nested properties like if value of any key is again an on=bject we, can change the property of that object

// example

let obj = {
  name: "Anurag",
  roll: 23,
  nested: {
    id: 2,
  },
};

Object.freeze(obj);

obj.name = "aman";
obj.class = "twelve";
obj.nested.id = "twelve";

console.log(obj);
