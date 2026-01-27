const arr = [3,6,2,7,9,12,0,23,3,67]

for (let i=0; i<arr.length; i++){
    let indexToSwap = i;
    for (let j=i; j<arr.length; j++){
        if (arr[j] < arr[indexToSwap]){
            indexToSwap = j
        }
    }
    [arr[i], arr[indexToSwap]] = [arr[indexToSwap], arr[i]]
}

console.log(arr);
