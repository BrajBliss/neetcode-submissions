class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0, l = 0, r = prices.length - 1;
        while (l < r) {
            const profit = prices[r] - prices[l];
            res = Math.max(res, profit);
            l++;
            r--;
        }
        return res;
    }
}
