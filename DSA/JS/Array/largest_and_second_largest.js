// const arr = [1,2,3,4,4,5,6,7,8,8,8,9,9,9,10,11]
const arr = [10, 5, 9];

let largest = -Infinity
let secondLargest = -Infinity

for (i of arr){
    if (i>largest) {
        secondLargest = largest
        largest = i;
    } else if (i > secondLargest && i !== largest){
        secondLargest = i
    }
}

console.log(secondLargest);

