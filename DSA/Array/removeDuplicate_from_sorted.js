// optimall one
// const arr = [1,2,3,4,4,4,5,5,6,6,7,7,8,8,9,9,9,9,9,10]

// let i = 0;
// let j = i+1;

// while (j < arr.length){
//     if (arr[j] !== arr[i]){
//         i++;
//         [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     j++;
// }

// console.log(`length is ${i+1}`);
// console.log(arr);

// brute force
// let result = []
// const obj = {}
// for (i of arr){
//     if (!(i in obj)){
//         obj[i] = 0
//         result.push(i)
//     }
// }

// for (i in obj){
//     result.push(+i)
// }

// console.log(result);

const arr = [1,1,1,2,3,4,4,4,5,5,6,6,7,7,8,8,9,9,9,9,9,10];
let i = 0;

for (let j = 1; j<arr.length; j++){
    if (arr[j] !== arr[i]){
       i++;
       arr[i] = arr[j];
    }
    console.log(arr);
}

console.log(arr.slice(0, i+1));

