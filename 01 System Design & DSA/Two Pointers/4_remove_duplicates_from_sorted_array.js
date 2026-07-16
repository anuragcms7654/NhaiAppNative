const arr = [2, 2, 2, 4, 5, 5, 5, 6, 6, 7, 8, 8, 9, 9, 10, 10, 11, 12]

let i = 0;
while (arr[i] === arr[i + 1]) {
   i++
}

let j = i + 1;
i = 0

while (j < arr.length) {
   if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j]
   }
   j++
}
arr.length = i + 1
console.log(arr);

