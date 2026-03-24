// generate all subsets
const arr = [1, 2, 3];

const generateAllSubsets = (i, num, curr) => {
    if (i>=num.length){
        console.log(curr);
        return;
    }
    curr.push(num[i]);
    generateAllSubsets(i + 1, num, curr);
    curr.pop();
    generateAllSubsets(i + 1, num, curr);
}

generateAllSubsets(0, arr, [])





