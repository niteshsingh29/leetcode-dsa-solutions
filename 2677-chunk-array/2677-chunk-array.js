/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let res = [];
  while (arr.length) {
    res.push([...arr.splice(0, size)]);
  }

  return res;
};
