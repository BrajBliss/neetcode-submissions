class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // let res = 0;
        // const n = prices.length;
        // for (let i = 0; i < n; i++) {
        //     const buy = prices[i];
        //     for (let j = i + 1; j < n; j++) {
        //         const sell = prices[j];
        //         res = Math.max(res, sell - buy);
        //     }
        // }
        // return res;

        let minBuy = prices[0];
        let max = 0;
        for (const sell of prices) {
            max = Math.max(max, sell - minBuy);
            minBuy = Math.min(minBuy, sell);
        }
        return max;
    }
}
