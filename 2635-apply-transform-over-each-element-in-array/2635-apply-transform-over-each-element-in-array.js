/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let curr = []
    return arr.map((item, i) => fn(item, i))
};