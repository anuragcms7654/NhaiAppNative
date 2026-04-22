var lengthOfLastWord = function (word) {
  let x = word.length - 1;
  while (word[x] === " ") {
    x--;
  }
  console.log(x);

  if (x === 0){
    return 1;
  }
  let output = ''
  for (let i = x; i >= 0; i--) {
    console.log(word[i]);
    if (word[i] === " ") {
      return x - i;
    }else{
        output = word[i] + output
    }
  }
  return output.length
//   return x;
};

console.log(lengthOfLastWord("day"));
