// for (let i = 0; i < height.length - 1; i++) {
//    for (let j = i + 1; j < height.length; j++) {
//       const area = Math.min(height[i], height[j]) * (j - i);
//       if (area > maxarea) {
//          maxarea = area
//          obj = [i, j]
//       }
//    }
// }

// console.log(obj);
const height = [1, 6, 4, 3, 5, 3];

let obj = [];
let maxarea = 0;


let i = 0;
let j = height.length - 1

while (j > i) {
   const area = (j - i) * Math.min(height[i], height[j]);
   if (area > maxarea) {
      maxarea = area;
      obj = [i, j]
   };
   if (height[i] < height[j]) {
      i++;
   } else {
      j--;
   }
}

console.log(obj);

