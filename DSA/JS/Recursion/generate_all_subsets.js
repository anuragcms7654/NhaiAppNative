const arr = [1,2,3];

const subSequences = (i, num, curr) => {
   if (i >= num.length){
    console.log(curr);
    return;
   }
   curr.push(num[i]);
   subSequences(i+1,num, curr);
   curr.pop();
   subSequences(i+1,num, curr)
}

subSequences(0, arr, []);
