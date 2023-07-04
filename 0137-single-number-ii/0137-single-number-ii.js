/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let hashMap = {};

  nums.forEach((num) => {
    if (!hashMap[num]) {
      hashMap[num] = 0;
    }

    hashMap[num]++;
  });

  return Object.entries(hashMap).find((item) => item[1] === 1)[0];
};

