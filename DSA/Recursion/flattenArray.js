const array = [1, 2, 3, 4, [2, 4, 5, [1, 3, 3], 4, 5, 6]]

const flatArr = (arr) => {
   let newArr = []
   for (i of arr) {
      if (Array.isArray(i)) {
         newArr = [...newArr, ...flatArr(i)]
      } else {
         newArr.push(i)
      }
   }
   return newArr
}

console.log(flatArr(array));
