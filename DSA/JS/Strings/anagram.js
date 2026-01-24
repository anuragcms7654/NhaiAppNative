let str1 = "silent"
let str2 = "listen"
const obj = {};
const obj2 = {};

function check(){
    if (str1.length !== str2.length){
        console.log(false);
        return;
    }
    for (let i of str1){
        if (i in obj){
            obj[i] += 1; 
        }else{
            obj[i] = 1;
        }
    }    
    for (let i of str2){
        if (obj[i]){
            obj[i] -= 1; 
        } else {
            console.log(false);
            return;
        }
    }
    console.log(true);
    return;
}

check()
