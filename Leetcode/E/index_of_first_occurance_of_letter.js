var strStr = function (haystack, needle) {
    n = haystack.length;
    m = needle.length;
    for (let i = 0; i < n-m+1; i++){
        if (haystack.slice(i, i+m) === needle){
            return i;
        }    
    }
    return 
};

console.log(strStr("mississippi", "issip"));