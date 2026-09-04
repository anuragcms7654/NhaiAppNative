// Factorial of a number (and trailing zeroes in factorial)
// Basic factorial computation, but the trickier and more "asked" variant is: count trailing zeroes in N! (count factors of 5).


let num = 100;
// let result = 1;

// for (let i = 1; i < num + 1; i++) {
//    result *= i
// }
// console.log(result);

// count trailing zeroes in n factorial

let count = 0;

while (num >= 5) {
   num = num / 5;
   console.log(num);

   count += num
}

console.log(count);
