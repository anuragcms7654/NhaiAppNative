const arr = [1,2,3,3,4,4,4,6,7,8,9]
const obj = {}
for (i of arr){
  if (obj[i]) {
    obj[i]++ 
  }else{
    obj[i] = 1
  }
}

for (i in obj){
    if (obj[i] > 1){
        console.log(i);
    }
}
