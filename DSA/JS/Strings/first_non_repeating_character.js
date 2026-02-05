const first = 'loveleetcode';
const obj = {}
for (let i of first){
   obj[i] = (i in obj) ? (obj[i] + 1) : 0;
}
console.log(obj);


console.log(Object.keys(obj)?.find(x => obj[x] === 0));
