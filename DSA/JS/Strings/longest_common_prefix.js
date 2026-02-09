const arr = ["fliwer", "fliow", "flight"];

let i = 0;
let x = true;
let prefix = "";
while (i < arr[0].length && x) {
  let atFirst = arr[0][i];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j][i] !== atFirst){
        x = false;
        break;
    }
  }
  if (x){
    prefix += atFirst;
    i++;
  }
}

console.log(prefix);
