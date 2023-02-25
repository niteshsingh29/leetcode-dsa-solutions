/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

    let result = 0;
    let lowest = prices[0];

    prices.forEach((price) => {
        lowest = Math.min(lowest, price)
        result = Math.max(result, price - lowest)
    })
    return result;
};