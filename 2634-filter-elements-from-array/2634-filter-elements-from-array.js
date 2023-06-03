/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let curr = [];
    
    for(let i=0; i<arr.length; i++) {
        if(fn(arr[i], i)) {
            curr.push(arr[i]);
        } 
    }
    return curr;
};