const first = 'loveleetcode';
const obj = {}


for (let i of first) {
   if (i in obj) {
      obj[i] += 1;
   } else {
      obj[i] = 1
   }
}

for (j in obj) {
   if (obj[j] === 1) {
      console.log(j);
      break;
   }
}