class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    //    two pointers sliding window?
    // left is buying day, right is selling day
    // start comparing left and right
    // profit as long as right is greater than left
    // if left is not less than right
    // make left equal right so we have our new low
    let l = 0, r = 1, maxP = 0;
    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            maxP = Math.max(maxP, prices[r] - prices[l]);
        } else l = r;
        r++;
    }
    return maxP;
    }
}
