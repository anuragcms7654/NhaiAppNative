const arr = [1,2,3,0,0,0,3,2,6,33,76,0,76]

let i = 0;

while (i < arr.length){
    if (arr[i] === 0){
       break;
    };
    i++
}

if (i === arr.length){
    return 
}

j = i+1;

while(j < arr.length){
    if (arr[j] !== 0){
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
    }
    j++
}

console.log(arr);
