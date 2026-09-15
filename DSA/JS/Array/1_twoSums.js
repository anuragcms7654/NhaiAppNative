const arr = [7,6,5,4,9,1,3,4,0]
const target = 10
const output = []

// for (let i=0; i<arr.length; i++){
//     for (let j=i+1; j<arr.length; j++){
//         if (arr[i]+arr[j] === target){
//             output.push([i,j])
//         }
//     }
// }

// console.log(output);
const obj = {};
// Using hashmap
for (let i=0; i<arr.length; i++){
    const remaining = target - arr[i]
    if (obj.hasOwnProperty(remaining)){
       output.push([obj[remaining], i])
    }
    obj[arr[i]] = i;
}

console.log(obj);
console.log(output);

