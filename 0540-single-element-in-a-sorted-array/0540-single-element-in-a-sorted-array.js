/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    //this is O(N) soln, I will try binary search once I get some time
    
    let hashMap = {}
    
    nums.forEach((num) => {
        if(!hashMap[num]) {
            hashMap[num] = 0;
        }
        hashMap[num]++;
    })
 
    return Number(Object.entries(hashMap).filter((item) => item[1] == 1)[0][0])
};