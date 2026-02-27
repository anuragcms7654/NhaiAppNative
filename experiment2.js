const arr = [12,34,45,67]

const printSebSets = (i, num, curr) => {
   if(i >= num.length){
    console.log(curr);
    return;
   }
   curr.push(num[i]);
   printSebSets(i+1, num, curr);
   curr.pop();
   printSebSets(i+1, num, curr);
}

printSebSets(0, arr, [])