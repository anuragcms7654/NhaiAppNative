const arr = [3,6,2,7,9,12,0,23,3,67]

for (let j=arr.length-1; j>0; j--){
    let isSwap = false;
    for (let i=0; i<j; i++){
        if (arr[i] > arr[i+1]){
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
            isSwap = true
        }
    }
    console.log(j);
    if (isSwap) {
        return;
    };
};

console.log(arr);
