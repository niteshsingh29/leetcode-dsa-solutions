/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let sHash = new Array(26).fill(0);
    let pHash = new Array(26).fill(0);
    
    let length = p.length;
    let res = new Array();

    if(p.length > s.length) return res;

    for(const char of p) {
        pHash[char.charCodeAt(0) - 97]++;
    }

    while(length--) {
        sHash[s[length].charCodeAt(0) - 97]++;
    }

    for(let i=0; i<=s.length-p.length; i++) {
        if (JSON.stringify(pHash) === JSON.stringify(sHash)) {
            res.push(i)
        }
        //sliding window, removing first adding next
        sHash[s[i].charCodeAt(0) - 97]--;
        sHash[s[i+(p.length)]?.charCodeAt(0) - 97]++;
    }

    return res;

};