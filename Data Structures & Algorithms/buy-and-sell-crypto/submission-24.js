class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let res = 0;
        // for (let i = 0; i < prices.length; i++) {
        //     const buy = prices[i];
        //     for (let j = i + 1; j < prices.length; j++) {
        //         const sell = prices[j];
        //         res = Math.max(res, sell - buy);
        //     }
        // }
        // return res;
        let max = 0;
        let minBuy = prices[0];
        for (const sell of prices) {
            max = Math.max(max, sell - minBuy);
            minBuy = Math.min(minBuy, sell);
        }
        return max;
    }
}
