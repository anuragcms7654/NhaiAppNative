// reverse array

const reverseArr = (array) => {
   const lengths = array.length
   for (let i = 0; i < lengths / 2; i++) {
      [array[i], array[lengths - 1 - i]] = [array[lengths - 1 - i], array[i]]
   }
   return array;
}

const reverseArrayLeftByK = (arr, k) => {
   const wholerev = reverseArr(arr);
   const firstk = reverseArr(wholerev.slice(0, k))
   const lastk = reverseArr(wholerev.slice(k))
   const newArr = [...firstk, ...lastk]
   return newArr
}

const reverseArrayRightByK = (arr, k) => {
   // const wholerev = reverseArr(arr);
   const firstk = reverseArr(arr.slice(0, k))
   const lastk = reverseArr(arr.slice(k))
   const newArr = reverseArr([...firstk, ...lastk])
   return newArr
}

const array = [12, 3, 45, 6, 7, 43, 23];
console.log(reverseArrayRightByK(array, 2));
// reverseArrayLeftByK(array, 2)
