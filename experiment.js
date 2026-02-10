const arr = [1,2,3,4,5,6,-9];


let maxi = -Infinity;
let total = 0;
for (let i = 0; i<arr.length; i++){
    total += arr[i];
    if (total > maxi){
        maxi = total;
    }
    if (total < 0){
        total = 0
    }
}

