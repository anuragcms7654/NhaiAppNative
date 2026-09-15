
const out= []
const fibRecursion = (a, b, count) => {
    if (count === 50){
        return a+b;
    }
    out.push(a+b)
    count++
    return fibRecursion(b, a+b, count)
}

console.log(fibRecursion(0,1,0));
console.log([0, 1, ...out]);


