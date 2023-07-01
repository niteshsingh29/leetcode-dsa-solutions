/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
    const sum = new Array(k).fill(0);
    let ans = Infinity;
    const bt = (n) => {
        if(n == cookies.length) {
            const max = Math.max(...sum);
            ans = Math.min(ans, max);
            return;
        }
        for(let i = 0; i < k; i++) {
            sum[i] += cookies[n];
            bt(n + 1);
            sum[i] -= cookies[n];
        }
    }
    bt(0);
    return ans;
};