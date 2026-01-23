function reverseArr(arr){
    for (let i=0; i<arr.length/2; i++){
        [arr[i], arr[arr.length-1-i]] = [arr[arr.length-1-i], arr[i]]
    }
    return arr
}
const reverse = [1,2,3,4,5,6,7,8]
reverseArr(reverse)
console.log([...reverseArr(reverse.slice(0,4)), ...reverseArr(reverse.slice(4))]);
