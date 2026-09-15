let numb = 12345;
let result = 0;

while (numb > 0) {
   result = (result * 10) + (numb % 10);
   numb = Math.trunc(numb / 10);
}

console.log(result);

// usign js only

let num2 = 234567;

console.log(String(num2).split('').reverse().join(''));






