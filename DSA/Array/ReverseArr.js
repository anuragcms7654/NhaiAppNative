
const arr = [1, 2, 3, 4, 5, 8, 9, 1, 23];

for (let i=0; i<arr.length/2; i++){
    console.log(arr.length/2);
    [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
}

console.log(arr);

console.log(arr.reverse());

