const mergerSortedArr = (left, right) => {
    let i = 0;
    let j = 0;
    let output = [];
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        output.push(left[i]);
        i+=1;
      } else {
        output.push(right[j]);
        j+=1;
      }
    }
    if (i === left.length){
        while (j < right.length){
            output.push(right[j]);
            j+=1;
        }
    }
    if (j === right.length){
        while (i < left.length){
            output.push(left[i]);
            i+=1;
        }
    }
    return output;
}
const arrr = [3, 6, 2, 7, 9, 12, 0, 23, 3, 67];

const mergeSort = (arr) => {
   if (arr.length <= 1){
    return arr
   }
   let mid = Math.trunc(arr.length / 2);
   let arr1 = arr.slice(0,mid);
   let arr2 = arr.slice(mid);
   const left = mergeSort(arr1);
   const right = mergeSort(arr2);
   return mergerSortedArr(left, right)
}


console.log(mergeSort(arrr));

// TC = O(N x log base2 N )
// SC = O(N)

