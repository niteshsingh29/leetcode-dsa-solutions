/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let sum = 0;
    return Math.max(
      ...[
        0,
        ...gain.map((item) => {
          return (sum += item);
        }),
      ]
    );
};