let num = 123321;
let result = 0;
let toBeCompare = num

while (num > 0) {
   result = (result * 10) + (num % 10);
   num = Math.trunc(num / 10)
}

if (result === toBeCompare) {
   console.log("yes its palindrome");
} else {
   console.log("Not a palindrome");
}