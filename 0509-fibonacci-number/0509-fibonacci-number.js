/**
 * @param {number} n
 * @return {number}
 */
// dynamic programming with memoization; top-down approach
var dp = new Array(31).fill(-1);
var fib = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  if (dp[n] !== -1) return dp[n];

  return (dp[n] = fib(n - 1) + fib(n - 2));
};
