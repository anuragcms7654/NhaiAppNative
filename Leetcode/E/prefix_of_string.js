const longestCommonPrefix = function (strs) {
  let output = "";
  let isEqual = true;
  for (let i = 0; i < strs[0].length; i++) {
    for (j of strs) {
      if (j[i] !== strs[0][i]) {
        return output;
      }
    }
    output += strs[0][i];
  }
  return output;
};

console.log(longestCommonPrefix(["str", "strrr", "strabc"]));
