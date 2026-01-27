let a = 0;
let b = 1;
// give 10th number
let output = [];
output.push(a);
output.push(b);

while (output.length <= 10){
    let c = a+b;
    output.push(c)
    a = b;
    b = c;
}

console.log(output[output.length-1]);
