class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0;
         let minBuy = prices[0];
         for (const sell of prices) {
            res = Math.max(res, sell - minBuy);
            minBuy = Math.min(minBuy, sell);  
         }
        return res;
    }
}
