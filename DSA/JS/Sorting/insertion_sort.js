const arr = [10, 1, 5, 9, 2, 11, 14];

for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let j = i-1;
    while (j >= 0 && arr[j] > key){
      arr[j+1] = arr[j];
      j-=1;
    }
    arr[j+1] = key;
}

console.log(arr);