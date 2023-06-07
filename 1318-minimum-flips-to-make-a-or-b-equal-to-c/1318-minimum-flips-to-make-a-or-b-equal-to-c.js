/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var minFlips = function (a, b, c) {
  let bin_A = a.toString(2);
  let bin_B = b.toString(2);
  let bin_C = c.toString(2);

  let flips = 0;
  for (
    let i = 0;
    i <= Math.max(bin_A.length, bin_B.length, bin_C.length) - 1;
    i++
  ) {
    const bitA = bin_A[bin_A.length-1-i] || "0";
    const bitB = bin_B[bin_B.length-1-i] || "0";
    const bitC = bin_C[bin_C.length-1-i] || "0";

    if (bitC === "0") {
      if (bitA === "1") {
        flips++;
      }

      if (bitB === "1") {
        flips++;
      }
    } else if (bitA === "0" && bitB === "0") {
      flips++;
    }
  }
  return flips;
};
