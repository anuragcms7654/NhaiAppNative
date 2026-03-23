const closureFn = (count) => {
    // let count = 0;
    return function () {
        count++;
        return count;
    }
}

const counter = closureFn(0);
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

