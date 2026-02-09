const numPower = (num, exponent) => {
    if (exponent === 0){
        return 1;
    };
    return num * numPower(num, exponent - 1);
}

console.log(numPower(6, 3));
