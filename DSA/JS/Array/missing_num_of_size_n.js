// Find the missing number in an array of size n (0 to n)

const arr = [3,4,5,6,7,8,9,10,11, 12, 14];

const missingNum = (nums) => {
    let smallest = Math.min(...nums);
    let largest = smallest + nums.length;
    console.log(largest);
    
    let xor = 0;

    for (let i = smallest; i <= largest; i++){
        xor ^= i;
    }

    for (let num of nums){
        xor ^= num;
    }

    return xor;

}


// arr = [3,5]

// sum1 = 1+2+3+4+5
// sum2 = 1+2+3


const missingNum2 = (nums) => {
    let smallest = Math.min(...nums);
    let largest = smallest + nums.length;
    let totalSum = nums.reduce((acc, curr)=> acc += curr, 0);

    let sum1 =  (largest*(largest + 1))/2;
    let sum2 =  ((smallest-1)*(smallest))/2;

    console.log(sum1, sum2);
    
    
    let total = sum1 - sum2 - totalSum

    return total

}

console.log((missingNum2(arr)));
