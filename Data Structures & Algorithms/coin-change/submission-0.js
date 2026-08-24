class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        // function helper(rem) {
        //     if (rem === 0) return 0;
        //     if (rem < 0) return Infinity;
        //     let minCoins = Infinity;
        //     for (const coin of coins) {
        //         const result = helper(rem - coin);
        //         if (result !== Infinity) {
        //             minCoins = Math.min(minCoins, 1 + result);
        //         }
        //     }
        //     return minCoins;
        // }
        // const answer = helper(amount);
        // return answer === Infinity ? -1 : answer;

        const dp = new Array(amount + 1).fill(amount + 1);
        dp[0] = 0;
        for (let i = 1; i <= amount; i++) {
            for (const coin of coins) {
                if (i - coin >= 0) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
}
