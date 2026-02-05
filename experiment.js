const arr = [7,6,5,4,9,1,3,4,0]
const target = 10;
const output = [];
const obj = {}

for (let i = 0; i < arr.length; i++){
    let remaining = target - arr[i];
    if (remaining in obj){
        output.push([obj[remaining], i])
    }
    obj[arr[i]] = i;
}

console.log(output);








