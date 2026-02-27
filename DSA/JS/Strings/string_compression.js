const strr = "aaabbc";
const obj = {};
for (let i of strr) {
  obj[i] = i in obj ? obj[i] + 1 : 1;
}

console.log(
  Object.keys(obj)?.reduce((acc, i) => {
    return (acc = acc + i + String(obj[i]));
  }, "")
);


const str = "aaabbcsjdhgfhjsssssjjwweeee";
let result = "";
let start = "";
let count = 1
for (let i of str) {
  if (i !== start){
    if (start !== ''){
      result += start+count
    }
    count = 1;
    start = i;    
  } else {
    console.log(start);
    count +=1
  }
}
console.log(result + start + count);
