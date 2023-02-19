/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    
    let hashMap = {};
    
    for(let item of nums1) {
        let [item1, item2] = item
        
        if(!hashMap[item1]) hashMap[item1] = 0;
        hashMap[item1] += item2
    }
    
    for(let item of nums2) {
        let [item1, item2] = item
        
        if(!hashMap[item1]) hashMap[item1] = 0;
        hashMap[item1] += item2
    }
    
    return Object.entries(hashMap).sort((a,b) => a[0] - b[0]);
};