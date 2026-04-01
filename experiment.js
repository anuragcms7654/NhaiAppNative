var strStr = function (haystack, needle) {
    n = haystack.length;
    m = needle.length;
    let i = 0;
    let j = 0;
    let output = '';
    while (i < n) {
        if (haystack[i] === needle[j]) {
            output += needle[j];
            j++;
            console.log(output);
            if (j === m) {
                return i - m + 1
            }
        } else {
            console.log(j);
            output = '';
            j = 0
        }
        i++
    }
    return -1
};

console.log(strStr("mississippi", "issip"))