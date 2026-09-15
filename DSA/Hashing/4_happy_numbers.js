const convertNum = (num) => {
   const strr = String(num);
   let sum = 0
   for (let i of strr) {
      sum += i * i
   }
   return sum
}



const checkHappy = (number) => {
   const newSet = new Set();
   let numTocheck = number
   while (numTocheck !== 1) {
      if (newSet.has(numTocheck)) {
         return false
      }
      newSet.add(numTocheck)
      numTocheck = convertNum(numTocheck)
   }
   return true
}

console.log(checkHappy(2));