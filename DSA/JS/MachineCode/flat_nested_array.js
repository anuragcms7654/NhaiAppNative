const arr = [1, [2, [3, 4]]];

function flatArr(arr){
    const newArr = [];
    for (let i of arr){
        if (Array.isArray(i)){
            const flattend = flatArr(i);
            for (let x of flattend){
                newArr.push(x)
            }
        }else{
            newArr.push(i);
        }
    }
    return newArr
}

console.log((flatArr(arr)));
