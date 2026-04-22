const arr = [1, 2, 2, 2, 3, 3, 4, 4, 5, 6];

let i = 0;

for (let j = i + 1; j < arr.length; j++) {
  if (arr[i] !== arr[j]) {
    i++;
    arr[i] = arr[j];
  }
}
console.log(i);
