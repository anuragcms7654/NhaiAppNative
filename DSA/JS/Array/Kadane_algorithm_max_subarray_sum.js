// brute force

const arr = [-22,-10,-30,-4,-90,-33,-4,-5,-4, -9];

// let maxSum = -Infinity;
// let output = []


// for (let i=0; i<arr.length; i++){
//     let num = arr[i];
//     for (let j=i+1; j<arr.length; j++){
//         num += arr[j];
//         if (num > maxSum){
//             maxSum = num;
//             output = [i, j]
//         }
//     }
// }

// console.log(output);


let maxi = -Infinity
let total = 0

for (let i=0; i<arr.length; i++){
    total += arr[i];
    if (total > maxi){
        maxi = total;
    }
    if (total < 0){
        total = 0
    }
}

console.log(maxi);
