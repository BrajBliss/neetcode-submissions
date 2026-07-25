class Solution {
    /**
     * @param {number[]} gas
     * @param {number[]} cost
     * @return {number}
     */
    canCompleteCircuit(gas, cost) {
        const n = gas.length;
        for (let start = 0; start < n; start++) {
            let tank = 0;
            let possible = true;
            for (let i = 0; i < n; i++) {
                const curr = (start + i) % n;
                tank += gas[curr] - cost[curr];
                if (tank < 0) {
                    possible = false;
                    break;
                }
            }
            if (possible) return start;
        }
        return -1;
    }
}
