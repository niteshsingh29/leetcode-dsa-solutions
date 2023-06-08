/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  return grid.flat().filter((item) => item < 0).length;
};
