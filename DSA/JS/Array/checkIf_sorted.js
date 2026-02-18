const arr = [1, 2, 3, 4, 5, 7, 6, 6, 7, 8, 9, 9, 9, 9, 10, 11];

function checkIfSorted() {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      console.log(false);
      return;
    }
  }
  console.log(true);
  
}

// console.log(arr.reduce((accumulator, curr)=> {
//   if (curr < accumulator.prev){
//       return {sorted: false, prev: curr}
//   }
//   return {sorted: accumulator.sorted !== undefined ? accumulator.sorted : true, prev: curr }
// }, {}).sorted);

checkIfSorted()
