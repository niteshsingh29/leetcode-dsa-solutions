/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    var n = 0;
    return nums.map((num) => {
        n = num+=n
        return n;
    })
};