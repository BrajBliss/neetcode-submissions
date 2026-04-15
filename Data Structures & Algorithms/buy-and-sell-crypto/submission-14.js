class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let minBuy = prices[0], maxP = 0;
        for (const price of prices) {
            minBuy  = Math.min(minBuy, price);
            maxP = Math.max(maxP, price-minBuy)
        }
        return maxP;
    }
}
