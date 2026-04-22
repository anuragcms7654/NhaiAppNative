// brute force

const arr = [-22, -10, -30, -4, -90, -33, -4, -5, -4, -2, 0, -9];

let maxi = -Infinity;
let total = 0;

for (let i = 0; i < arr.length; i++) {
  total += arr[i];
  if (total > maxi) {
    maxi = total;
  }
  if (total < 0) {
    total = 0;
  }
}

console.log(maxi);
