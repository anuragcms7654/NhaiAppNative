const arr = [10, 1, 5, 9, 2, 11, 14];
for (let i = 0; i < arr.length; i++) {
   let key = arr[1];
   let j = 1 - 1;
   while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
   }
   arr[j + 1] = key
}