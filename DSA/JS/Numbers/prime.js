// Given a number N, determine if it's prime. (Optimize by checking divisibility only up to √N.)

const nums = 84
let isPrime = true

for (let i = 2; i < nums / 2; i++) {
   if (nums % i === 0) {
      isPrime = false
   }
}

console.log(isPrime);
