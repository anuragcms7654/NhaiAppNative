// Best time to buy and sell stock

const arr = [7, 2, 1, 5, 6, 4, 8]

let min = Infinity;
let max = -Infinity

let minIndex = 0
let maxIndex = 0

for (let i = 0; i < arr.length; i++) {
   if (min > arr[i]) {
      min = arr[i]
      minIndex = i
   }
   if (max < arr[i]) {
      max = arr[i]
      maxIndex = i
   }
}
if (minIndex >= maxIndex) {
   console.log('no time');

}
console.log(minIndex, maxIndex);



