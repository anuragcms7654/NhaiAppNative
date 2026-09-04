// longest SUBSTRING WITHOUT REPEATING CHARACTERS

const arr = ["flieer", "flieow", "flieght"];

let firstWord = arr[0];
let i = 0;
let prefix = ''
let check = true

while (i < firstWord.length) {
   for (let j of arr) {
      if (j[i] !== firstWord[i]) {
         check = false
         break;
      }
   }
   if (check) {
      prefix += firstWord[i];
   }
   i++;
}
console.log(prefix);