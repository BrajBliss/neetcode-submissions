class Solution {
    /**
     * @param {number[]} startTime
     * @param {number[]} endTime
     * @param {number[]} profit
     * @return {number}
     */
    jobScheduling(startTime, endTime, profit) {
        // 1. Zip and sort by end time
        const jobs = startTime
            .map((start, i) => [start, endTime[i], profit[i]])
            .sort((a, b) => a[1] - b[1]);

        const n = jobs.length;
        const dp = new Array(n + 1).fill(0);

        // Binary search helper to find the latest job that ends before 'targetStart'
        function findLatestNonConflict(targetStart) {
            let left = 0;
            let right = n;

            while (left < right) {
                const mid = Math.floor((left + right) / 2);
                if (jobs[mid][1] <= targetStart) {
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }
            return left;
        }

        // 2. Iterative Bottom-Up DP loop
        for (let i = 1; i <= n; i++) {
            const [start, end, currProfit] = jobs[i - 1];

            // Find how many jobs finish before current job starts
            const lastJobIndex = findLatestNonConflict(start);

            // Recurrence relation: Max of skipping vs taking
            dp[i] = Math.max(dp[i - 1], dp[lastJobIndex] + currProfit);
        }

        return dp[n];
    }
}
