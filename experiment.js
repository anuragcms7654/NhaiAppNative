function LetterChanges(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        let ascii = char.charCodeAt(0);
        
        // Check if it's a letter and shift it by 1
        if (char >= 'a' && char <= 'z') {
            result += char === 'z' ? 'a' : String.fromCharCode(ascii + 1);
        } else if (char >= 'A' && char <= 'Z') {
            result += char === 'Z' ? 'A' : String.fromCharCode(ascii + 1);
        } else {
            result += char;
        }
    }
    return result;
}

// keep this function call here
console.log(LetterChanges("anurag"));
