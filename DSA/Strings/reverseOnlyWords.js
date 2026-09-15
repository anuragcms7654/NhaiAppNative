const str = "I love Python Programming"
let result = '';
let temp = ''

for (let i of str){
    if (i !== ' '){
        temp = i + temp;
    }else{
        result += temp+ ' ';
        temp = ''
    }
}

console.log(result + temp);
