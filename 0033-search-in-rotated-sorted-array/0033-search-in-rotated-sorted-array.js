/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0, end = nums.length - 1, pivot = -1;

    while(start<=end) {
        let mid = start + end >> 1;

        if(nums[mid] == target) {
            return mid
        }
        
        // left half sorted
        if(nums[start] <= nums[mid]) {
            if(target >= nums[start] && target <= nums[mid]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else { // right half sorted
            if(target >= nums[mid] && target <= nums[end]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return -1
};