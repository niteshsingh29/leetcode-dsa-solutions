/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    // dynamic programming with memoization; top-down approach
    let dp = new Array(n).fill(-1);
    
    if(n==0) return 0;
    if(n==1) return 1;
    
    if(dp[n]) return dp[n];
    
    return dp[n] = fib(n-1) + fib(n-2);
};