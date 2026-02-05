const str = "aaabbc";
const obj = {};
for (let i of str) {
  obj[i] = i in obj ? obj[i] + 1 : 1;
}

console.log(
  Object.keys(obj)?.reduce((acc, i) => {
    return (acc = acc + i + String(obj[i]));
  }, "")
);
