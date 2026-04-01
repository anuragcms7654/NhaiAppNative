const reverseArr = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
    }
    return arr;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseBykRight = (arr, k) => {
    if (k > arr.length) {
        k = k % arr.length;
    }
    const arrCopy = JSON.parse(JSON.stringify(arr));
    const arrr = reverseArr(arrCopy);
    const result = [...reverseArr(arrr.slice(0, k)), ...reverseArr(arrr.slice(k))]
    return result;
}
const reverseBykLeft = (arr, k) => {
    if (k > arr.length) {
        k = k % arr.length;
    }
    const arrCopy = JSON.parse(JSON.stringify(arr));
    const partRev = [...reverseArr(arrCopy.slice(0, k)), ...reverseArr(arrCopy.slice(k))]
    const arrr = reverseArr(partRev);
    return arrr;
}

console.log(reverseBykRight(array, 7));
console.log(reverseBykLeft(array, 8));
console.log(array);


