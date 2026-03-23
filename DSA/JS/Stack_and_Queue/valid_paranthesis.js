const isValidParenthesis = (str) => {
    let stack = [];
    let bracketOpen = ["(", "{", "["]
    for (let bracket of str){
        if (bracketOpen.includes(bracket)) {
            stack.push(bracket)
        } else {
            if (stack.length === 0){
                return false;
            };
            let ch = stack.pop();
            if ((ch === '(' && bracket === ')') || (ch === '{' && bracket === '}') || (ch === '[' && bracket === ']')){
                continue;
            } else {
                return false;
            };
        }
    }   
    return stack.length === 0;
};

console.log(isValidParenthesis("()"));
// TC = O(n)
// SC = O(n)