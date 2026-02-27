let str11 = "silent"
let str22 = "listen"
const obj2 = {};

function checkAnaGram(str1, str2){
  const obj = {};
  if (str1.length !== str2.length){
    return false;
  }

  for (let i of str1){
    obj[i] = obj[i] ? obj[i] += 1 : 1
  }
  
  for (let i of str2){
    if (i in obj){
      obj[i] -= 1
    }else{
      return false;
    }
  }

  for (i in obj){
    if (obj[i] !== 0){
      return false;
    }
  }
  return true
}

console.log(checkAnaGram(str11, str22));