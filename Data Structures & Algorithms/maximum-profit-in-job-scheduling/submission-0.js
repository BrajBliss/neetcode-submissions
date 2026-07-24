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

        function solve(i) {
            if (i === 0) return 0;

            // Option 1: Skip job i-1
            let maxProfit = solve(i - 1);

            // Option 2: Take job i-1, find latest compatible job j
            let curr = jobs[i - 1];
            let compatibleIndex = 0;
            for (let j = i - 1; j >= 0; j--) {
                if (jobs[j][1] <= curr[0]) {
                    compatibleIndex = j + 1; // +1 because dp array is 1-indexed
                    break;
                }
            }

            let takeProfit = curr[2] + solve(compatibleIndex);
            return Math.max(maxProfit, takeProfit);
        }

        return solve(jobs.length);
    }
}
