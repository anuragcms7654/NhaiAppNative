// Find the missing number in an array of size n (0 to n)

const arr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14];

const missingNum = (nums) => {
   let smallest = Math.min(...nums);
   let largest = smallest + nums.length;
   console.log(largest);

   let xor = 0;

   for (let i = smallest; i <= largest; i++) {
      xor ^= i;
   }

   for (let num of nums) {
      xor ^= num;
   }

   return xor;

}


// arr = [3,5]

// sum1 = 1+2+3+4+5
// sum2 = 1+2+3



const getMissignNumber = (array) => {
   let smallest = Infinity;
   for (i of array) {
      if (i < smallest) smallest = i;
   }
   const largest = smallest + array.length;
   const totalSum = array.reduce((acc, current) => acc += current, 0);
   const largestSum = (largest * (largest + 1)) / 2;
   const smallestSum = ((smallest - 1) * (smallest)) / 2;
   return largestSum - smallestSum - totalSum;
}

console.log(getMissignNumber(arr));
