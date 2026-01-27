const arr = [0,1,5,9,11,14]
// const target = 10
// const obj = {};
// const output = []

// for (let i = 0; i<arr.length; i++){
//     let remaining = target - arr[i];
//     console.log(remaining);
    
//     if (remaining in obj){
//       output.push([i, obj[remaining]])
//     }
//     obj[arr[i]] = i;
// }

// console.log(output);

// reverse by k

// let rev = arr.reverse();
// let k = 10;
// k = (k > arr.length) ? (k % arr.length): k;
// console.log([...rev.slice(0, k).reverse(), ...rev.slice(k+1).reverse()]);


function reverse(arrr){
  let length = arrr.length
  for (let i = 0; i<length/2; i++){
    [arrr[i], arrr[length - 1 -i]] = [arrr[length - 1 -i], arrr[i]]
  }
  return arrr
}


console.log
(reverse(arr))




