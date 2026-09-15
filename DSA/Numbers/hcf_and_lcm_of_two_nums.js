// Classic Euclidean algorithm question, often extended to LCM using (a*b)/gcd(a,b).

function hcf(a, b) {
   while (b !== 0) {
      [a, b] = [b, a % b];
   }

   return Math.abs(a);
}

function lcm(a, b) {
   return Math.abs(a * b) / hcf(a, b);
}

console.log(lcm(12, 18));