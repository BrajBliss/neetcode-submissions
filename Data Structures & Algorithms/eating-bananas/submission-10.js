class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        const maxK = Math.max(...piles);
        for (let k = 1; k <= maxK; k++) {
            let totalHours = 0;
            for (const pile of piles) {
                totalHours += Math.ceil(pile / k);
            }
            if (totalHours <= h) {
                return k;
            }
        }
        return maxK;
    }
}
