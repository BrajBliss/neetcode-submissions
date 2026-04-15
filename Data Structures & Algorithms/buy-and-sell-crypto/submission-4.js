class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // start from left
        // another loop to start from left plus one
        // keep storing the sum as long as it is
        // greater than the last being zero
        // return the variable
        let maxP = 0;
        for (let i = 0; i < prices.length; i++) {
            for (let j = i + 1; j < prices.length; j++) {
                const tempResult = prices[j] - prices[i];
                maxP = Math.max(maxP, tempResult);
            }
        }
        return maxP;
    }
}
