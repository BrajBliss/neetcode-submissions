class Solution {
    /**
     * @param {number[]} startTime
     * @param {number[]} endTime
     * @param {number[]} profit
     * @return {number}
     */
    jobScheduling(startTime, endTime, profit) {
        const jobs = startTime
            .map((start, i) => [start, endTime[i], profit[i]])
            .sort((a, b) => a[1] - b[1]);

        const n = jobs.length;
        const memo = new Array(n + 1).fill(-1);

        function solve(i) {
            if (i === 0) return 0;
            if (memo[i] !== -1) return memo[i];

            let skip = solve(i - 1);

            // Linear lookback for compatible job (can be optimized with binary search)
            let compatibleIndex = 0;
            for (let j = i - 1; j >= 0; j--) {
                if (jobs[j][1] <= jobs[i - 1][0]) {
                    compatibleIndex = j + 1;
                    break;
                }
            }

            let take = jobs[i - 1][2] + solve(compatibleIndex);
            return (memo[i] = Math.max(skip, take));
        }

        return solve(n);
    }
}
