function reverseArr(arr){
    for (let i=0; i<arr.length/2; i++){
        [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
    }
    return arr
}
const reverse = [1,2,3,4,5,6,7,8]
reverseArr(reverse)
console.log([...reverseArr(reverse.slice(0,4)), ...reverseArr(reverse.slice(4))]);

// left rotate
function reverseArr(arr){
    for (let i=0; i<arr.length/2; i++){
        [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
    }
    return arr;
}
const target = 1;
const arrayy = [12,13,23,45,67,45];
// const firstRev = reverseArr(arrayy);

// const rotateArr = [...reverseArr(firstRev.slice(0, target)), ...reverseArr(firstRev.slice(target))]
// const firstRev = reverseArr(arrayy);

const leftRevFirst = [...reverseArr(arrayy.slice(0, target)), ...reverseArr(arrayy.slice(target))]
const rotateLeft = reverseArr(leftRevFirst)

console.log(rotateLeft);
